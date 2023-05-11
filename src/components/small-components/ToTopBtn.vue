
<script>
import { store } from '../../data/store';
export default {
  name: "ToTopBtn",
  data(){
    return{
      store
    }
  },
  methods:{
    
  }  
}
</script>

<template>
  <div class="btn-to-top text-center" v-if="store.isBtnTop" @click="$emit('tothetop')">
    <i class="fa-solid fa-arrow-up-long"></i>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/vars" as *;
  .btn-to-top{
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: $secondary-text-color;
    color: white;
    i{
      font-size: 30px;
      line-height: 70px;
    }
  }
</style>