<template>
  <el-menu
    :default-active="$route.path"
    @select="handleSelect"
    class="menu-container"
    mode="horizontal"
    background-color="transparent"
    text-color="rgba(255,255,255,0.8)"
    active-text-color="#00fffb"
  >
    <el-menu-item
      v-for="item in menu"
      :key="item.link"
      :index="item.link"
      class="item"
    >
      {{item.name.toUpperCase()}}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { menu } from "@/constants";

export default {
  data() {
    return {
      menu
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  border-bottom: none;
  padding-right: 40px;

  .item {
    transition: $trans;
    &:hover {
      background-color: transparent !important;
      color: #00fffb !important;
    }
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
