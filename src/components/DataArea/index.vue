<template>
  <div class="data-area">
    <div class="data-area-title">{{ title }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.data-area {
  padding: 0 $basic-padding;
  margin-top: 32px;
}

.data-area-title {
  margin-bottom: 8px;
  height: 65px;
  line-height: 65px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid rgba(0, 0, 0, 0.65);
}
</style>