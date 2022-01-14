<template>
  <vue-skeleton-loader
    type="rect"
    :width="330"
    :height="200"
    animation="wave"
    color="rgba(0,0,0,0.17)"
  />
</template>
<script>
import Vue from "vue";
import VueSkeletonLoader from "skeleton-loader-vue";

export default Vue.extend({
  components: { VueSkeletonLoader },
});
</script>
