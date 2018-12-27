<template>
  <header class="header-container">
    <a href="/">
      <img
        class="logo"
        src="~@/assets/logo.png"
      />
    </a>
    <div class="select-net">
      <el-select
        value="TESTNET"
        placeholder="请选择"
        size='small'
      >
        <el-option
          key="TESTNET"
          label="TESTNET"
          value="TESTNET"
        >
        </el-option>
      </el-select>
      <p class="version">{{ name }}</p>
    </div>

    <div class="search-container">
      <input
        class="search-inner"
        placeholder="Search by Address/Txhash/Block/"
        suffix-icon="el-icon-search"
        v-model.trim="value"
        @keyup.enter="onSearch"
      />
      <i class="el-icon-search search-icon"></i>
    </div>
  </header>
</template>

<script>
import { getMapper } from "vuex";

export default {
  data() {
    return {
      value: ""
    };
  },
  props: {
    name: String
  },
  methods: {
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $basic-padding;
  background: #fff;
}
.logo {
  flex-basis: 150px;
  flex-shrink: 0;
}
.select-net {
  flex: 1;
  align-items: center;
  text-align: right;
  .el-select {
    width: 150px;
    margin-right: 24px;
  }
  > p,
  > div {
    display: inline-block;
  }
}
.version {
  font-size: $normal-font-size;
  color: $blue;
  margin-right: $basic-margin;
  text-align: right;
}
.search-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 480px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  .search-inner {
    flex: 1 1 auto;
    height: 100%;
    padding: 0 36px 0 12px;
    border: 0;
    box-shadow: none;
    background: transparent;
  }

  .search-inner::focus {
    outline: none;
  }

  .search-inner::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  .search-icon {
    position: absolute;
    right: 12px;
    color: $blue;
  }
}
</style>
