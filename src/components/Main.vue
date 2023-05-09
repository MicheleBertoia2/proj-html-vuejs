
<script>
import About from './partials/About.vue';
import Blog from './partials/Blog.vue';
import Books from './partials/Books.vue';
import Courses from './partials/Courses.vue';
import Stories from './partials/Stories.vue';
export default {
  name: "Main",
  components:{
    About,
    Blog,
    Books,
    Courses,
    Stories
  }
}
</script>

<template>
  <h2>Main</h2>
  <About />
  <Courses />
  <Books />
  <Stories />
  <Blog />
</template>

<style lang="scss" scoped>

</style>