import { set, isEmpty } from 'lodash';
import $ajax from '@/utils/ajax';

export default {
  namespaced: true,

  state: {
    list: [],
    latest: null,
    details: {}
  },

  mutations: {
    setList: function(state, data) {
      set(state, 'list', data);
    },
    setDetail: function(state, data) {
      state.details = Object.assign({}, state.details, data);
    }
  },

  actions: {
    fetchAll: async function(context) {
      const { data } = await $ajax.get(`/api/staking/validators`);
      if (!isEmpty(data)) {
        context.commit('setList', data);
      }
    },
    fetchDetail: async function(context, address) {
      if (!isEmpty(context.state.details[address])) {
        return Promise.resolve();
      }
      const { data } = await $ajax.get(`/api/staking/validators/${address}`);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setDetail', { [address]: data });
      return Promise.resolve();
    }
  }
};
