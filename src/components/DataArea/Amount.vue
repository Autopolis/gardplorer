<template>
  <span>
    {{viewList.join(', ')}}
  </span>
</template>

<script>
import { mapState } from "vuex";
import { get, isEmpty } from "lodash";
import Big from "big.js";

export default {
  props: {
    list: Array
  },
  data() {
    return {
      viewList: []
    };
  },
  computed: {
    ...mapState("tokens", ["details"])
  },
  methods: {
    updateList() {
      this.viewList = this.list.map(i => {
        if (i.denom.match(/^coin.{10}$/)) {
          const detail = this.details[i.denom];
          if (!isEmpty(detail)) {
            i.denom = detail.symbol;
            i.amount = Big(i.amount).div(Math.pow(10, detail.decimals));
          }
        } else {
          i.denom = i.denom.toUpperCase();
        }
        return `${i.amount} ${i.denom}`;
      });
    }
  },
  watch: {
    list() {
      this.list.forEach(i => {
        if (i.denom.match(/^coin.{10}$/) && isEmpty(this.details[i.denom])) {
          this.$store.dispatch("tokens/fetchDetail", i.denom);
        }
      });
      this.updateList();
    },
    details() {
      if (isEmpty(this.list)) {
        return false;
      }
      this.updateList();
    }
  }
};
</script>