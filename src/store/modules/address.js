import { isEmpty, get } from 'lodash';
import ajax from '@/utils/ajax.js';

export default {
  namespaced: true,

  state: {
    info: {}
  },

  getters: {},

  mutations: {
    setInfo: function(state, info) {
      state.info = info;
    }
  },

  actions: {
    fetch: async function(context, address) {
      context.commit('setInfo', {});
      const { data } = await ajax.get(`api/bank/balances/${address}`);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setInfo', data);
      return Promise.resolve();
    }
  }
};
