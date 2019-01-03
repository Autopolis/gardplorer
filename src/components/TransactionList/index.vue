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
  <unjail-list
    :list="list"
    :load="load"
    v-else-if="type==='unjail'"
  />
  <vote-list
    :list="list"
    :load="load"
    v-else-if="type==='vote'"
  />
  <submit-proposal-list
    :list="list"
    :load="load"
    v-else-if="type==='submit_proposal'"
  />
  <begin-unbonding-list
    :list="list"
    :load="load"
    v-else-if="type==='begin_unbonding'"
  />
</template>

<script>
import { isEmpty, get } from "lodash";
import send from "./send.vue";
import delegate from "./delegate.vue";
import unjail from "./unjail.vue";
import vote from "./vote.vue";
import submitProposal from "./submitProposal.vue";
import beginUnbonding from "./beginUnbonding.vue";

export default {
  components: {
    "send-list": send,
    "delegate-list": delegate,
    "unjail-list": unjail,
    "vote-list": vote,
    "submit-proposal-list": submitProposal,
    "begin-unbonding-list": beginUnbonding
  },
  props: {
    list: Array,
    type: { type: String, default: "send" },
    load: { type: Boolean, default: false }
  }
};
</script>

