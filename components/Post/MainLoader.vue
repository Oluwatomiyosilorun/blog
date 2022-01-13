<template>
  <vue-skeleton-loader
    type="rect"
    :width="1155"
    :height="250"
    animation="pulse"
  />
</template>
<script>
import Vue from "vue";
import VueSkeletonLoader from "skeleton-loader-vue";

export default Vue.extend({
  components: { VueSkeletonLoader },
});
</script>
