<template>
  <div class="header-container">
    <div class="header">
      <div class="logo">
        <a href="/">
          <img src="~@/assets/logo-white.png" />
        </a>
      </div>

      <Menu />

      <el-select
        v-if="!expandSearch"
        value="TESTNET"
        placeholder="请选择"
        size='small'
        class="select-net"
      >
        <el-option
          key="TESTNET"
          :label="netName"
          value="TESTNET"
        >
        </el-option>
      </el-select>

      <div
        v-if="!isMobile && $route.path !== '/home'"
        :class="`search ${expandSearch?'show':''}`"
      >
        <InputSearch
          mini
          :expand="expandSearch"
          @blur="onBlur"
          @focus="onFocus"
        />
      </div>
      <span
        class="menuBtn"
        v-html="menuIcon"
        @click="drawer = true"
      >
      </span>
      <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        custom-class="drawer"
      >
        <el-menu @select="handleSelect">
          <label
            v-for="(item,index) in menu"
            :key="index"
          >
            <el-submenu
              v-if="!isEmpty(item.children)"
              :index="item.name"
            >
              <template slot="title">{{item.name.toUpperCase()}}</template>
              <el-menu-item
                v-for="i in item.children"
                :key="i.link"
                :index="i.link"
              >{{i.name.toUpperCase()}}</el-menu-item>
            </el-submenu>
            <el-menu-item
              v-else
              :index="item.link"
            >{{item.name.toUpperCase()}}</el-menu-item>
          </label>
        </el-menu>
      </el-drawer>
    </div>
    <div
      v-if="$route.path === '/home'"
      class="header-title"
    >Blockchain Explorer</div>
    <InputSearch
      v-if="isMobile || $route.path === '/home'"
      class="title-search"
    />
  </div>
</template>

<script>
import { getMapper } from "vuex";
import { isEmpty } from "lodash";
import { menu } from "@/constants";
import Menu from "@/components/Menu";
import InputSearch from "@/components/InputSearch";

export default {
  components: { Menu, InputSearch },
  data() {
    return {
      expandSearch: false,
      isMobile: !!navigator.userAgent.match(/iPad|iPhone|Android/),
      menu,
      menuIcon: `<svg class="icon" fill="#fff" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1605"><path d="M981.333333 554.666667 42.666667 554.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667 0-23.466667 19.2-42.666667 42.666667-42.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667C1024 535.466667 1004.8 554.666667 981.333333 554.666667zM981.333333 213.333333 42.666667 213.333333c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667S1004.8 213.333333 981.333333 213.333333zM42.666667 810.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667 0 23.466667-19.2 42.666667-42.666667 42.666667L42.666667 896c-23.466667 0-42.666667-19.2-42.666667-42.666667C0 829.866667 19.2 810.666667 42.666667 810.666667z" p-id="1606"></path></svg>`,
      drawer: false,
      direction: "rtl"
    };
  },
  props: {
    netName: String
  },
  methods: {
    isEmpty,
    onBlur() {
      this.expandSearch = false;
    },
    onFocus() {
      this.expandSearch = true;
    },
    handleSelect(v) {
      this.$router.push(v);
      this.drawer = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  padding: 0px 40px;

  .header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      flex-basis: 140px;
      flex-grow: 1;
    }
    .select-net {
      flex-basis: 120px;
      margin-right: 16px;
    }
    .search {
      transition: width $trans;
      &.show {
        max-width: 400px;
        width: 50%;
      }
    }
  }

  .header-title {
    color: #00fffb;
    font-size: 28px;
    text-align: center;
    margin: 64px auto;
  }
  .title-search {
    max-width: 640px;
    margin: 64px auto 100px;
  }
}

.menuBtn {
  display: none;
  height: 0;
  width: 0;
}

@include responsive($sm) {
  .header-container {
    padding: 0px 24px;
    // border-bottom: 1px solid $grey;
    .header-title,
    .title-search {
      margin: 16px auto 32px;
    }
  }

  .menuBtn {
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 30px;
    padding: 4px;
    border-radius: 4px;
    text-align: center;
    overflow: hidden;
    svg {
      width: 20px;
      height: 20px;
      fill: $blue;
      vertical-align: top;
    }
  }
}
</style>
<style>
.drawer {
  width: auto !important;
}
</style>
