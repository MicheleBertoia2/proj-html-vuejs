
<script>
import Header from './components/Header.vue';
import Jumbo from './components/Jumbo.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import SideBar from './components/small-components/SideBar.vue';
import ToTopBtn from './components/small-components/ToTopBtn.vue';
import {store} from "./data/store.js";
export default {
  name: "App",
  components:{
    Header,
    Jumbo,
    Main,
    Footer,
    SideBar,
    ToTopBtn,
},
data(){
  return{
    store
  }
},
methods:{
  scrollHandler(e){
    let currentScrollPosition = e.srcElement.scrollTop;
    if (currentScrollPosition < store.scrollPosition && store.scrollPosition > 700) {
      store.isBtnTop = true
    }
    if(currentScrollPosition > store.scrollPosition || store.scrollPosition < 500){
      store.isBtnTop = false
    }
    store.scrollPosition = currentScrollPosition;
  },
  topFunction() {
      window.scrollTo(0,0)
      console.log("siii");
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
    
    <!-- small components -->
    <SideBar />
    <ToTopBtn @tothetop="topFunction"/>
  </div>

</template>

<style lang="scss">
  @use "./scss/main.scss";
  .main-wrapper{
    position: relative;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>