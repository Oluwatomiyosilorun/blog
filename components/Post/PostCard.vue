<template>
  <div>
    <article class="article">
      <PostMainLoader v-if="isFetchingPosts" />
      <div class="article__container" v-else>
        <div class="article__container__card">
          <div class="article__container__img">
            <img :src="mainPost.jetpack_featured_media_url" />
          </div>
          <div class="article__container__description">
            <section class="article__container__timeframe">
              <small>Frontend</small>
              <small class="time">1 hour ago</small>
            </section>

            <section class="article__container__details">
              <h4 v-html="mainPost.title.rendered" class="article__container__title"></h4>
              <p v-html="mainPost.excerpt.rendered" class="article__container__excerpt"></p>
            </section>

            <section class="article__container__footer">
              <small>{{ mainPost.date }}</small>
              <a :href="`blog/${mainPost.slug}`" class="readmore slide">Read Full &#10230;</a>
            </section>
          </div>
        </div>
      </div>

      <div class="article__posts">
        <div class="article__posts__box">
          <div class="article__posts__individual__box" v-for="post in otherPosts" :key="post.id">
            <img :src="post.jetpack_featured_media_url" alt="" class="article__posts__individual__box__img"/>
            <section class="article__posts_timeframe">
              <small>Frontend</small>
              <small class="time">1 hour ago</small>
            </section>

            <section class="article__posts_details">
              <h4 class="article__posts__details__title" v-html="post.title.rendered"></h4>
              <p class="article__posts__details__excerpt"> {{post.excerpt.rendered | truncate(100, '...')}}</p>
            </section>

            <section class="article__posts__footer">
              <small>{{ post.date }}</small>
              <a :href="`blog/${post.slug}`" class="readmore slide">Read Full &#10230;</a>
            </section>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Vue from "vue";
import getReadTime from "easy-read-time";
 
export default Vue.extend({
  computed: {
    isFetchingPosts() {
      return this.$store.getters["blog/getIsFetchingPosts"];
      // return true;
    },
    mainPost() {
      return this.$store.getters["blog/mainPost"];
    },
    otherPosts() {
      return this.$store.getters["blog/otherPosts"];
    },
  },
  created() {
    if (this.otherPosts.length > 0) return;
    this.$store.dispatch("blog/fetchPosts");
  },
});
</script>

