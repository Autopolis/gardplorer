<template>
  <div class="sub-title-container">
    <span>{{ title }}</span>
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
.sub-title-container {
  height: 64px;
  line-height: 64px;
  background: $grey;
  padding: 0 $basic-padding;
  font-weight: bold;
}
</style>


