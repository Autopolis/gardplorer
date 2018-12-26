<template>
  <div class="validator-detail-container">
    <sub-title :title="`VALIDATOR ${address}`" />
    <div class="content">
      <data-area
        title="Validator Profile"
        v-if="detail"
      >
        <data-item label="Operator Address">
          <span>{{ detail.operator_address}}</span>
        </data-item>
        <data-item label="Name">
          <span>{{ detail.description.moniker }}</span>
        </data-item>

        <data-item label="Website">
          <span>{{ detail.description.website || '-' }}</span>
        </data-item>

        <data-item label="Details">
          <span>{{ detail.description.details || '-' }}</span>
        </data-item>

        <data-item label="Identity">
          <span>{{ detail.description.Identity || '-' }}</span>
        </data-item>
      </data-area>
      <data-area
        title="Current Status"
        v-if="detail"
      >
        <data-item label="Voting Power">
          <span>{{ detail.delegator_shares || '-' }}</span>
        </data-item>
        <data-item label="Jailed">
          <span>{{ detail.jailed ? 'True' : 'False' }}</span>
        </data-item>
        <!-- <data-item label="Bond Height">
          <hg-link type="block" :content="detail.bond_height"/>
        </data-item> -->
        <data-item label="Unbonding Height">
          <span>{{ detail.unbonding_height || '-' }}</span>
        </data-item>
        <data-item label="Unbonding Time">
          <span>{{ detail.unbonding_time | formatTime }}</span>
        </data-item>
      </data-area>
    </div>
  </div>
</template>

<script>
import { get } from "lodash";
import { mapGetters, mapState } from "vuex";

export default {
  data: function() {
    return {
      address: this.$route.params.address
    };
  },
  computed: {
    ...mapState("validators", ["details"]),
    detail: function() {
      console.log(this.details);
      return get(this.details, this.address);
    }
  },
  mounted: function() {
    this.$store.dispatch("validators/fetchDetail", this.address);
  }
};
</script>

<style lang="scss" scoped>
.validator-detail-container .content {
  padding: $basic-padding;
}
</style>


