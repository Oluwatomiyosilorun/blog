<template>
  <div>
    <article class="article" role="article" aria-labelledby="article">
      <PostMainLoader v-if="isFetchingPosts" />
      <div class="article__container" v-else>
        <div class="article__container__card">
          <div class="article__container__img" role="banner">
            <img :src="mainPost.jetpack_featured_media_url" />
          </div>
          <div class="article__container__description">
            <section
              class="article__container__timeframe"
              aria-labelledby="timeframe"
            >
              <small>Frontend</small>
              <small class="time">1 hour ago</small>
            </section>

            <section
              class="article__container__details"
              aria-labelledby="section-details"
            >
              <h4
                v-html="mainPost.title.rendered"
                class="article__container__title"
                role="heading"
              ></h4>
              <p
                v-html="mainPost.excerpt.rendered"
                class="article__container__excerpt"
              ></p>
            </section>

            <section
              class="article__container__footer"
              aria-labelledby="section-footer"
            >
              <small>{{ mainPost.date }}</small>
              <div>
                <NuxtLink
                  :to="`blog/${mainPost.slug}`"
                  class="article__container__footer__direction"
                  >Read Full &#8594;</NuxtLink
                >
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="article__posts">
        <div class="article__posts__box">
          <div class="article__posts__box__loader" v-if="isFetchingPosts">
            <PostBoxLoader />
            <PostBoxLoader />
            <PostBoxLoader />
          </div>
          <div
            class="article__posts__individual__box"
            v-for="post in otherPosts"
            :key="post.id"
            v-else
          >
            <img
              :src="post.jetpack_featured_media_url"
              alt=""
              class="article__posts__individual__box__img"
            />
            <section
              class="article__posts_timeframe"
              aria-labelledby="timeframe"
            >
              <small>Frontend</small>
              <small class="time">1 hour ago</small>
            </section>

            <section
              class="article__posts_details"
              aria-labelledby="section-details"
            >
              <h4 class="article__posts__details__title" role="heading">
                {{ post.title.rendered | truncate(100, "...") }}
              </h4>
              <p class="article__posts__details__excerpt">
                {{ post.excerpt.rendered | truncate(100, "...") }}
              </p>
            </section>

            <section
              class="article__posts__footer"
              aria-labelledby="section-footer"
            >
              <small>{{ post.date }}</small>
              <div>
                <NuxtLink
                  :to="`blog/${post.slug}`"
                  class="article__container__footer__direction"
                  >Read Full &#8594;</NuxtLink
                >
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  computed: {
    isFetchingPosts() {
      return this.$store.getters["blog/getIsFetchingPosts"];
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
