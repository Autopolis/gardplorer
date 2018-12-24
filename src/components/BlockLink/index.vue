<template>
  <router-link :to="`/block/${content}`">{{ content }}</router-link>
</template>

<script>
export default {
  props: { content: String }
}
</script>
