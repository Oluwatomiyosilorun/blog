<template>
  <section class="payment__container">
    <h4 class="payment__title" role="heading">Join our Team of Writers</h4>
    <p class="payment__detail">
      On dasdas, writers earn a living doing what they love.<br />
      Getting started is easy. Just pay a one time <b>$25 fee</b> and everything
      is ready to go.
    </p>
    <button type="button" role="button" @click="payViaService" class="payment__button" name="button">Join Us</button>
  </section>
</template>

<script>
export default {
  name: "PaymentFlutterWave",
  data() {
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 25,
        currency: "USD",
        payment_options: "card",
        redirect_url: "/",
        meta: {
          counsumer_id: "7898",
          consumer_mac: "kjs9s8ss7dd",
        },
        customer: {
          name: "Demo Customer  Name",
          email: "customer@mail.com",
          phone_number: "081845***044",
        },
        customizations: {
          title: "dasdas",
          description: "Customization Description",
          logo: "",
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      },
    };
  },
  methods: {
    payViaService() {
      this.payWithFlutterwave(this.paymentData);
    },
    makePaymentCallback(response) {
      console.log("Pay", response);
      if (response && response.status == "successful") {
        setTimeout(() => {
          alert("mi amor");
          (document.location.href = "/"), true;
        }, 10000);
      }
    },
    closedPaymentModal() {
      console.log("payment is closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
  },
};
</script>

<style lang="scss" scoped>
.payment__container {
  margin: 10% 0;
  text-align: center;
  .payment__title{
    font-family: ProRegular;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin: 0;
    // color: $black01;
  }
  .payment__detail{
    font-family: ProRegular;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    margin: 12px 0px;
    @media only screen and (max-width:700px){
      font-size:15px;
    }
  }
  .payment__button{
    background-color: black;
    color: white;
    padding: 12px 55px;
    width: 177px;
    height: 45px;
    border: 0;
    font-family: 'ProRegular';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-top: 35px;
    cursor: pointer;
  }
}
</style>
