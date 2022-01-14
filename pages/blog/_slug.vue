<template>
  <main class="post__individual">
    <PostMainLoader v-if="isFetchingPosts" />
    <div v-else>
      <h1>{{ post.title.rendered }}</h1>
      <small class="date">{{ post.date | dateformat }}</small>
      <section v-html="post.content.rendered"></section>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
     isFetchingPosts() {
      return this.$store.getters["blog/getIsFetchingPosts"];
    },
    otherPosts() {
      return this.$store.getters["blog/otherPosts"];
    },
    post() {
      return this.otherPosts.find(el => el.slug === this.slug);
      console.log(this.slug);
    },
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    if (this.otherPosts.length > 0) return;
    this.$store.dispatch("blog/fetchPosts");
  },
};
</script>

<style lang="scss" scoped>

</style>