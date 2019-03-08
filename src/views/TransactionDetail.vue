<template>
  <div class="transaction-detail-container">
    <sub-title
      title="TRANSACTION"
      :sub="hash"
    />
    <div
      class="transaction-detail-content"
      v-if="detail"
    >
      <data-area title="Transaction Information">
        <data-item label="TxHash">
          <span>{{ detail.txhash }}</span>
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
        <data-item
          label="From"
          v-if="get(detail, 'tx.value.msg.0.value.from_address')"
        >
          <hg-link
            type="address"
            :content="get(detail, 'tx.value.msg.0.value.from_address')"
            :ellipsis="false"
          />
        </data-item>
        <data-item
          label="To"
          v-if="get(detail, 'tx.value.msg.0.value.to_address')"
        >
          <hg-link
            type="address"
            :content="get(detail, 'tx.value.msg.0.value.to_address')"
            :ellipsis="false"
          />
        </data-item>
        <data-item
          label="Validator"
          v-if="get(detail, 'tx.value.msg.0.value.validator_addr')"
        >
          <hg-link
            type="address"
            :content="get(detail, 'tx.value.msg.0.value.validator_addr')"
            :ellipsis="false"
          />
        </data-item>
        <data-item
          label="Delegator"
          v-if="get(detail, 'tx.value.msg.0.value.delegator_addr')"
        >
          <hg-link
            type="address"
            :content="get(detail, 'tx.value.msg.0.value.delegator_addr')"
            :ellipsis="false"
          />
        </data-item>
        <data-item
          label="Amount"
          v-if="get(detail, 'tx.value.msg.0.value.amount.0.denom')"
        >
          {{ get(detail, 'tx.value.msg.0.value.amount.0.amount') }}
          {{ get(detail, 'tx.value.msg.0.value.amount.0.denom') }}
        </data-item>
        <data-item label="Gas Used">
          <span>{{ get(detail, 'gas_used') }}</span>
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

    hash: function() {
      return this.$route.params.hash;
    },
    detail: function() {
      const detail = this.details[this.hash];
      return isEmpty(detail) ? {} : detail;
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


