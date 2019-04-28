import { set, isEmpty } from 'lodash';
import $ajax from '@/utils/ajax';

export default {
  namespaced: true,
  state: {
    pageSize: 20,
    totalCount: 0,
    list: [],
    details: {},
    load: false
  },
  mutations: {
    setList: function(state, list) {
      state.list = list;
    },
    setTotalCount(state, data) {
      state.totalCount = data;
    },
    setDetails: function(state, data) {
      state.details = Object.assign({}, state.details, data);
    },
    setLoad: function(state, load) {
      state.load = load;
    }
  },
  actions: {
    fetchList: async function(context, params = { page: 1 }) {
      params.limit = context.state.pageSize;
      context.commit('setLoad', true);
      const { data } = await $ajax.get('/api/issue/list', { params });
      context.commit('setLoad', false);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setTotalCount', Number(data.totalCount));
      context.commit('setList', data);
      return Promise.resolve();
    },
    fetchDetail: async function(context, id) {
      // check if existed;
      if (!isEmpty(context.state.details[id])) {
        return Promise.resolve();
      }
      context.commit('setLoad', true);
      const { data } = await $ajax.get(`/api/issue/query/${id}`);
      context.commit('setLoad', false);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setDetails', { [id]: data.value });
      return Promise.resolve(data);
    }
  }
};
