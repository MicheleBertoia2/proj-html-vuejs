
<script>
import functions from '../../data/functions';
export default {
  name: "About",
  data(){
    return{
      functions,
    }
  }
}
</script>

<template>
  <section id="about">
    <div class="mb-container">
      <h3>ABOUT ME</h3>
      <div class="row">
        <div class="col-6">
          <h2>How to Be an Alpha Male: the 15 HHabits of True Alphas</h2>
        </div>
        <div class="col-6">
          <p>Want to learn how to be <span>an alpha male</span>? How to be more masculine? How to be the man you've always wanted to be?</p>
          <p>Your goal is to show the consistency of business, core values, and customer care. Punctuality, responsibility, individuality, accuracy, enthusiasm - you have to clearly explain how these qualities are applicable to your work. And the important thing is you do love what you do.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-8">
          <img :src="functions.getImage(`.././assets/img/home-movation-video-poster-670x450.jpg`)" alt="video">
        </div>
        <div class="col-4">
          <h4>"Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them."</h4>
          <div class="signature">
            <img :src="functions.getImage(`.././assets/img/home-movation-shape-01.png`)" alt="shape01">
            <h5>Kaixa Stark</h5>
            <span class="text-uppercase">wingman</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>