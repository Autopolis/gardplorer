<template>
  <el-menu
    :default-active="activeIndex"
    class="menu-container"
    mode="horizontal"
  >
    <el-menu-item
      index="1"
      class="item"
    >
      <RouterLink
        to="/home"
        class="link"
      >HOME</RouterLink>
    </el-menu-item>
    <el-menu-item
      index="2"
      class="item"
    >
      <RouterLink
        to="/block"
        class="link"
      >BLOCKS</RouterLink>
    </el-menu-item>
    <el-menu-item
      index="3"
      class="item"
    >
      <RouterLink
        to="/tx"
        class="link"
      >TRANSACTIONS</RouterLink>
    </el-menu-item>
    <el-menu-item
      index="4"
      class="item"
    >
      <RouterLink
        to="/validator"
        class="link"
      >VALIDATORS</RouterLink>
    </el-menu-item>
    <el-menu-item
      index="5"
      class="item"
    >
      <a
        href="https://www.hashgard.pro"
        target="_blank"
        class="link"
      >FAUCET</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0"
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
  // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
  //   0 3px 1px -2px rgba(0, 0, 0, 0.2);

  // &::after {
  //   @extend %shadow;
  // }

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
</style>
