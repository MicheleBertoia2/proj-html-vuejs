
<script>
import functions from '../../data/functions';
export default {
  name: "BlogCard",
  props:{
    blog: Object
  },
  data(){
    return{
      functions
    }
  }
}
</script>

<template>

<div class="col-3 mb-card text-start mb-3">
  <div class="img-box overflow-hidden">
    <img :src="functions.getImage(`.././assets/img/motivation-blog-${blog.img}-480x325.jpg`)" :alt="blog.img">
  </div>
<div class="text">
  <h6><i class="fa-regular fa-file-lines"></i> {{ blog.date }}</h6>
  <h3 class="fw-semibold fs-5 mb-5 text-capitalize">{{ blog.title }}</h3>
  <p>{{ blog.preview }}</p>

</div>

</div>

  
</template>

<style lang="scss" scoped>

@use "../../scss/vars" as *;
  .mb-card{
    border-radius: 10px ;
    overflow: hidden;
    &:hover{
      img{
        transform: scale(1.2);
        transition: transform 1s ease;
      }
    }
    .img-box{
      border-radius: 10px;
      width: 100%;
      height: 230px;
      img{
      width: 100%;
      height: 100%;
     }
    }
    .text{
      padding: 30px;
      h3{        
          color: $primary-text-color;
        }
        h6{
        color: $thertiary-text-color;
        margin: 0 25px 40px 0;
        font-size: .9rem;
        text-transform: capitalize;
        i{
          margin-right: 5px;
        }
       }
      }      
    }
  

</style>