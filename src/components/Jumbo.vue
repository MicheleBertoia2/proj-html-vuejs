
<script>
import functions from "../data/functions.js";

export default {
  name: "Jumbo",
  data(){
    return{
      functions,
    }
  }
}
</script>

<template>

  <div class="mb-jumbo pt-5">
    <div class="mb-container">
      <div class="row">
        
        <div class="col-6">
          <h3>I'M WINGMAN</h3>
          <h1>Peace on earth a wonderful wish but no way</h1>
          <p>Success isn't overnight. It's when everyday you get a little better than the day before. It all addss up.</p>
            <a href="#" class="mb-button">Get Started For Free</a>
        </div>

        <div class="col-6">
          <img :src="functions.getImage(`../assets/img/home-movation-hero-image.png`)" alt="testimonial">
        </div>

      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "../scss/vars" as *;

  .mb-jumbo{
    min-height: 500px; //debug
    background-color: lighten($jumbo-color,32%);
    background-image: url("../assets/img/background-pattern-wavify.png");
  }
</style>