<template>
  <card
    title="transactions"
    class="transactions-card"
  >
    <div class="page">
      <div class="select-action">
        <el-select
          :disabled="load"
          :value="selected"
          placeholder="Pls select action"
          size='small'
          @change="onSelect"
        >
          <el-option
            v-for="key in Object.keys(actions)"
            :key="key"
            :value="key"
            :label="actions[key]"
          />
        </el-select>
      </div>
      <p>TOTAL AMOUNT: {{ totalCount }}</P>
    </div>
    <transaction-list
      :list="lastList"
      :type="selected"
      :load="load"
    />
  </Card>
</template>

<script>
import { txTypes } from "@/constants";
import Card from "@/components/Card";
import TransactionList from "@/components/TransactionList";
import { mapGetters, mapState } from "vuex";

export default {
  data: function() {
    return {
      selected: "send",
      actions: txTypes
    };
  },
  components: { Card, "transaction-list": TransactionList },
  computed: {
    ...mapState("transactions", ["lastList", "totalCount", "load"])
  },
  methods: {
    onPageChange: function(page) {
      const { pageSize, totalCount } = this;
    },
    onSelect: function(value) {
      this.selected = value;
      this.fetchData();
    },
    fetchData: async function() {
      this.$store.dispatch("transactions/fetchLastList", {
        action: this.selected,
        targetNum: 100
      });
    }
  },
  mounted: function() {
    this.fetchData();
  }
};
</script>

<style lang="scss">
.transactions-card {
  margin: 32px;
  background: #fff;

  .height {
    color: $blue;
  }

  > .content {
    padding: 16px 32px;
  }

  .page {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;
  }

  .select-action {
    font-size: 16px;
    margin-right: 16px;
  }
}
</style>


