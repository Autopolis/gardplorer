import {
  set,
  isEmpty
} from 'lodash';
import $ajax from '@/utils/ajax';

export default {
  namespaced: true,
  state: {
    details: {},
    load: false
  },
  mutations: {
    setDetails: function (state, data) {
      state.details = Object.assign({}, state.details, data);
    },
    setLoad: function (state, load) {
      state.load = load;
    }
  },
  actions: {
    fetchDetail: async function (context, id) {
      // check if existed;
      if (!isEmpty(context.state.details[id])) {
        return Promise.resolve();
      }
      context.commit('setLoad', true);
      const {
        data
      } = await $ajax.get(`/issue/query/${id}`);
      context.commit('setLoad', false);
      if (isEmpty(data)) {
        return Promise.reject();
      }
      context.commit('setDetails', {
        [id]: data.value
      });
      return Promise.resolve(data);
    }
  }
};
