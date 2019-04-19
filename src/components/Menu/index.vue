<template>
  <el-menu
    :default-active="activeIndex"
    class="menu-container"
    mode="horizontal"
  >
    <el-menu-item
      v-for="(item, i) in menu"
      :key="item.name"
      :index="`${i}`"
      class="item"
    >
      <RouterLink
        :to="item.link"
        class="link"
      >{{item.name.toUpperCase()}}</RouterLink>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { menu } from "@/constants";

export default {
  data() {
    return {
      activeIndex: "0",
      menu
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  width: 100%;
  height: 64px;
  background: $blue;
  border-bottom: none;

  > .item {
    height: 100%;
    padding: 0;
    border-bottom: none;
    font-size: 16px;
  }

  > .item .link {
    display: block;
    height: 100%;
    padding: 0 28px;
    background: $blue;
    color: rgba(255, 255, 255, 0.8);
    transition: all 350ms ease-in-out;
  }

  > .item .link:hover,
  > .item .router-link-active {
    color: #fff;
    background: $deepBlue;
    border-right: none;
  }

  a {
    text-decoration: none;
  }
}

@include responsive($sm) {
  .menu-container {
    display: none;
  }
}
</style>
