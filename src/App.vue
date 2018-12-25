<template>
  <div id="app">
    <Header :name="name"/>
    <Menu/>
    <div class="main">
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import Menu from '@/components/Menu/index.vue';
import Footer from '@/components/Footer/index.vue';

import { mapState } from 'vuex';

export default {
  components: { Header, Menu, Footer },
  computed: {
    ...mapState({
      name: store => store.basic.name
    })
  }
};
</script>

<style lang="scss">
@import "~@/styles/_reset.scss";
@import "~@/styles/_common.scss";

html, body {
  font-size: 14px;
  line-height: 1.571428;
  font-family: "PingFangSC", Microsoft YaHei, "Helvetica Neue", Helvetica, Arial, STHeiTi, sans-serif;
  color: black(0.85);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
  }
}

</style>
