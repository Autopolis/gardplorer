<template>
  <card title="validators">
    <validator-list :list='list' />
  </card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("validators", ["list"])
  },
  mounted: function() {
    this.$store.dispatch("validators/fetchAll");
  }
};
</script>
