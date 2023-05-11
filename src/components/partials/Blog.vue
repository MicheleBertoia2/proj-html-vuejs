
<script>
import blogs from "../../data/db-blogs"
import BlogCard from '../small-components/BlogCard.vue';
export default {
  name: "Blog",
  components:{
    BlogCard
  },
  data(){
    return{
      blogs
    }
  }
}
</script>

<template>
  <section id="blog">
    <div class="mb-container text-center">
      <div class="text-start">
        <h4 class="text-uppercase section-title">blog updated</h4> 
        <h2 class="my-5 stylish fs-1">Interesting <span class="greenify">articles updated</span> daily</h2>
      </div>

      <div class="row">

        <BlogCard v-for="(blog, index) in blogs" :key="index" :blog="blog" />

      </div>
      
      <a href="#" class="greenify text-uppercase text-decoration-underline link-offset-3">view all posts</a>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>