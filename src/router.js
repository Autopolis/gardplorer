import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Blocks from './views/Blocks.vue';
import BlockDetail from './views/BlockDetail.vue';
import Transactions from './views/Transactions.vue';
import TransactionDetail from './views/TransactionDetail.vue';
import AddressDetail from './views/AddressDetail.vue';
import Validators from './views/Validators.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/blocks',
      name: 'blocks',
      component: Blocks,
    },
    {
      path: '/block/:id',
      name: 'blockDetail',
      component: BlockDetail,
    },
    {
      path: '/txs',
      name: 'transactions',
      component: Transactions,
    },
    {
      path: '/tx/:hash',
      name: 'transactionDetail',
      component: TransactionDetail,
    },
    {
      path: '/address/:address',
      name: 'addressDetail',
      component: AddressDetail,
    },
    {
      path: '/validators',
      name: 'validators',
      component: Validators
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ],
});
