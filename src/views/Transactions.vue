<template>
  <card
    title="transactions"
    class="transactions-card"
  >
    <div class="page">
      <p>TOTAL AMOUNT: {{ totalCount }}</P>
      <el-pagination
        class="pagination"
        background
        layout="prev, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="totalCount"
        @prev-click="onPageChange"
        @next-click="onPageChange"
        @current-change="onPageChange"
      />
    </div>
    <transaction-list :list="list" />
  </Card>
</template>

<script>
import Card from '@/components/Card';
import TransactionList from '@/components/TransactionList';
import { mapGetters, mapState } from 'vuex';

export default {
  components: { Card, 'transaction-list': TransactionList },
  computed: {
    ...mapState('transactions', ['list', 'totalCount', 'currentPage', 'pageSize']),
  },
  methods: {
    onPageChange: function (page) {
      const { pageSize, totalCount } = this;
      this.$store.dispatch('transactions/fetchList', { action: 'send', page });
    },
  },
  mounted: async function () {
    this.$store.dispatch('transactions/fetchList');
  },
}
</script>

<style lang="scss">
.transactions-card {
  margin: 32px;

  .height {
    color: $blue;
  }

  > .content {
    padding: 16px 32px;
  }

  .page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
}
</style>


