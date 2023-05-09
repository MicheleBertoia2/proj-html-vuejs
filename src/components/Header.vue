
<script>
import functions from "../data/functions.js";
import {headerMenu} from "../data/db-menus.js"
export default {
  name: "Header",
  data(){
    return{
      functions,
      headerMenu,
      socialIcons: ["fa-twitter","fa-facebook-f","fa-instagram","fa-linkedin"],
    }
  }
}
</script>

<template>
  <div class="mb-header">
    <div class="mb-container">
      <nav class=" d-flex justify-content-between align-items-center py-3">

        <img :src="functions.getImage(`../assets/img/dark-logo.png`)" alt="logo">

        <ul class="mb-menu d-flex">
          <li v-for="(link, index) in headerMenu" :key="index">
            <a :href="link.href">{{ link.title }}</a>
          </li>
        </ul>

        <div class="socials">
          <a href="#" v-for="(n,index) in socialIcons" :key="index">
            <i class="fa-brands" :class="socialIcons[index]"></i>
          </a>
        </div>
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
      .mb-menu{
        width: 60%;
        position: relative;
      }
    }
  }
</style>