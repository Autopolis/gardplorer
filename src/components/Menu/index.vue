<template>
  <el-menu :default-active="activeIndex" class="menu-container" mode="horizontal" >
    <el-menu-item index="1" class="item">
      <RouterLink to="/" class="link">HOME</RouterLink>
    </el-menu-item>
    <el-menu-item index="2" class="item">
      <RouterLink to="/blocks" class="link">BLOCKS</RouterLink>
    </el-menu-item>
    <el-menu-item index="3" class="item">
        <RouterLink to="/transactions" class="link">TRANSACTIONS</RouterLink>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '0'
    };
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  width: 100%;
  height: 64px;
  background: $blue;
  border-bottom: none;
  box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.35);

  > .item {
    height: 100%;
    padding: 0;
    border-bottom: none;
    font-size :16px;
    color: rgba(255, 255, 255, 0.4);
  }

  > .item .link {
    display: block;
    height: 100%;
    padding: 0 28px;
  }

  > .item .link:hover,
  > .item .router-link-exact-active {
    background: $deepBlue;
    color: #fff;
    border-right: none;
    box-shadow:2px 0px 6px 0px rgba(0,21,41,0.35);
  }

  a {
    text-decoration: none;
  }
}
</style>
