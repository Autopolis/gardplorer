import { get, isEmpty } from 'lodash';
import $ajax from '@/utils/ajax';

export default {
  namespaced: true,
  state: {
    pageSize: 20,
    currentPage: 1,
    lastHeight: 0,
    list: [],
    details: {},
    validatorsets: {}
  },
  getters: {
    lastList: state => state.list.slice(0, 20),
    list: state => {
      const { list, details, validatorsets } = state;
      return list.map(item => {
        const height = get(item, 'header.height');
        if (isEmpty(details[height])) return item;
        const validators = get(validatorsets, [height, 'validators'], []);
        const block = get(details, [height, 'block']);
        return { ...item, block, validators };
      });
    }
  },
  mutations: {
    setCurrentPage: function(state, page) {
      state.currentPage = page;
    },
    setLastHeight: function(state, height) {
      height = Number(height);
      if (state.lastHeight > height) {
        return false;
      }
      state.lastHeight = height;
    },
    setList: function(state, list) {
      state.list = list;
    },
    setDetails: function(state, data) {
      state.details = Object.assign({}, data, state.details);
    },
    setValidatorsets: function(state, data) {
      state.validatorsets = Object.assign({}, data, state.validatorsets);
    }
  },
  actions: {
    fetchList: async function(context, params = { page: 1 }) {
      const { minHeight, maxHeight, page } = params;
      const { data } = await $ajax.get('/node/blockchain', {
        params: { minHeight, maxHeight, random: new Date().getTime() }
      });
      const result = get(data, 'result');
      if (isEmpty(result)) {
        return Promise.reject();
      }
      const list = get(result, 'block_metas');
      const lastHeight = get(result, 'last_height');

      page && context.commit('setCurrentPage', page);
      context.commit('setList', list);
      context.commit('setLastHeight', lastHeight);

      list.forEach(item => {
        const height = get(item, 'header.height');
        const details = context.state.details;
        if (isEmpty(details[height])) {
          context.dispatch('fetchDetail', item.header.height);
        }
      });
      return Promise.resolve();
    },
    fetchValidatorset: async function(context, height) {
      const { data } = await $ajax.get(`/api/validatorsets/${height}`);
      if (!isEmpty(data)) {
        context.commit('setValidatorsets', { [height]: data });
      }
    },
    fetchDetail: async function(context, height) {
      if (!isEmpty(context.state.details[height])) {
        return Promise.resolve(context.state.details[height]);
      }
      const { data } = await $ajax.get(`/api/blocks/${height}`);
      if (!isEmpty(data)) {
        context.dispatch('fetchValidatorset', height);
        context.commit('setDetails', { [height]: data });
        return Promise.resolve(data);
      }
    }
  }
};
