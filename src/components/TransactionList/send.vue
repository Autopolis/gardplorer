<template>
  <el-table
    class="table"
    :data="formated"
    v-loading="load"
    style="width: 100%"
  >
    <el-table-column label="ACTION">
      <template slot-scope="scope">
        {{ scope.row.tags.find(i => i.key === 'action').value }}
      </template>
    </el-table-column>

    <el-table-column label="TX HASH">
      <template slot-scope="scope">
        <hg-link
          type="tx"
          :content="scope.row.txhash"
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
          :content="scope.row.from_addr"
        />
      </template>
    </el-table-column>

    <el-table-column label="TO">
      <template slot-scope="scope">
        <hg-link
          type="address"
          :content="scope.row.to_addr"
        />
      </template>
    </el-table-column>

    <el-table-column label="AMOUNT">
      <template slot-scope="scope">
        {{ scope.row.coin.amount }}
        {{ scope.row.coin.denom }}
      </template>
    </el-table-column>

    <el-table-column label="GAS">
      <template slot-scope="scope">
        {{ scope.row.fee.gas }}
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
import { get, isEmpty } from "lodash";
import { mapGetters, mapState } from "vuex";

export default {
  props: {
    list: Array,
    load: { type: Boolean, default: true }
  },
  methods: { get },
  computed: {
    ...mapState("blocks", ["details"]),
    ...mapGetters("transactions", ["format"]),

    formated: function() {
      const { list } = this;
      if (isEmpty(list)) {
        return [];
      }
      return list.map(item => this.format(item));
    }
  },
  watch: {
    list: function() {
      if (isEmpty(this.list)) {
        return false;
      }
      this.list.forEach(item => {
        this.$store.dispatch("blocks/fetchDetail", get(item, "height"));
      });
    }
  }
};
</script>

