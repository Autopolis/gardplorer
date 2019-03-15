<template>
  <div>
    <sub-title
      title="TRANSACTION"
      :sub="hash"
    />
    <div
      class="transaction-detail-content"
      v-if="detail"
    >
      <card title="Transaction Information">
        <data-item
          v-for="item in fields[type]"
          :key="item.name"
          :label="item.name"
        >
          <hg-link
            v-if="item.linkType"
            :type="item.linkType"
            :content="get(detail, item.field)"
            :ellipsis="false"
          />
          <span v-if="!item.linkType">
            {{ item.field instanceof Array ? item.field.map(i => get(detail, i)).join(' ') : get(detail, item.field) || '-'}}
          </span>
        </data-item>
      </card>
    </div>
  </div>
</template>

<script>
import { isEmpty, get } from "lodash";
import { mapGetters, mapState } from "vuex";

import { txFieldsMap } from "@/constants";

export default {
  data: function() {
    return { fields: txFieldsMap };
  },
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
