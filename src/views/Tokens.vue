<template>
  <card title="tokens">
    <TokenList :list='list' />
    <div class="card-footer">
      <el-pagination
        class="pagination"
        background
        :pager-count="3"
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="Number(totalCount)"
        @prev-click="onPageChange"
        @next-click="onPageChange"
        @current-change="onPageChange"
      />
    </div>
  </card>
</template>

<script>
import { mapState } from "vuex";
import TokenList from "@/components/Tokens/List.vue";

export default {
  components: { TokenList },
  computed: {
    ...mapState("tokens", ["list", "totalCount", "pageSize", "currentPage"])
  },
  methods: {
    onPageChange: function(currentPage) {
      const { pageSize, totalCount } = this;
      const page = Math.ceil(totalCount / pageSize) - currentPage + 1;
      this.$store.dispatch("tokens/fetchList", {
        page
      });
    }
  },
  mounted: function() {
    this.$store.dispatch("tokens/fetchList");
  }
};
</script>
