
<script>
import functions from '../../data/functions';
import stories from "../../data/db-stories";
export default {
  name: "Stories",
  data(){
    return{
      functions,
      stories,
      activeComment: 0
    }
  },
  methods:{
    nextPrev(value){
      if(value==="next"){
        this.activeComment++
        if(this.activeComment > this.stories.length -1){
          this.activeComment = 0
        }
      }else if(value==="prev"){
        this.activeComment--
        if(this.activeComment < 0){
          this.activeComment = this.stories.length -1
        }
      }
    }
  }
}
</script>

<template>

  <section id="stories">
    <div class="stories-container">

      <div class="row position-relative">

        <div class="col-6 text-center">
          <h4 class="text-uppercase section-title greenify">real stories</h4>

          <div class="comment position-absolute" :class="{active : activeComment === index}" v-for="(story, index) in stories" :key="index">

            <div class="text-container mx-auto d-flex justify-content-center align-items-center">
              <h2 class="fs-4">{{ story.comment }}</h2>
            </div>

            <div class="user text-center mx-auto">
              <img :src="functions.getImage(`.././assets/img/testimonial-avata-${story.image}.jpg`)" alt="nome">
              <h3 class="text-capitalize mb-2 fs-4">{{story.name}}</h3>
              <span class="grayfy">/{{story.profession}}</span>
            </div>  

          </div>

          <div class="controls position-absolute d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-sort-up prev" @click="nextPrev('prev')"></i>
            <span class="fs-4">{{activeComment +1}}/4</span>
            <i class="fa-solid fa-sort-down next"  @click="nextPrev('next')"></i>
          </div>
          
        </div>
        <div class="col-6 testimonial">
          <img src="../../assets/img/home-movation-testimonial-image-600x439.jpg" alt="hero">
        </div>

      </div>

    </div>
  </section>

</template>

<style lang="scss" scoped>
@use "../../scss/vars" as *;
  .stories-container{
    height: 700px;
    width: 100%;
    overflow: hidden;
    background-color: lighten(#8c89a2,32%);
    background-image: url("../../assets/img/background-pattern-wavify.png");
    .row{
      padding: 100px 0;
      h5{
      color: $secondary-text-color;
      }
      .comment{
        opacity: 0;
        top: 110px;
        left: 65px;
        width: 40%;
        transition: opacity 1s ease;
      .text-container{
        margin: 50px 0 ;
        h2{
          font-size: 22px;
          line-height: 2.2rem;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
      }
      .user{
        img{
          border-radius: 50%;
          height:90px;
          margin-bottom: 20px;
        }
      }
      }

      .comment.active{
        opacity: 1;
      }
    
      .testimonial{
        img{
          width: 100%;
        }
      }

      .controls{
        top: 50%;
        left: 51%;
        transform: translate(-50%,-50%);
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 50%;
        .next,
        .prev{
          position: absolute;
          color: lighten($thertiary-text-color,45%);
          cursor: pointer;
        }
        .next{
          bottom: 13px;
          left: 50%;
          transform: translate(-50%,-50%);
        }
        .prev{
          top: 30px;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
    }
    
  }
</style>