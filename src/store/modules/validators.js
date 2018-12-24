import { set, isEmpty } from 'lodash'
import $ajax from '@/utils/ajax'

export default {
  namespaced: true,

  state: {
    list: [],
    latest: null,
  },

  mutations: {
    setList: function (state, data) {
      set(state, 'list', data);
    }
  },

  actions: {
    fetchAll: async function (context) {
      const { data } = await $ajax.get(`/api/stake/validators`);
      if (!isEmpty(data)) {
        context.commit('setList', data);
      }
    },
  }
}
