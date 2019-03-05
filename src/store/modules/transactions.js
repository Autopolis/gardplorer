import { get, isEmpty } from 'lodash';
import $ajax from '@/utils/ajax';

const formatDetail = data => {
  if (!data) return null;
  return {
    ...data,
    from_addr: get(data, 'tx.value.msg.0.value.from_address'),
    to_addr: get(data, 'tx.value.msg.0.value.to_address'),
    coin: get(data, 'tx.value.msg.0.value.amount.0'),
    fee: get(data, 'tx.value.fee')
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
    format: () => data => formatDetail(data)
  },
  mutations: {
    setTotalCount(state, data) {
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
      const PAGE_SIZE = 30;

      const action = config.action || 'send';
      const totalCount = context.state.totalCount;
      const lastPage = Math.ceil(totalCount / PAGE_SIZE) || 1;

      let params = {
        action,
        limit: PAGE_SIZE,
        page: lastPage
      };

      context.commit('setLoad', true);
      var { data } = await $ajax.get('/api/txs', { params });
      if (isEmpty(data)) {
        context.commit('setLoad', false);
        return Promise.reject();
      }
      let txs = data.txs;
      if (txs.length < PAGE_SIZE && totalCount > PAGE_SIZE) {
        const prePageParams = { ...params, page: lastPage - 1 };
        var { data } = await $ajax.get('/api/txs', { params: prePageParams });
        if (isEmpty(data)) {
          context.commit('setLoad', false);
          return Promise.reject();
        }
        txs = txs.concat(data.txs);
      }
      context.commit('setLoad', false);
      context.commit('setTotalCount', data.totalCount);
      context.commit('setLastList', txs);
      return Promise.resolve();
    }
  }
};
