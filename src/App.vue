
<script>
import Header from './components/Header.vue';
import Jumbo from './components/Jumbo.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import {store} from "./data/store.js";
export default {
  name: "App",
  components:{
    Header,
    Jumbo,
    Main,
    Footer,
},
data(){
  return{
    store
  }
},
methods:{
  scrollHandler(e){
    let currentScrollPosition = e.srcElement.scrollTop;
    if (currentScrollPosition > store.scrollPosition) {
        console.log("Scrolling down",store.scrollPosition);
    }
    store.scrollPosition = currentScrollPosition;
  }
}
}
</script>

<template>
  <div class="main-wrapper" @scroll="scrollHandler">
    <Header />
  
    <Jumbo />
  
    <Main />
  
    <Footer />
  </div>

</template>

<style lang="scss">
  @use "./scss/main.scss";
  .main-wrapper{
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>