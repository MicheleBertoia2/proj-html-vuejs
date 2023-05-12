
<script>
import functions from "../data/functions.js";

export default {
  name: "Jumbo",
  data(){
    return{
      functions,
    }
  },
  methods:{
    moveFace(e){
      

      console.log("mi muovo",e);

    }
  }
}
</script>

<template>

  <div class="mb-jumbo pt-5">
    <div class="mb-container">
      <div class="row">
        
        <div class="col-6 mt-5">
          <div class="jumbo-text">
            <h4 class="section-title">I'M WINGMAN</h4>
            <h1>Peace on earth a wonderful wish but no way</h1>
            <p class="grayfy fs-6 mb-5">Success isn't overnight. It's when everyday you get a little better than the day before. It all addss up.</p>
              <a href="#" class="mb-button">Get Started For Free
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
          </div>
        </div>

        <div class="col-6 position-relative">
          <img :src="functions.getImage(`../assets/img/home-movation-hero-image.png`)" alt="testimonial" class="position-absolute">
          <img :src="functions.getImage(`../assets/img/home-movation-shape-face-600x534.png`)" alt="testimonial" class="position-absolute face" @mousemove="moveFace">
        </div>

      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "../scss/vars" as *;

  .mb-jumbo{
    margin-top: 80px;
    min-height: 700px; 
    letter-spacing: 1px;
    word-spacing: 5px;
    background-color: lighten($jumbo-color,38%);
    background-image: url("../assets/img/background-pattern-wavify.png");
    overflow-y: hidden;
    .jumbo-text{
      width: 85%;
      padding-right: 25px;
      h1{
        margin: 20px 0;
        word-spacing: 10px;
        font-size: 3.5rem;
        line-height: 4.5rem;
        text-transform: capitalize;
        font-family: "Roboto", serif;
        font-weight: 400;
      }
    }
    img{
      bottom: -210px;
      right: 0;
      height: 650px;
      width: 535px;
      &:first-child{
        z-index: 4;
      }
      &:last-child{
        z-index: 3;
        bottom: -255px;
        right: -80px;
        height: 560px;
        width: 590px;
      }
    }
  }
</style>