<template>
  <el-table :data="list">
    <el-table-column label="ID">
      <template slot-scope="scope">
        <hg-link
          type="proposal"
          :content="get(scope.row, 'proposal_id')"
        />
      </template>
    </el-table-column>
    <el-table-column label="TITLE">
      <template slot-scope="scope">
        <hg-link
          type="proposal"
          :content="get(scope.row, 'proposal_content.value.TextProposal.title')"
          :link="get(scope.row, 'proposal_id')"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="TYPE"
      prop="proposal_content.type"
    >
    </el-table-column>
    <el-table-column
      label="STATUS"
      prop="proposal_status"
    >
    </el-table-column>
    <el-table-column label="SUBMIT TIME">
      <template slot-scope="scope">
        {{ scope.row.submit_time | formatTime }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { get } from "lodash";
export default {
  props: {
    list: {
      required: true,
      type: Array
    },
    type: {
      type: String,
      default: ""
    }
  },
  methods: {
    get
  }
};
</script>

<style lang="scss">
</style>


