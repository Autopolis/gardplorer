<template>
  <card
    title="transactions"
    class="transactions-card"
  >
    <div class="page">
      <p>TOTAL AMOUNT: {{ totalCount }}</P>
    </div>
    <transaction-list :list="lastList" />
  </Card>
</template>

<script>
import Card from "@/components/Card";
import TransactionList from "@/components/TransactionList";
import { mapGetters, mapState } from "vuex";

export default {
  components: { Card, "transaction-list": TransactionList },
  computed: {
    ...mapState("transactions", ["lastList", "totalCount"])
  },
  methods: {
    onPageChange: function(page) {
      const { pageSize, totalCount } = this;
      this.$store.dispatch("transactions/fetchList", { action: "send", page });
    }
  },
  mounted: async function() {
    await this.$store.dispatch("transactions/fetchTotalCount");
    this.$store.dispatch("transactions/fetchLastList", { targetNum: 30 });
  }
};
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


