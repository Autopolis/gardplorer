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
            v-else-if="item.name === 'Rewards'"
            :list="rewardList(scope.row, item.field)"
          />
          <data-amount
            v-else-if="item.name === 'Amount'"
            :list="[{denom: get(scope.row, get(fields.find(f => f.linkType === 'token'), 'field')), amount: get(scope.row, item.field)}]"
          />
          <span v-else-if="item.name.match('Time')">
            {{ get(scope.row, item.field) | formatTime }}
          </span>
          <span v-else-if="item.name === 'Proposal Type'">
            {{ (get(scope.row, item.field) || "").slice(11, (get(scope.row, item.field) || "").length) }}
          </span>
          <span v-else-if="item.name === 'Contract Address'">
            {{ `${contractAddress(scope.row).slice(0, 20)}......` }}
          </span>
          <span v-else>
            <span v-if="item.name === 'Hash'">{{ (get(scope.row, item.field) || '-').slice(0, 18) + '...'}}</span>
            <span v-else>{{ get(scope.row, item.field) || '-'}}</span>
          </span>
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { isEmpty, get, find } from "lodash";
import { mapGetters, mapState } from "vuex";

export default {
  props: {
    list: Array,
    fields: Array,
    load: { type: Boolean, default: false }
  },
  computed: {
    contractAddress() {
      return function(row) {
        let result = [];
        get(row, "events", []).forEach(i => {
          i.attributes.forEach(k => {
            result.push(k);
          });
        });
        const address = find(result, i => {
          return i.key === "contract_address";
        });
        return address.value;
      };
    }
  },
  methods: {
    get,
    rewardList(row, key) {
      const val = get(row, key);
      return !isEmpty(val)
        ? [{ denom: "agard", amount: val.replace(/[^0-9]/gi, "") }]
        : [];
    }
  }
};
</script>

