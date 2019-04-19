<template>
  <el-table :data="list">
    <el-table-column
      label="ID"
      prop="value.proposal_id"
    >
    </el-table-column>
    <el-table-column
      label="TITLE"
      prop="value.title"
    >
    </el-table-column>
    <el-table-column label="TYPE">
      <template slot-scope="scope">
        {{ scope.row.type.split('/')[1] }}
      </template>
    </el-table-column>
    <el-table-column
      label="STATUS"
      prop="value.proposal_status"
    >
    </el-table-column>
    <el-table-column label="SUBMIT TIME">
      <template slot-scope="scope">
        {{ scope.row.value.submit_time | formatTime }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
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
  }
};
</script>

<style lang="scss">
</style>


