<template>
  <div class="container">
      <div class="row">
        <post-card />
        <payment-flutterwave/>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostCard from "../components/Post/PostCard.vue";
import Flutterwave from  'flutterwave-vue-v3'
import PaymentFlutterwave from "../components/Payment/PaymentFlutterwave.vue";

Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-21575752fa0c494d66db575d21be08d4-X' } )

export default Vue.extend({
  components: { PostCard, PaymentFlutterwave },
});
</script>

<style lang="scss" scoped></style>
