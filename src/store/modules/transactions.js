import { get, isEmpty, map } from 'lodash'
import { enc as crypto } from 'crypto-js'
import $ajax from '@/utils/ajax'

const formatDetail = data => {
  if (!data) return null
  const tags = get(data, 'result.tags', []).map(item => ({
    key: crypto.Base64.parse(item.key).toString(crypto.Utf8),
    value: crypto.Base64.parse(item.value).toString(crypto.Utf8)
  }))
  return {
    ...data,
    tags,
    input: get(data, 'tx.value.msg.0.value.inputs.0'),
    output: get(data, 'tx.value.msg.0.value.outputs.0'),
    coin: get(data, 'tx.value.msg.0.value.inputs.0.coins.0'),
    fee: get(data, 'tx.value.fee.amount.0')
  }
}
export default {
  namespaced: true,
  state: {
    list: [],
    details: {}
  },
  getters: {
    lastList: state => state.list.slice(0, 10),
    formatList: state => list => {
      return list.map(formatDetail)
    },
    formatDetail: state => data => {
      return formatDetail(data)
    },
    getDetail: state => hash => {
      return state.details[hash]
    }
  },
  mutations: {
    setList: function(state, list) {
      state.list = list.reverse()
    },
    setDetails: function(state, data) {
      const details = state.details
      const { hash } = data
      if (isEmpty(details[hash])) {
        state.details = Object.assign({}, state.details, { [hash]: data })
      }
    }
  },
  actions: {
    fetchList: async function(context, params = { action: 'send' }) {
      // clear old data
      context.list = []
      const { data } = await $ajax.get('/api/txs', { params })
      if (isEmpty(data)) {
        context.commit('setList', [])
        return Promise.reject()
      }
      context.commit('setList', data)
      return Promise.resolve()
    },
    fetch: async function(context, hash) {
      const { data } = await $ajax.get(`/api/txs/${hash}`)
      if (isEmpty(data)) {
        return Promise.reject()
      }
      context.commit('setDetails', data)
      return Promise.resolve()
    }
  }
}
