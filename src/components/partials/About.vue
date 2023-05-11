
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
      <h4 class="section-title greenify mb-5">ABOUT ME</h4>
      <div class="row mb-5">
        <div class="col-6 pe-5">
          <h2>How to Be an Alpha Male: the 15 Habits of True Alphas</h2>
        </div>
        <div class="col-6 ps-3">
          <p class="fs-5">Want to learn how to be <span class="greenify">an alpha male</span>? How to be more masculine? How to be the man you've always wanted to be?</p>
          <p class="grayfy">Your goal is to show the consistency of business, core values, and customer care. Punctuality, responsibility, individuality, accuracy, enthusiasm - you have to clearly explain how these qualities are applicable to your work. And the important thing is you do love what you do.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-7">
          <div class="video-box position-relative d-flex flex-grow-0">
            <img :src="functions.getImage(`.././assets/img/home-movation-video-poster-670x450.jpg`)" alt="video" class="testimonial">
            <img :src="functions.getImage(`.././assets/img/icon-youtube-play.png`)" alt="play" class="play">
          </div>
        </div>
        <div class="col-5 p-5">
          <h4 class="grayfy">"Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them."</h4>
          <div class="signature mt-5">
            <img :src="functions.getImage(`.././assets/img/home-movation-shape-01.png`)" alt="shape01">
            <h5 class="mt-3 fw-bold blufy">Kaixa Stark</h5>
            <span class="text-uppercase grayfy">wingman</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  .mb-container{
    .row{      
        h2{
        padding-right: 50px;
          word-spacing: 10px;
          font-size: 2.7rem;
          line-height: 4rem;
          text-transform: capitalize;
          font-family: "Roboto", serif;
          font-weight: 400;
        }
        p.grayfy{
          font-size: 14px;
        }
        h4{
          color: #333333;
          word-spacing: 3px;
          font-size: 1.8rem;
          line-height: 3rem;
          font-family: "Roboto", serif;
          font-weight: 400;
      }
    }

    .video-box{
      height: 100%;
      width: 100%;
      cursor: pointer;
      overflow: hidden;
      &:hover{
        img.testimonial{
          transform: scale(1.2);
          transition: transform 1s ease;
        }
      }
      img.play{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        height: 50px;
        width: 70px;
      }
    }
      
    
    
  }
</style>