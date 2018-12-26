<template>
  <div class="address-detail-container">
    <sub-title :title="`ADDRESS #${address}`"></sub-title>
    <div
      class="address-detail-content"
      v-if="info"
    >
      <data-area title="Address Information">
        <data-item label="Balance">
          <span> {{ get(info, [0, 'amount']) }} {{ get(info, [0, 'denom']) }} </span>
        </data-item>
        <data-item label="Address">
          <span>{{ address }}</span>
        </data-item>
      </data-area>
      <data-area
        title="Transaction List"
        v-if="!isEmpty(transactionList)"
      >
        <transaction-list :list="transactionList" />
      </data-area>
    </div>
  </div>
</template>

<script>
import { get, isEmpty } from "lodash";
import { mapState, mapGetters } from "vuex";

export default {
  methods: { get, isEmpty },

  computed: {
    ...mapState("address", ["info"]),
    ...mapState("transactions", { transactionList: "list" }),
    address: function() {
      return this.$route.params.address;
    }
  },

  beforeRouteUpdate(to, from, next) {
    const address = to.params.address;
    this.$store.dispatch("address/fetch", address);
    this.$store.dispatch("transactions/fetchList", {
      action: "send",
      sender: address
    });
    next();
  },

  mounted() {
    this.$store.dispatch("address/fetch", this.address);
    this.$store.dispatch("transactions/fetchList", {
      action: "send",
      sender: this.address
    });
  }
};
</script>

<style lang="scss" scoped>
.address-detail-container {
  width: 100%;
}
.address-detail-content {
  padding: $basic-padding;
}
</style>