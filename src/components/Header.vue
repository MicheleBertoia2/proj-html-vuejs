
<script>
import functions from "../data/functions.js";
export default {
  name: "Header",
  data(){
    return{
      functions
    }
  }
}
</script>

<template>
  <div class="mb-header">
    <div class="mb-container">
      <nav class=" d-flex justify-content-between align-items-center py-3">
        <img :src="functions.getImage(`../assets/img/dark-logo.png`)" alt="logo">
        <ul class="mb-menu ">

        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .mb-header{
    background-color: lighten(#8c89a2,32%);
    background-image: url("../assets/img/background-pattern-wavify.png");
    height: 80px;
    nav{
      img{
        height: 30px;
      }
      i{
        font-size: 50px;
      }
    }
  }
</style>