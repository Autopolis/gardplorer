import { isEmpty, get } from 'lodash';
import ajax from '@/utils/ajax.js';

export default {
  namespaced: true,

  state: {
    name: '',
    pool: {}
  },

  getters: {},

  mutations: {
    setName: function(state, name) {
      state.name = name;
    },
    setPool: function(state, pool) {
      state.pool = pool;
    }
  },

  actions: {
    fetch: async function(context) {
      const { data } = await ajax.get('/node_info');
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setName', get(data, 'network'));
      return Promise.resolve();
    },
    fetchPool: async function(context) {
      const { data } = await ajax.get('/staking/pool');
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setPool', data);
      return Promise.resolve();
    }
  }
};
