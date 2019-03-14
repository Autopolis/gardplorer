<template>
  <div class="card-container">
    <div class="header">
      <p>{{ title.toUpperCase() }}</p>
      <RouterLink
        :to="link"
        class="link"
        v-if="link"
      >VIEW ALL</RouterLink>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    link: String,
    data: Array
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  padding: 0;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.65);
  box-shadow: $shadow;
  border: 1px solid rgba(0, 0, 0, 0.03);
  background: white;
}

.header {
  display: flex;
  box-sizing: border-box;
  padding: 0 32px;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: black;
  font-weight: bold;

  .link {
    text-decoration: none;
    color: $blue;
  }
}
.content {
  min-height: 50px;
  padding: $basic-padding;
}
</style>


