<template>
  <send-list
    :list="list"
    :load="load"
    v-if="type==='send'"
  />
  <delegate-list
    :list="list"
    :load="load"
    v-else-if="type==='delegate'"
  />
  <create-validator-list
    :list="list"
    :load="load"
    v-else-if="type==='create_validator'"
  />
  <withdraw-delegation-reward-list
    :list="list"
    :load="load"
    v-else-if="type==='withdraw_delegation_reward'"
  />
  <begin-unbonding-list
    :list="list"
    :load="load"
    v-else-if="type==='begin_unbonding'"
  />
  <unjail-list
    :list="list"
    :load="load"
    v-else-if="type==='unjail'"
  />
  <submit-proposal-list
    :list="list"
    :load="load"
    v-else-if="type==='submit_proposal'"
  />
  <deposit-list
    :list="list"
    :load="load"
    v-else-if="type==='deposit'"
  />
  <vote-list
    :list="list"
    :load="load"
    v-else-if="type==='vote'"
  />
</template>

<script>
import { isEmpty, get } from "lodash";
import send from "./send.vue";
import delegate from "./delegate.vue";
import createValidator from "./createValidator.vue";
import withdrawDelegationReward from "./withdrawDelegationReward.vue";
import unjail from "./unjail.vue";
import vote from "./vote.vue";
import submitProposal from "./submitProposal.vue";
import deposit from "./deposit.vue";
import beginUnbonding from "./beginUnbonding.vue";

export default {
  components: {
    "send-list": send,
    "delegate-list": delegate,
    "create-validator-list": createValidator,
    "withdraw-delegation-reward-list": withdrawDelegationReward,
    "unjail-list": unjail,
    "vote-list": vote,
    "submit-proposal-list": submitProposal,
    "deposit-list": deposit,
    "begin-unbonding-list": beginUnbonding
  },
  props: {
    list: Array,
    type: { type: String, default: "send" },
    load: { type: Boolean, default: false }
  }
};
</script>

