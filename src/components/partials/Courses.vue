
<script>
import courses from "../../data/db-courses.js";
import CourseCard from "../small-components/CourseCard.vue";
export default {
  name: "Courses",
  components:{
    CourseCard
  },
  data(){
    return{
      courses
    }
  }
}
</script>

<template>

  <section id="courses" class="overflow-hidden">

    <div class=" text-center pb-5">
      <h4 class="text-uppercase section-title grayfy fs-5">begin your journey at maxcoach</h4>
      <h2 class="text-capitalize my-5 ">latest <span class="greenify">online courses</span></h2>

      <div class="row mb-5 mb-row">
        <CourseCard v-for="(course,index) in courses" :key="index" :course="course" />
        

      </div>

      <a href="#" class="mb-button ">View all courses 
        <i class="fa-solid fa-arrow-right-long"></i>
      </a>

    </div>

  </section>

</template>

<style lang="scss" scoped>
  h2{
    font-family: "Roboto", serif;
    font-size: 3.5rem;
  }
  
  //adjustements
  .mb-row{    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .col-4{
      padding-left: 0;
      padding-right: 0;      
    }  
  }
</style>