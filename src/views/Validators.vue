<template>
  <card
    title="validators"
    class="validator-list-container"
  >
    <validator-list :list='list' />
  </card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("validators", ["list"]),
    height: function() {
      return this.$route.params.height;
    },
    data: function() {
      const height = this.$route.params.height;
      // if (height) {
      //   return getValidator(height);
      // }
      return latest;
    }
  },
  mounted: function() {
    const { $store } = this;
    $store.dispatch("validators/fetchAll");
  }
};
</script>

<style lang="scss">
.validator-list-container {
  margin: $basic-margin;

  .content {
    padding: $basic-padding;
  }
}
</style>
