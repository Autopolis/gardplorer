<template>
  <div :class="`search-container ${mini && !expand?'mini':''}`">
    <input
      ref="input"
      class="search-inner"
      placeholder="Search by Address/Txhash/Block"
      suffix-icon="el-icon-search"
      v-model.trim="value"
      @keyup.enter="onSearch"
      @blur="onBlur"
      autofocus
    />
    <i
      class="el-icon-search search-icon"
      @click="expandSearch"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    mini: Boolean,
    expand: Boolean
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    expandSearch() {
      if (this.mini && !this.expand) {
        this.$emit("focus");
        this.$refs.input.focus();
      }
    },
    onBlur() {
      if (this.mini && this.expand) {
        this.$emit("blur");
      }
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
.search-container {
  width: 100%;
  //   margin: 64px auto 120px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 48px;
  border: 1px solid white;
  border-radius: 4px;
  transition: all $trans;

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

  .search-inner {
    color: white;
  }
  .search-inner::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }

  .search-icon {
    margin-right: 24px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
  }

  &.mini {
    width: 40px;
    border: none;
    .search-inner {
      width: 8px;
      padding: 0 12px;
    }

    .search-icon {
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
}

@include responsive($sm) {
  .search-container {
    margin-top: $basic-padding;
  }
}
</style>
