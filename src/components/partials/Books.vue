
<script>
import BookCard from '../small-components/BookCard.vue';
export default {
  name: "Books",
  components:{
    BookCard
  },
  data(){
    return{
        books: [
      {
        title: "Alpha Man by Maxcoach",
        id: "11",
        price:{
          integer:"29",
          cents:".00"
        }
      },
      {
        title: "Real Man 4.0 by Maxcoach",
        id:"10",
        price:{
          integer:"39",
          cents:".00"
        }
      },
     ]
    }
  }
  
}
</script>

<template>
  <section id="books">

    <div class="mb-container">

      <div class="row">
        <div class="col-4">
          <h5 class="text-uppercase mb-4">book store online</h5>
          <h2 class="text-capitalize mb-5">Be Alpha With <span class="greenify">Wingman's Book</span></h2>
          <ul class="mb-5">
            <li>Help you understand yourself better</li>
            <li>Revealing mature tips</li>
            <li>Give the right advice</li>
            <li>Fascinating examples of alpha man</li>
          </ul>
          <a href="#" class="mb-button">Get Free Ebook</a>
        </div>

        <BookCard v-for="(book,index) in books" :key="index" :book="book"/>

        <!-- <div class="col-4 mb-card">
          <div class="image position-relative">
            <img src="../../assets/img/product-book-10-400x400.jpg" alt="book10">
          </div>
          <div class="text text-center">
            <h5 class="fs-3 mt-2">titolo</h5>
            <span class="fs-4">29<span class="fs-6">.00</span>&dollar;</span>
          </div>
        </div> -->

      </div>

    </div>

  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/vars" as *;
  ul{
    padding-left: 0;
    li{
      margin-bottom: 15px;
    &::before{
        font-weight: bolder;
        display: inline-block;
        font-style: solid;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f00c";
        margin-right: 15px;
        color: $secondary-text-color;
      }
    }
  }

  // .mb-card{
  //   img{
  //     width: 100%;
  //     height: 330px;
  //     cursor: pointer;
  //   }
  //   .text{
  //     h5{
  //       color: $primary-text-color;
  //       margin-bottom: 5px;
  //     }
  //     span{
  //       color: $secondary-text-color;
  //       font-weight: bold;
  //     }
  //   }
  // }
  
</style>