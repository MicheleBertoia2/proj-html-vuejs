
<script>
import functions from '../../data/functions';
export default {
  name: "Clients",
  data(){
    return{
      functions,
      clientImg: ["05","06","07","04","03","02"]
    }
  }
}
</script>

<template>
  <section id="clients">
    <div class="mb-container">

      <div class="row">

        <div class="col-2 image-container" v-for="(n,index) in clientImg" :key="index">
          <img :src="functions.getImage(`.././assets/img/client-logo-${clientImg[index]}-primary.png`)" :alt="clientImg[index]">
        </div>

      </div>

    </div>
  </section>


</template>

<style lang="scss" scoped>
.image-container{
  padding: 30px;
}
  img{
    width: 100%;
    height: 80px;
    object-fit: contain;
    filter: grayscale(80%) opacity(40%);
    transition: all .5s ease;
    &:hover{
      filter: none;
    }
  }
</style>