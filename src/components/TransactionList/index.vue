<template>
  <send-list
    :list="list"
    :load="load"
    v-if="type==='send'"
  />
</template>

<script>
import { isEmpty, get } from "lodash";
import send from "./send.vue";

export default {
  components: { "send-list": send },
  props: {
    list: Array,
    type: { type: String, default: "send" },
    load: { type: Boolean, default: true }
  }
};
</script>

