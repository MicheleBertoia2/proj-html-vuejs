
<script>
import {footerMenu} from "../data/db-menus.js"
export default {
  name: "Footer",
  data(){
    return{
      socialIcons: ["fa-square-facebook","fa-twitter","fa-instagram","fa-linkedin"],
      footerMenu,
    }
  }
}
</script>

<template>

  <section id="footer">
    <div class="mb-container fw-semibold">
      
      <div class="row mb-3">

        <div class="col-6">
          <div class="text mb-4">
            <h6 class="mb-3">Address</h6>
            <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
            <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
            <a href="#">support@maxcoach.com</a>
          </div>

          <div class="social">
            <a         
            href="#"
            v-for="(n,index) in socialIcons"
            :key="index">
            <i class="fa-brands" :class="socialIcons[index]"></i>
           </a>
          </div>
        </div>
        
        <nav class="col-6 d-flex">

          <ul v-for="(menu,index) in footerMenu" :key="index" class="me-5">
            <h6 v-if="menu.title">{{ menu.title }}</h6>
            <h6 class="mb-placeholder" v-else>placeholder</h6>
            <li v-for="(sublink, index) in menu.sublinks" :key="index" class="my-3">
              <a :href="sublink.href">{{ sublink.title }}</a>
            </li>
          </ul>
          
        </nav>

      </div>

      <div class="row py-4">
        <div class="col text-center">
          © 2020 Maxcoach. All Rights Reserved 
        </div>
      </div>

    </div>
  </section>

</template>

<style lang="scss" scoped>
@use ".././scss/vars" as *;
  h6{
    color: white;
    font-weight: bold;
  }
  #footer{
    height: 400px;
    font-size: .9rem;
    color: #8b8b90;
    background-color: darken($primary-text-color,22%);
    .row{
      padding-top: 70px;
      .text,
      nav{
          a{
            color: #8b8b90;
            transition: color .3s;
            cursor: pointer;
            &:hover{
              color: $secondary-text-color;
            }
          }
        }
    .social{
        a{
          color: #8b8b90;
          transition: color .3s;
          font-size: 1.5rem;
          margin-right: 30px;
          cursor: pointer;
          &:hover{
            color: white;
          }
        }
     }
    }

    nav{


      .mb-placeholder{
        color: darken($primary-text-color,22%) ;
      }
    }    
  }
</style>