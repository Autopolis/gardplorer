<template>
  <div class="data-item">
    <span class="label">{{ label }}</span>
    <span class="content"><slot/></span>
  </div> 
</template>

<script>
export default {
  props: {
    label: String
  } 
}
</script>

<style lang="scss" scoped>
$height: 36px;

.data-item {
  height: $height;
  line-height: $height;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  > .label {
    display: inline-block;
    width: 200px;
    font-weight: bold;
  }

  > .content {
    color: rgba(0, 0, 0, 0.65);
  }
}

.data-item:last-child {
  border-bottom: none;
}
</style>