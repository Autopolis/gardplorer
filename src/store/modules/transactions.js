import { get, isEmpty, map } from 'lodash';
import { enc as crypto } from 'crypto-js';
import $ajax from '@/utils/ajax';

const formatDetail = data => {
  if (!data) return null;
  const tags = get(data, 'result.tags', []).map(item => {
    try {
      return {
        key: crypto.Base64.parse(item.key).toString(crypto.Utf8),
        value: crypto.Base64.parse(item.value).toString(crypto.Utf8)
      };
    } catch (e) {}
  });
  return {
    ...data,
    tags,
    input: get(data, 'tx.value.msg.0.value.inputs.0'),
    output: get(data, 'tx.value.msg.0.value.outputs.0'),
    coin: get(data, 'tx.value.msg.0.value.inputs.0.coins.0'),
    fee: get(data, 'tx.value.fee.amount.0')
  };
};

export default {
  namespaced: true,
  state: {
    pageSize: 20,
    currentPage: 1,
    totalCount: 0,
    list: [],
    details: {},
    lastList: [],
    load: false
  },
  getters: {
    lastList: state => state.list.slice(0, 10),
    format: staet => data => {
      return formatDetail(data);
    }
  },
  mutations: {
    setTotalCount: function(state, data) {
      state.totalCount = data;
    },
    setList: function(state, list) {
      state.list = list.reverse();
    },
    setLastList: function(state, list) {
      state.lastList = list.reverse();
    },
    setDetails: function(state, data) {
      const details = state.details;
      const { hash } = data;
      if (isEmpty(details[hash])) {
        state.details = Object.assign({}, state.details, { [hash]: data });
      }
    },
    setLoad: function(state, load) {
      state.load = load;
    }
  },
  actions: {
    fetchTotalCount: async function(context, params = { action: 'send', page: 1 }) {
      context.commit('setLoad', true);
      const { data } = await $ajax.get('/api/txs', {
        params: { action: params.action || 'send', page: 1 }
      });
      context.commit('setLoad', false);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setTotalCount', Number(data.totalCount));
      return Promise.resolve();
    },
    fetchList: async function(context, params = { action: 'send', page: 1 }) {
      params.size = context.state.pageSize;
      context.commit('setLoad', true);
      const { data } = await $ajax.get('/api/txs', { params });
      context.commit('setLoad', false);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setTotalCount', Number(data.totalCount));
      context.commit('setList', data.txs);
      return Promise.resolve();
    },
    fetch: async function(context, hash) {
      // check if existed;
      if (!isEmpty(context.state.details[hash])) {
        return Promise.resolve();
      }
      context.commit('setLoad', true);
      const { data } = await $ajax.get(`/api/txs/${hash}`);
      context.commit('setLoad', false);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setDetails', data);
      return Promise.resolve(data);
    },
    fetchLastList: async function(context, config = {}) {
      //clear old data
      context.commit('setLastList', []);

      // fetch totalCounot
      const targetNum = config.targetNum || 20;
      const totalCount = context.state.totalCount;
      const action = config.action || 'send';

      let params = {
        action,
        size: totalCount - targetNum,
        page: 2
      };
      if (totalCount - targetNum < targetNum) {
        params = {
          action,
          size: totalCount,
          page: 1
        };
      }

      context.commit('setLoad', true);
      const { data } = await $ajax.get('/api/txs', { params });
      context.commit('setLoad', false);
      if (!isEmpty(data)) {
        context.commit('setTotalCount', data.totalCount);
        context.commit('setLastList', data.txs);
      }
      return Promise.resolve();
    }
  }
};
