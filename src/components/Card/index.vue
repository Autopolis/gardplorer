<template>
 <div class="card-container">
   <div class="header">
     <p>{{ title.toUpperCase() }}</p>
     <RouterLink :to="link" class="link" v-if="link">VIEW ALL</RouterLink>
   </div>
   <div class="content">
      <slot />
   </div>
</div> 
</template>

<script>
export default {
  name: 'card',
  props: {
    title: String,
    link: String,
    data: Array
  }
}
</script>

<style lang="scss" scoped>

.card-container {
  position: relative;
  min-width: 684px;
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.65);
}

.card-container::before {
  @extend %shadow;
}

.header { 
  display: flex;
  box-sizing: border-box;
  padding: 0 32px;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px dashed #000;
  color: black;
  font-weight: bold;

  .link {
    text-decoration: none;
    color: $blue;
  }
}
.content {
  min-height: 50px;
}

</style>


