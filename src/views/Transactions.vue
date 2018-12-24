<template>
<card title="transactions" class="transactions-card">
  <transaction-list :list="list" />
</Card>
</template>

<script>
import Card from '@/components/Card';
import TransactionList from '@/components/TransactionList';
import { mapGetters, mapState } from 'vuex';

export default {
  components: { Card, 'transaction-list': TransactionList},
  computed: {
    ...mapState('transactions', ['list']),
  },
  mounted: function () {
    this.$store.dispatch('transactions/fetchList');
  },
}
</script>

<style lang="scss">
.transactions-card {
  margin:  32px 64px 64px; 

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


