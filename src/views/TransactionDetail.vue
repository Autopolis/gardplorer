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
            <data-amount
              v-if="(get(detail, item.field) instanceof Array)"
              :list="get(detail, item.field)"
            />
            <data-amount
              v-else-if="(get(detail, item.field) instanceof Object)"
              :list="[get(detail, item.field)]"
            />
            <data-amount
              v-else-if="item.name === 'Amount'"
              :list="[{denom: get(detail, get(fields[type].find(f => f.linkType === 'token'), 'field')), amount: get(detail, item.field)}]"
            />
            <data-amount
              v-else-if="item.name === 'Rewards'"
              :list="rewardList(get(detail, item.field))"
            />
            <span v-else-if="item.name === 'Lock End'">
              {{ get(detail, item.field) | formatTime }}
            </span>
            <span v-else-if="item.name === 'Description'">
              {{ description }}
            </span>
            <span v-else-if="item.name.match('Time')">
              {{ get(detail, item.field) | formatTime }}
            </span>
            <span v-else-if="typeof get(detail, item.field) === 'boolean'">
              {{ get(detail, item.field).toString() }}
            </span>
            <span v-else>
              {{ get(detail, item.field) || '-'}}
            </span>
          </span>
        </data-item>
      </card>
    </div>
  </div>
</template>

<script>
import { isEmpty, get } from "lodash";
import { mapGetters, mapState } from "vuex";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";

import { txFieldsMap } from "@/constants";

export default {
  data: function() {
    return { fields: txFieldsMap };
  },
  methods: {
    get,
    rewardList(val) {
      return [{ denom: "agard", amount: val.replace(/[^0-9]/gi, "") }];
    }
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
    description: function() {
      const str = get(
        this.detail,
        get(this.fields[this.type].find(f => f.name === "Description"), "field")
      );
      if (!str) {
        return "-";
      }
      try {
        return Utf8.stringify(Base64.parse(str));
      } catch (e) {
        return str;
      }
    },
    type: function() {
      const action = get(this.detail, "tags", []).filter(
        item => item.key === "action"
      )[0];
      // issue 模块交易失败的时候 tags 中不包含 category 字段。
      // if (action && action.value.match("issue")) {
      //   return action && action.value;
      // }
      const category = get(this.detail, "tags", []).filter(
        item => item.key === "category"
      )[0];
      return `${action && action.value}_${category && category.value}`;
    }
  },
  watch: {
    detail() {
      if (isEmpty(this.detail)) {
        return false;
      }
      // fetch token detail
      const action = get(this.detail, "tags.0.value");
      let denom = "";
      if (action.match("issue")) {
        denom = get(this.detail, "tags.2.value");
      }
      if (action.match("inject")) {
        denom = get(this.detail, "tx.value.msg.0.value.amount.denom");
      }
      if (action.match("create")) {
        denom = get(
          this.detail,
          "tx.value.msg.0.value.params.total_amount.token.denom"
        );
      }
      if (action.match("take")) {
        denom = get(this.detail, "tx.value.msg.0.value.value.denom");
      }
      if (denom && denom.match(/^coin.{10}$/)) {
        this.$store.dispatch("tokens/fetchDetail", denom);
        return;
      }
      if (action.match("send")) {
        const coins = get(this.detail, "tx.value.msg.0.value.amount");
        coins.forEach(i => {
          if (i.denom.match(/^coin.{10}$/)) {
            this.$store.dispatch("tokens/fetchDetail", i.denom);
          }
        });
      }
      if (action === "make") {
        const coins = [
          get(this.detail, "tx.value.msg.0.value.target"),
          get(this.detail, "tx.value.msg.0.value.supply")
        ];
        coins.forEach(i => {
          if (i.denom.match(/^coin.{10}$/)) {
            this.$store.dispatch("tokens/fetchDetail", i.denom);
          }
        });
      }
    }
  },
  mounted() {
    this.$store.dispatch("transactions/fetch", this.hash);
  }
};
</script>
