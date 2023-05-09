
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
    <div class="mb-container h-100">
      <nav class=" d-flex justify-content-between align-items-center h-100">

        <img :src="functions.getImage(`../assets/img/dark-logo.png`)" alt="logo">

        <ul class="mb-menu d-flex justify-content-between align-items-center mb-0">

          <li v-for="(link, index) in headerMenu" :key="index">
            <a :href="link.href" class="main-link" >{{ link.title }}
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <ul class="mb-drop-down position-absolute" >
              <li v-for="(sublink, index) in link.sublinks" :key="index" >
                <a :href="sublink.href"> {{ sublink.title }} </a>
              </li>              
            </ul>
          </li>

        </ul>

        <div class="socials text-end mt-2">
          <a
            class="ms-4"
            href="#"
            v-for="(n,index) in socialIcons"
            :key="index">
            <i class="fa-brands" :class="socialIcons[index]"></i>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/vars" as *;
  .mb-header{
    background-color: lighten(#8c89a2,38%);
    background-image: url("../assets/img/background-pattern-wavify.png");
    height: 80px;
    nav{
      img{
        height: 26px;
      }
      .mb-menu{
        width: 50%;
        li{
          position: relative;
          &:hover{
            .mb-drop-down{
              display: block;
            }
          }
          .main-link{
          i{
            font-size: 10px;
          }
          &:hover{
            color: $secondary-text-color!important;
            
          }          
         }
          .mb-drop-down{
            top: 15px;
            left: 0;
            display: none;
          }
        }
        
      }
      .socials{
        i{
          font-size: 20px;
          color: #333333;
        }
      }
    }
  }
 

    //transition
   
</style>