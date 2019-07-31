import {
  isEmpty,
  get
} from 'lodash';
import ajax from '@/utils/ajax.js';

export default {
  namespaced: true,

  state: {
    info: [],
    addressMap: {}
  },

  getters: {},

  mutations: {
    setInfo: function (state, info) {
      state.info = info;
    },
    setAddressMap: function (state, data) {
      state.addressMap = Object.assign({}, state.addressMap, data);
    },
  },

  actions: {
    fetch: async function (context, address) {
      context.commit('setInfo', []);
      const {
        data
      } = await ajax.get(`/bank/balances/${address}`);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      data.sort(i => (i.denom === 'gard' ? -1 : 1));
      context.commit('setInfo', data);
      return Promise.resolve();
    },
    fetchDetail: async function (context, address) {
      const {
        data
      } = await ajax.get(`/account/query/${address}`)
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setAddressMap', {
        [address]: data
      })
    }
  }
};
