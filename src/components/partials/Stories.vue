
<script>
export default {
  name: "Stories"
}
</script>

<template>

  <section id="stories">
    <div class="stories-container">

      <div class="row position-relative">

        <div class="col-6 text-center">
          <h4 class="text-uppercase section-title greenify">real stories</h4>

          <div class="text-container mx-auto d-flex justify-content-center align-items-center">
            <h2 class="fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit velit vitae labore, optio repudiandae voluptate quisquam ex odit, amet, eaque provident beatae obcaecati cum inventore? Enim hic eum quibusdam in.</h2>
          </div>

          <div class="user text-center mx-auto">
            <img src="../../assets/img/testimonial-avata-01.jpg" alt="nome">
            <h3 class="text-capitalize mb-2 fs-4">nome cognome</h3>
            <span>/profession</span>
          </div>

          <div class="controls position-absolute d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-sort-up prev"></i>
            <span class="fs-4">1/4</span>
            <i class="fa-solid fa-sort-down next"></i>
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
      
    .text-container{
      width: 70%;
      margin: 50px 0 70px 0;
      }
      .user{
        img{
          border-radius: 50%;
          height:90px;
          margin-bottom: 30px;
        }
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