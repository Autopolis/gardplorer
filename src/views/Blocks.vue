<template>
  <card
    title="blocks"
    class="blocks-card"
  >
    <div class="page">
      <p>TOTAL AMOUNT: {{ lastHeight }}</P>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="lastHeight"
        @prev-click="onPageChange"
        @next-click="onPageChange"
        @current-change="onPageChange"
      />
    </div>
    <el-table
      class="table"
      :data="list"
      style="width: 100%"
    >
      <el-table-column
        class="height"
        label="HEIGHT"
      >
        <template slot-scope="scope">
          <RouterLink
            :to="`/block/${scope.row.header.height}`"
            class="link"
          >{{ scope.row.header.height }}</RouterLink>
        </template>
      </el-table-column>
      <el-table-column
        prop="header.num_txs"
        label="TXN"
      >
      </el-table-column>
      <el-table-column label="VALIDATORS">
        <template slot-scope="scope">
          <span>{{ get(scope, 'row.validators.length') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        label="VOTING POWER"
      >
        <template slot-scope="scope">
          <span>{{ countVotingPower(scope.row.validators) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="header.time"
        label="TIMESTAMP"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.header.time | formatTime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </Card>
</template>

<script>
import { get } from 'lodash';
import Card from '@/components/Card';
import { mapGetters, mapState } from 'vuex';

export default {
  components: { Card },
  computed: {
    ...mapGetters('blocks', ['list']),
    ...mapState('blocks', ['lastHeight', 'currentPage', 'lastHeight', 'pageSize'])
  },
  methods: {
    get,
    countVotingPower: function (validators) {
      if (!validators) return '';
      return validators.reduce((prev, current) => prev + Number(current.voting_power), 0);
    },
    onPageChange: function (page) {
      const { pageSize, lastHeight } = this;
      const maxHeight = lastHeight - pageSize * (page - 1) + 1;
      const minHeight = Math.max(0, lastHeight - pageSize * page);
      this.$store.dispatch('blocks/fetchList', { page, maxHeight, minHeight });
    },
  },
  mounted: function () {
    this.$store.dispatch('blocks/fetchList');
  },
}
</script>

<style lang="scss">
.blocks-card {
  margin: $basic-margin;

  .height {
    color: $blue;
  }

  > .content {
    padding: 16px 32px;
  }

  .page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
}
</style>


