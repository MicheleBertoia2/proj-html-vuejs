
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

  <section id="courses">

    <div class="mb-container text-center">
      <h5 class="text-uppercase">begin your journey at maxcoach</h5>
      <h2 class="text-capitalize mb-5">latest <span>online courses</span></h2>

      <div class="row mb-5">
        <CourseCard v-for="(course,index) in courses" :key="index" :course="course" />
        

      </div>

      <a href="#" class="mb-button ">View all courses 
        <i class="fa-solid fa-arrow-right-long"></i>
      </a>

    </div>

  </section>

</template>

<style lang="scss" scoped>
  
</style>