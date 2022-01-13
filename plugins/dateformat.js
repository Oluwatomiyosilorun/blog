import Vue from "vue"

Vue.filter("dateformat", value => {
  return new Time(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
})