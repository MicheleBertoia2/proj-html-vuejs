
<script>
import functions from "../data/functions.js";
import {headerMenu} from "../data/db-menus.js";
import {store} from "../data/store";

export default {
  name: "Header",
  data(){
    return{
      functions,
      headerMenu,
      socialIcons: ["fa-twitter","fa-facebook-f","fa-instagram","fa-linkedin"],
      store
    }
  },
  methods:{
    
  }
}
</script>

<template>
  <header class="mb-header" :class="{scrolled : store.scrollPosition > 130, ready : store.scrollPosition > 50, back : store.scrollPosition < 50}">
    <div class="mb-container h-100">
      <nav class=" d-flex justify-content-between align-items-center h-100">

        <img :src="functions.getImage(`../assets/img/dark-logo.png`)" alt="logo">

        <ul class="mb-menu d-flex justify-content-between align-items-center mb-0">

          <li v-for="(link, index) in headerMenu" :key="index">
            <a :href="link.href" class="main-link" >{{ link.title }}
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div class="underline"></div>
            <div class="bigdrop mb-drop-down position-absolute d-flex" v-if="link.isBig">
                <ul class=" h-100 row d-flex flex-column mb-row">
                  <li v-for="(sublink, index) in link.sublinks" :key="index" class="col-6">
                    <a :href="sublink.href"> {{ sublink.title }} 
                        <span v-if="sublink.isHot" class="hot">HOT</span>
                        <span v-if="sublink.isNew" class="new">NEW</span>
                    </a>                    
                  </li>              
                </ul>
                <div class="image-box d-flex">
                    <img :src="functions.getImage(`../assets/img/homepages-mega-menu-image-alt.jpg`)" alt="megamenu">
                </div>
            </div>
            
            <ul class="mb-drop-down position-absolute" v-else>
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
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/vars" as *;
  .mb-header{   
    position: absolute;
      top: 0;
      left: 0; 
    background-color: lighten(#8c89a2,38%);
    background-image: url("../assets/img/background-pattern-wavify.png");
    height: 80px;
    width: 100%;
    transition: all 1s ease;
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
              top: 52px;
              opacity: 1;
              z-index: 1;
              visibility: visible;
            }
            .underline{
              width: 100%;
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
            top: 67px;
            left: 0;
            opacity: 0;
            z-index: -1;
            visibility: hidden;
            background-color: white;
            width: 250px;
            border-bottom: 5px solid $secondary-text-color;
            transition: all 0.5s ease;
            padding-bottom: 10px;
            li{
                padding: 5px;
                a{
                  color: $thertiary-text-color;
                  font-size: 14px;
                }
              }
            &.bigdrop{
              left: -270px;
              width: 1100px;
              height: 400px;
              li{
                width: 200px;
                margin-right: 50px;
                a{
                  span{
                    color: white;
                    padding: 3px 5px;
                    margin: 0 5px;
                    border-radius: 3px;
                    &.hot{
                      background-color: red;
                    }
                    &.new{
                      background-color: rgb(1, 109, 1);
                    }
                  }
                }
              }
              .image-box{
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                img{
                    width: 540px;
                    height: 230px;
                  }
              }
            }
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

    //adjustements
    .mb-row{
      width: 50%;
      
    }
 

    //transition
    .mb-header.ready{
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.1s ease;
      transform: translateY(-100%);
    }
    .mb-header.scrolled{
      transform: translateY(0);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      background-image: none;
      background-color: white;
      color: black;
      box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
      transition: all 1s ease;
    }

    .mb-header.back{
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.1s ease;
      transform: translateY(0);
    }

    .underline{
      width: 0;
      
      height: 1px;
      background-color: $secondary-text-color;
      transition: all 0.5s ease;
    }

    
   
</style>