<template>
  <main class="post individual" v-if="!isFetchingSinglePost && post.hasOwnProperty('title')">
    <h1>{{ post.title.rendered }}</h1>
    <small class="date">{{ post.date | dateformat }}</small>
    <section v-html="post.content.rendered"></section>
  </main>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters["blog/getSinglePost"];
    },
    isFetchingSinglePost() {
      return this.$store.getters["blog/getIsFetchingSinglePost"];
    },
  },
  created() {
    this.$store.dispatch("blog/fetchPost", this.$route.params.slug);
    // console.log(this.$route.params);
  },
};
</script>

<style lang="scss" scoped>
main.post {
  margin: 60px auto 50px;
  max-width: 800px;
  padding: 0 30px 70px;
}

h1 {
  color: black;
  font-size: 40px;
}

section {
  color: #444;
}

.date {
  text-align: center;
}
</style>
