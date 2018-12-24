<template>
    <div class="footer-container">
      <img class="logo" src="~@/assets/logo.png"/>
      <p>Powered by Hashgard</p>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  bottom: 0;
  height: 68px;
  background: $deepBlue;

   > img {
     margin-right: $basic-margin;
   }
}
</style>

