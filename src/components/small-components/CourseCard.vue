
<script>
import functions from '../../data/functions';
export default {
  name: "CourseCard",
  props:{
    course: Object
  },
  data(){
    return{
      functions
    }
  }
}
</script>

<template>

<div class="col-4 mb-card text-start mb-3">

<img :src="functions.getImage(`.././assets/img/motivation-course-${course.id}-480x298.jpg`)" alt="course01">
<div class="text">
  <h3 class="mb-3">&dollar;{{ course.price }}</h3>
  <h3 class="fw-semibold fs-5 mb-5 text-capitalize">{{ course.title }}</h3>
  <span><i class="fa-regular fa-file-lines"></i> {{ course.lessonsNum }} lessons</span>
  <span><i class="fa-regular fa-user"></i> {{ course.students }} students</span>

</div>

</div>

  
</template>

<style lang="scss" scoped>

@use "../../scss/vars" as *;
  .mb-card{
    img{
      width: 100%;
      height: 230px;
    }
    .text{
      padding: 30px;
      h3{
        &:first-child{
          color: $secondary-text-color;
          font-weight: 450;
        }
        &:nth-child(2){
          color: $primary-text-color;
        }
      }
      span{
        color: $thertiary-text-color;
        margin: 0 25px 40px 0;
        font-size: .9rem;
        text-transform: capitalize;
        i{
          margin-right: 5px;
        }
      }
    }
  }

</style>