<template>
  <div>
    <sub-title
      title="PROPOSAL"
      :sub="id"
    />
    <div class="content">
      <card
        title="Proposal Details"
        v-if="detail"
      >
        <data-item label="Proposal ID">
          <span>{{ detail.proposal_id}}</span>
        </data-item>
        <data-item label="Type">
          <span>{{ detail.proposal_content.type }}</span>
        </data-item>
        <data-item label="Status">
          <span>{{ detail.proposal_status }}</span>
        </data-item>
        <data-item label="Submit Time">
          <span>{{ detail.submit_time | formatTime }}</span>
        </data-item>
        <data-item label="Deposit End Time">
          <span>{{ detail.deposit_end_time | formatTime }}</span>
        </data-item>
        <data-item label="Total Deposit">
          <data-amount :list="detail.total_deposit" />
        </data-item>
      </card>

      <card
        title="Proposal Content"
        v-if="detail"
      >
        <data-item label="Title">
          <span>{{ get(detail, 'proposal_content.value.TextProposal.title') }}</span>
        </data-item>
        <data-item label="Description">
          <span>{{ get(detail, 'proposal_content.value.TextProposal.description') }}</span>
        </data-item>
        <div v-if="!isEmpty(get(detail, 'proposal_content.value.proposal_params'))">
          <data-item
            v-for="para in get(detail, 'proposal_content.value.proposal_params')"
            :key="para.key"
            :label="para.key"
          >
            <span>{{ para.value }}</span>
          </data-item>
        </div>
      </card>

      <card
        title="Voting Status"
        v-if="detail && detail.proposal_status !== 'DepositPeriod'"
      >
        <data-item label="Voting Start Time">
          <span>{{ detail.voting_start_time | formatTime }}</span>
        </data-item>
        <data-item label="Voting End Time">
          <span>{{ detail.voting_end_time | formatTime }}</span>
        </data-item>
        <data-item label="Voting Result">
          <div class="voting-result">
            <div class="yes">
              <span>{{detail.final_tally_result.yes}}</span>
              <p>YES</p>
            </div>
            <div class="no">
              <span>{{detail.final_tally_result.no}}</span>
              <p>NO</p>
            </div>
            <div class="veto">
              <span>{{detail.final_tally_result.no_with_veto}}</span>
              <p>NO WITH VETO</p>
            </div>
            <div class="abstain">
              <span>{{detail.final_tally_result.abstain}}</span>
              <p>ABSTAIN</p>
            </div>
          </div>
        </data-item>
      </card>
    </div>
  </div>
</template>

<script>
import { get, isEmpty } from "lodash";
import { mapGetters, mapState } from "vuex";

export default {
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    get,
    isEmpty
  },
  computed: {
    ...mapState("proposals", ["details"]),
    detail: function() {
      return get(this.details, this.id);
    }
  },
  mounted: function() {
    this.$store.dispatch("proposals/fetchDetail", this.id);
  }
};
</script>

<style lang="scss">
.voting-result {
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    flex-basis: 120px;
    span {
      font-size: 24px;
    }
  }
  .yes {
    color: green;
  }
  .no {
    color: orange;
  }
  .veto {
    color: red;
  }
}
</style>