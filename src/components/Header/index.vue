<template>
  <div class="header-container">
    <el-row :gutter="16">
      <el-col
        :xs="10"
        :sm="8"
        :md="12"
      >
        <a href="/">
          <img
            class="logo"
            src="~@/assets/logo.png"
          />
        </a>
      </el-col>

      <el-col
        :xs="14"
        :sm="8"
        :md="6"
        class="select-net-container"
      >
        <el-select
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

        <el-dropdown
          class="dropdown-menu"
          trigger="click"
          @command="handleCommand"
        >
          <span
            class="menuBtn"
            v-html="menuIcon"
          >
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item,index) in menu"
              :key="index"
              :command="item.link"
            >
              {{item.name}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col
        :xs="24"
        :sm="8"
        :md="6"
        class="search-container"
      >
        <input
          class="search-inner"
          placeholder="Search by Address/Txhash/Block"
          suffix-icon="el-icon-search"
          v-model.trim="value"
          @keyup.enter="onSearch"
        />
        <i class="el-icon-search search-icon"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMapper } from "vuex";
import { menu } from "@/constants";

export default {
  data() {
    return {
      value: "",
      menu,
      menuIcon: `<svg class="icon" fill="#2d71b8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1605"><path d="M981.333333 554.666667 42.666667 554.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667 0-23.466667 19.2-42.666667 42.666667-42.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667C1024 535.466667 1004.8 554.666667 981.333333 554.666667zM981.333333 213.333333 42.666667 213.333333c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667S1004.8 213.333333 981.333333 213.333333zM42.666667 810.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667 0 23.466667-19.2 42.666667-42.666667 42.666667L42.666667 896c-23.466667 0-42.666667-19.2-42.666667-42.666667C0 829.866667 19.2 810.666667 42.666667 810.666667z" p-id="1606"></path></svg>`
    };
  },
  props: {
    netName: String
  },
  methods: {
    handleCommand(v) {
      this.$router.push(v);
    },
    onSearch() {
      let { value } = this;
      value = value.replace(/ /g, "");
      // jump to block detail page;
      const numberPattern = /^\d+$/g;
      if (numberPattern.test(value)) {
        this.$router.push({ path: "/block/" + value });
        return false;
      }

      // jump to address detail page;
      const addressPattern = /^gard.+$/g;
      if (addressPattern.test(value)) {
        this.$router.push({ path: "/address/" + value });
        return false;
      }

      this.$router.push({ path: "/tx/" + value });
    }
  }
};
</script>

<style lang="scss" scoped>
svg {
  fill: red;
}
.header-container {
  padding: $basic-padding 40px;
  background: #fff;
}
.logo {
  flex-basis: 150px;
  flex-shrink: 0;
}
.select-net-container {
  text-align: right;
}
.select-net {
  text-align: right;
  max-width: 100px;
}

.search-container {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  .search-inner {
    flex: 1 1 auto;
    height: 100%;
    padding: 0 36px 0 12px;
    border: 0;
    background: transparent;
  }

  .search-inner:focus {
    outline: none;
  }

  .search-inner::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  .search-icon {
    position: absolute;
    right: 16px;
    color: $blue;
  }
}
.dropdown-menu {
  position: relative;
  left: 8px;
  margin-left: 8px;
}
.menuBtn {
  display: none;
  height: 0;
  width: 0;
}

@include responsive($sm) {
  .header-container {
    border-bottom: 1px solid $grey;
  }

  .search-container {
    margin-top: $basic-padding;
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
