<template>
  <div class="validator-list-container">
    <sub-title :title="`VALIDATORS`" />
    <div class="content">
      <el-table :data="list" v-if="list">
        <el-table-column
          class="jailed-status"
          label="ACTIVE"
        >
          <template slot-scope="record">
            <span :class="record.row.jailed ? 'jailed' : 'active'">{{ record.row.jailed ? 'FALSE' : 'TRUE' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          class="operator-address"
          label="OPERATOR ADDRESS"
          prop="operator_address"
        >
          <template slot-scope="record">
            <hg-link
              type="validator"
              :content="record.row.operator_address"
            />
          </template>
        </el-table-column>
        <el-table-column
          class="name"
          label="NAME"
          prop="description.moniker"
        />
        <el-table-column
          class="voting-power"
          label="VOTING POWER"
          prop="delegator_shares"
        >
        <template slot-scope="record">
          {{ parseInt(record.row.delegator_shares) }}
        </template>
        </el-table-column>
        <el-table-column
          class="bond-height"
          label="BOND HEIGHT"
          prop="bond_height"
        />
      </el-table>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('validators', ['list']),
    height: function () {
      return this.$route.params.height;
    },
    data: function () {
      const height = this.$route.params.height;
      // if (height) {
      //   return getValidator(height);
      // }
      return latest;
    }
  },
  mounted: function () {
    const { $store } = this;
    $store.dispatch('validators/fetchAll');
  }
}
</script>

<style lang="scss" scoped>
.validator-list-container .content {
  margin: 32px 64px 64px;
}

.jailed {
  color: red;
}

.active {
  color: green;
}
</style>
