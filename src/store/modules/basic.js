import { isEmpty, get } from 'lodash'
import ajax from '@/utils/ajax.js'

export default {
  namespaced: true,

  state: {
    name: ''
  },

  getters: {},

  mutations: {
    setName: function(state, name) {
      state.name = name
    }
  },

  actions: {
    fetch: async function(context) {
      const { data } = await ajax.get('/node/abci_info')
      const result = get(data, 'result')
      if (isEmpty(result)) {
        return Promise.reject()
      }
      const { response } = result
      context.commit('setName', get(response, 'data'))
      return Promise.resolve()
    }
  }
}
