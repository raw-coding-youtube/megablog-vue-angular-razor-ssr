<template>
  <div>
    <router-link class="card" v-for="blog in blogs" :to="`/${blog.id}`" :key="blog.id">
      <header>{{blog.title}}</header>
      <div>{{blog.body}}</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    if (this.blogs.length < 1) {
      this.$store.dispatch("loadBlogs");
    }
  },
  meta: {
    title: "Mega Blog",
    description: "This is an awesome super Mega BLOGGGG",
    keywords: "vue, blog, mega, ssr"
  },
  loadAsync({ store, origin }) {
    return store.dispatch("loadBlogs", origin);
  },
  computed: mapState(["blogs"])
};
</script>

<style>
</style>
