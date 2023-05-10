
<script>
import functions from '../../data/functions';
export default {
  name: "BookCard",
  props:{
    book: Object
  },
  data(){
    return{
      functions
    }
  }
}
</script>

<template>

<div class="col-4 mb-card">
          <div class="image position-relative">
            <img :src="functions.getImage(`.././assets/img/product-book-${book.id}-400x400.jpg`)" :alt="book.id">
          </div>
          <div class="text text-center">
            <h5 class="fs-4 mt-2">{{ book.title }}</h5>
            <span class="fs-4">{{ book.price.integer }}<span class="fs-6">{{ book.price.cents }}</span>&dollar;</span>
          </div>
        </div>
  
</template>

<style lang="scss" scoped>

@use "../../scss/vars" as *;
  
.mb-card{
  cursor: pointer;
    img{
      width: 100%;
      height: 330px;
    }
    .text{
      h5{
        color: $primary-text-color;
        margin-bottom: 5px;
        &:hover{
          color: $secondary-text-color;
        }
      }
      span{
        color: $secondary-text-color;
        font-weight: bold;
      }
    }
  }

</style>