<template>
  <div class="transaction-detail-container">
    <sub-title :title="`TRANSACTION ${hash}`" />
    <div
      class="transaction-detail-content"
      v-if="detail"
    >
      <data-area title="Transaction Information">
        <data-item label="TxHash">
          <span>{{ detail.hash }}</span>
        </data-item>
        <data-item label="Block">
          <hg-link
            type="block"
            :content="detail.height"
          />
        </data-item>
        <data-item label="Type">
          <span>{{ type }}</span>
        </data-item>
        <data-item label="From">
          <hg-link
            type="address"
            :content="get(detail, 'input.address')"
            :ellipsis="false"
          />
        </data-item>
        <data-item label="To">
          <hg-link
            type="address"
            :content="get(detail, 'output.address')"
            :ellipsis="false"
          />
        </data-item>
        <data-item label="Amount">
          {{ get(detail, 'coin.amount') }}
          {{ get(detail, 'coin.denom') }}
        </data-item>
        <data-item label="Fee">
          {{ get(detail, 'fee.amount') }}
          {{ get(detail, 'coin.denom') }}
        </data-item>
        <data-item label="Gas Used">
          <span>{{ get(detail, 'result.gas_used') }}</span>
        </data-item>
        <data-item label="Memo">
          <span>{{ get(detail, 'tx.value.memo') || '-' }}</span>
        </data-item>
      </data-area>
    </div>
  </div>
</template>

<script>
import { isEmpty, get } from "lodash";
import { mapGetters, mapState } from "vuex";

export default {
  methods: {
    get
  },
  computed: {
    ...mapState("transactions", ["details"]),
    ...mapGetters("transactions", ["formatDetail"]),

    hash: function() {
      return this.$route.params.hash;
    },
    detail: function() {
      const detail = this.details[this.hash];
      if (isEmpty(detail)) return false;

      return this.formatDetail(detail);
    },
    type: function() {
      const action = get(this.detail, "tags", []).filter(
        item => item.key === "action"
      )[0];
      return action && action.value;
    }
  },
  mounted() {
    this.$store.dispatch("transactions/fetch", this.hash);
  }
};
</script>

<style lang="scss" scoped>
.transaction-detail-container {
  width: 100%;
}

.transaction-detail-content {
  padding: $basic-padding;
}
</style>


