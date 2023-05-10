
<script>
import About from './partials/About.vue';
import Blog from './partials/Blog.vue';
import Books from './partials/Books.vue';
import Courses from './partials/Courses.vue';
import Stories from './partials/Stories.vue';
import functions from '../data/functions.js';
export default {
  name: "Main",
  components:{
    About,
    Blog,
    Books,
    Courses,
    Stories
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

    <div class="data d-flex position-relative" v-for="(statistic,index) in statistics" :key="index">
      <img :src="functions.getImage(`../assets/img/background-pattern-grid-line-06.png`)" alt="grid-line" >
      <div class="text text-center ms-5 my-3">
        <h3>{{ statistic.data }}</h3>
        <span>{{ statistic.title }}</span>
      </div>
    </div>
  </div>
  <About />
  <Courses />
  <Books />
  <Stories />
  <Blog />
</template>

<style lang="scss" scoped>
@use "../scss/vars" as *;
.statistics{
  margin: 100px auto;
  .data{
    img{
      position: absolute;
      top: 0;
      left: 0;
      // width: 30px;
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