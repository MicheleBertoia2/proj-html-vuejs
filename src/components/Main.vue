
<script>
import About from './partials/About.vue';
import Blog from './partials/Blog.vue';
import Books from './partials/Books.vue';
import Courses from './partials/Courses.vue';
import Stories from './partials/Stories.vue';
import Clients from './partials/Clients.vue';
import functions from '../data/functions.js';
export default {
  name: "Main",
  components:{
    About,
    Blog,
    Books,
    Courses,
    Stories,
    Clients
  },
  data(){
    return{
      functions,
      statistics: [
        {
          title: "finished sessions",
          data: 1926
        },
        {
          title: "satisfaction rate",
          data: "100%"
        },
        {
          title: "enrolled learners",
          data: "3092+"
        },
        {
          title: "online instructors",
          data: 200
        },
      ]
    }
  }
}
</script>

<template>
  <div class="statistics mb-container d-flex justify-content-between ">

    <div class="data d-flex position-relative align-items-center" v-for="(statistic,index) in statistics" :key="index">
      <img :src="functions.getImage(`../assets/img/background-pattern-grid-line-06.png`)" alt="grid-line" >
      <div class="text text-center ms-5">
        <h3>{{ statistic.data }}</h3>
        <span>{{ statistic.title }}</span>
      </div>
    </div>
    
    <div class="data d-flex position-relative" >
      <img :src="functions.getImage(`../assets/img/background-pattern-grid-line-06.png`)" alt="grid-line" >      
    </div>

  </div>

  <About />
  <Courses />
  <Books />
  <Clients />
  <Stories />
  <Blog />
</template>

<style lang="scss" scoped>
@use "../scss/vars" as *;
.statistics{
  margin-top: 100px;
  margin-bottom: 100px;
  .data{
    height: 125px;
    &:last-child{
      img{
        width: 270px;
      }
    }
    img{
      position: absolute;
      top: 0;
      left: 26px;
      width: 100%;
      object-fit: contain;
      transform: scale(1.2);
    }
    .text{
      h3{
        color: $secondary-text-color;
        font-weight: bolder;
        font-size: 2.5rem;
      }
      span{
        text-transform: uppercase;
        font-weight: 500;
      }
    }
    
  }
}
</style>