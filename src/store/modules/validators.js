import { set, isEmpty } from 'lodash';
import $ajax from '@/utils/ajax';

export default {
  namespaced: true,

  state: {
    list: [],
    consPubMap: {},
    latest: null,
    details: {}
  },

  getters: {
    onlineList: state => state.list.filter(i => !i.jailed)
  },

  mutations: {
    setList: function(state, data) {
      set(state, 'list', data);
    },
    setDetail: function(state, data) {
      state.details = Object.assign({}, state.details, data);
    },
    setConsPubMap: function(state, data) {
      state.consPubMap = Object.assign({}, state.consPubMap, data);
    }
  },

  actions: {
    fetchAll: async function(context) {
      const { data } = await $ajax.get(`/api/staking/validators`);
      if (!isEmpty(data)) {
        context.commit('setList', data);
        data.forEach(i => {
          context.commit('setConsPubMap', { [i.consensus_pubkey]: i });
        });
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
