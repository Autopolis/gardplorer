<template>
  <div class="data-item">
    <p class="label">{{ label }}</p>
    <p class="content"><slot/></p>
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
  display: flex;
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