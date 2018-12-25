<template>
  <router-link
    :to="`/tx/${content}`"
    :class="`${ellipsis ? 'ellipsis' : ''}`"
    v-if="type === 'tx'"
  >{{ content }}</router-link>
  <router-link
    :to="`/address/${content}`"
    :class="`${ellipsis ? 'ellipsis' : ''}`"
    v-else-if="type === 'address'"
  >{{ content }}</router-link>
  <router-link
    :to="`/block/${content}`"
    :class="`${ellipsis ? 'ellipsis' : ''}`"
    v-else-if="type === 'block'"
  >{{ content }}</router-link>
  <router-link
    :to="`/validator/${content}`"
    :class="`${ellipsis ? 'ellipsis' : ''}`"
    v-else-if="type === 'validator'"
  >{{ content }}</router-link>
</template>
<script>
export default {
  props: {
    type: String,
    content: String,
    ellipsis: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
.ellipsis {
  display: inline-block;
  max-width: 200px;
  vertical-align: top;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
