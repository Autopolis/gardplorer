<template>
  <el-table
    class="table"
    :data="formated || []"
    style="width: 100%"
  >
    <el-table-column label="TX HASH">
      <template slot-scope="scope">
        <hg-link
          type="tx"
          :content="scope.row.hash"
        />
      </template>
    </el-table-column>

    <el-table-column label="BLOCK">
      <template slot-scope="scope">
        <hg-link
          type="block"
          :content="scope.row.height"
        />
      </template>
    </el-table-column>

    <el-table-column label="FROM">
      <template slot-scope="scope">
        <hg-link
          type="address"
          :content="scope.row.input.address"
        />
      </template>
    </el-table-column>

    <el-table-column label="TO">
      <template slot-scope="scope">
        <hg-link
          type="address"
          :content="scope.row.output.address"
        />
      </template>
    </el-table-column>

    <el-table-column label="AMOUNT">
      <template slot-scope="scope">
        {{ scope.row.coin.amount }}
        {{ scope.row.coin.denom }}
      </template>
    </el-table-column>

    <el-table-column label="FEE">
      <template slot-scope="scope">
        {{ scope.row.fee.amount }}
      </template>
    </el-table-column>

    <el-table-column
      prop="header.num_txs"
      label="TIME"
    >
      <template slot-scope="scope">
        {{ get(details, [scope.row.height, 'block', 'header', 'time']) | formatTime }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { isEmpty, get } from "lodash";
import { mapGetters, mapState } from "vuex";
export default {
  props: {
    list: Array
  },
  methods: { get },

  computed: {
    ...mapState("blocks", ["details"]),
    ...mapGetters("transactions", ["formatList"]),

    formated: function() {
      if (isEmpty(this.list)) return false;
      return this.formatList(this.list);
    }
  },
  watch: {
    list: function() {
      if (!isEmpty(this.list)) {
        this.list.forEach(item => {
          this.$store.dispatch("blocks/fetchDetail", get(item, "height"));
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


