<template>
  <card :title="category">
    <div class="card-header">
      <div class="select-action">
        <el-select
          v-if="Object.keys(actions).length > 1"
          :disabled="load"
          :value="selected_key"
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
      :list="txList"
      :fields="fields"
      :load="load"
    />
    <div class="card-footer">
      <el-pagination
        class="pagination"
        background
        :pager-count="5"
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="Number(totalCount)"
        @prev-click="onPageChange"
        @next-click="onPageChange"
        @current-change="onPageChange"
      />
    </div>
  </Card>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Card from "@/components/Card";
import TransactionList from "@/components/TransactionList";
import { txTypes, txListFieldsMap } from "@/constants";
import { get, find } from "lodash";

export default {
  data: function() {
    const { category } = this.$route.params;
    return {
      selected_key: Object.keys(txTypes[category])[0]
    };
  },
  components: { Card, "transaction-list": TransactionList },
  computed: {
    ...mapState("transactions", [
      "list",
      "totalCount",
      "currentPage",
      "pageSize",
      "load"
    ]),
    txList() {
      const result = this.list.filter(i => {
        return get(i, "logs.0.success") === true;
      });
      return result;
    },
    category: function() {
      return this.$route.params.category;
    },
    actions: function() {
      return txTypes[this.category];
    },
    fields: function() {
      return txListFieldsMap[this.selected_key];
    },
    selected: function() {
      return this.selected_key.match("-")
        ? this.selected_key.split("-")
        : [this.selected_key, ""];
    }
  },
  methods: {
    onPageChange: function(currentPage) {
      const { pageSize, totalCount } = this;
      const page = Math.ceil(totalCount / pageSize) - currentPage + 1;
      this.$store.dispatch("transactions/fetchList", {
        "message.action": this.selected[0],
        page
      });
    },
    onSelect: function(value) {
      this.selected_key = value;
      this.fetchData();
    },
    fetchData: async function() {
      const params = { "message.action": this.selected[0] };
      if (this.selected[1]) {
        params.category = this.selected[1];
      }
      await this.$store.dispatch("transactions/fetchTotalCount", params);
      const { pageSize, totalCount } = this;
      params.page = Math.ceil(totalCount / pageSize) || 1;
      this.$store.dispatch("transactions/fetchList", params);
    }
  },
  mounted: function() {
    this.fetchData();
  },
  watch: {
    category() {
      this.selected_key = Object.keys(txTypes[this.category])[0];
      this.fetchData();
    }
  }
};
</script>

<style lang="scss">
.height {
  color: $blue;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.select-action {
  font-size: 16px;
  margin-right: 16px;
}
</style>


