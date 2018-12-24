import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import * as filters from '@/utils/filters.js';
import rootStore from './store/index.js';

import Card from '@/components/Card';
import Link from '@/components/Link';
import TransactionList from '@/components/TransactionList';
import SubTitle from '@/components/SubTitle';
import DataArea from '@/components/DataArea/index.vue';
import DataItem from '@/components/DataArea/item.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Vuex);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

const store = new Vuex.Store(rootStore);

// get blockchain basic info
store.dispatch('basic/fetch');

// 注册全局组件
Vue.component('Card', Card);
Vue.component('hg-link', Link);
Vue.component('transaction-list', TransactionList);
Vue.component('sub-title', SubTitle);
Vue.component('data-area', DataArea);
Vue.component('data-item', DataItem);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

