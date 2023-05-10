
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
    <div class="mb-container">
      <h4>blog updated</h4> 
      <!-- RICORDARSI DI UNIFICARE GLI STILI DI TUTTI I TITOLI DELLE SECTION -->
      <h2>Interesting <span class="greenify">articles updated</span> daily</h2>

      <div class="row">

        <BlogCard v-for="(blog, index) in blogs" :key="index" :blog="blog" />

      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>