<template>

  <el-table
    class="table"
    :data="list"
    v-loading="load"
    style="width: 100%"
  >
    <el-table-column
      v-for="item in fields"
      :key="item.name"
      :label="item.name"
    >
      <template slot-scope="scope">
        <hg-link
          v-if="item.linkType"
          :type="item.linkType"
          :content="get(scope.row, item.field)"
        />
        <span v-if="!item.linkType">
          <data-amount
            v-if="(get(scope.row, item.field) instanceof Array)"
            :list="get(scope.row, item.field)"
          />
          <data-amount
            v-else-if="(get(scope.row, item.field) instanceof Object)"
            :list="[get(scope.row, item.field)]"
          />
          <data-amount
            v-else-if="item.name === 'Amount'"
            :list="[{denom: get(scope.row, fields.find(f => f.linkType === 'token').field), amount: get(scope.row, item.field)}]"
          />
          <span v-else>
            {{ get(scope.row, item.field) || '-'}}
          </span>
        </span>
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
    list: Array,
    fields: Array,
    load: { type: Boolean, default: false }
  },
  methods: {
    get,
    fetchBlockDetails() {
      if (isEmpty(this.list)) {
        return false;
      }
      this.list.forEach(item => {
        this.$store.dispatch("blocks/fetchDetail", get(item, "height"));
      });
    }
  },
  computed: {
    ...mapState("blocks", ["details"])
  },
  mounted() {
    this.fetchBlockDetails();
  },
  watch: {
    list: function() {
      this.fetchBlockDetails();
    }
  }
};
</script>

