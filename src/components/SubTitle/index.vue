<template>
  <div class="sub-title-container">
    <span>{{ title }}</span>
    <span class="sub-title">{{ sub }}</span>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    sub: String
  }
};
</script>

<style lang="scss" scoped>
.sub-title-container {
  height: 64px;
  line-height: 64px;
  background: white;
  padding: 0 $basic-padding;
  font-weight: bold;
  box-shadow: $shadow;
  width: 100%;
  overflow: hidden;
}
.sub-title {
  margin-left: 16px;
  color: #606266;
  font-weight: normal;
}
</style>


