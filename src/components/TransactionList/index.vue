<template>
    <el-table
      class="table"
      v-if="formated"
      :data="formated"
      style="width: 100%">
      <el-table-column
        label="TX HASH">
        <template slot-scope="scope">
          <transaction-link :content="scope.row.hash"/>
        </template>
      </el-table-column>

      <el-table-column label="BLOCK">
        <template slot-scope="scope">
          <block-link :content="scope.row.height"/>
        </template>
      </el-table-column>

      <el-table-column label="FROM">
        <template slot-scope="scope">
          <address-link :content="scope.row.input.address" />
        </template>
      </el-table-column>

      <el-table-column label="TO">
        <template slot-scope="scope">
          <address-link :content="scope.row.output.address" />
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
          {{ scope.row.coin.denom }}
        </template>
      </el-table-column>

      <el-table-column
        prop="header.num_txs"
        label="TIME">
      </el-table-column>
    </el-table>
</template>

<script>
import { isEmpty } from 'lodash';
import { mapGetters, mapState } from 'vuex';
export default {
  props: {
    list: Array
  },
  computed: {
    ...mapState('blocks', ['details']),
    ...mapGetters('transactions', ['formatList']),
    ...mapGetters('blocks', ['getDetail']),
    formated: function () {
      if (isEmpty(this.list)) return false;
      return this.formatList(this.list);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


