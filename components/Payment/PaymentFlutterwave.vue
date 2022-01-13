<template>
  <section>
    <h4>Join our Team of Writers</h4>
    <p>
      On dasdas, writers earn a living doing what they love.<br />
      Getting started is easy. Just pay a one time <b>$25 fee</b> and everything is
      ready to go.
    </p>
    <button @click="payViaService">Join Us</button>
  </section>
</template>

<script>
export default {
  name: "App",
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
          logo: "https://flutterwave.com/images/logo-colored.svg",
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
section {
  margin: 10% 0;
  text-align: center;
  h4 {
    font-family: ProRegular;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin: 0;
    // color: $black01;
  }
  p{
    font-family: ProRegular;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    margin: 12px 0px;
  }
  button{
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
