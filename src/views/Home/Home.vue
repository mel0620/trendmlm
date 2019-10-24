<template>
  <div class="home-page">
    <hero></hero>
    <div data-visibility="hide">
      <RQoute></RQoute>
    </div>
    <GetToKnow></GetToKnow>
    <services></services>
    <works></works>
    <clients></clients>
    <plan></plan>
    <testimonials></testimonials>
    <contact></contact>
    <technologies></technologies>
  </div>
</template>

<script>
import Hero from "./Hero.vue"
const GetToKnow     = () => import(/*webpackChunkname: "about"*/ './GetToKnow.vue');
const RQoute        = () => import(/*webpackChunkname: "qoute"*/ './RQoute.vue');
const Services      = () => import(/*webpackChunkname: "services"*/ './Services.vue');
const Works         = () => import(/*webpackChunkname: "works"*/ './Works.vue');
const Clients       = () => import(/*webpackChunkname: "client"*/ './Clients.vue');
const Plan          = () => import(/*webpackChunkname: "plan"*/ './Plan.vue');
const Testimonials  = () => import(/*webpackChunkname: "testimonials"*/ './Testimonials.vue');
const Contact       = () => import(/*webpackChunkname: "contact"*/ './Contact.vue');
const Technologies  = () => import(/*webpackChunkname: "tech"*/ './Technologies.vue');

export default {
  name: 'home',
  components: {
    Hero,
    RQoute,
    GetToKnow,
    Services,
    Works,
    Clients,
    Plan,
    Testimonials,
    Contact,
    Technologies
  },
  created () {
    // setup lax
    // lax.setup({
		// 	breakpoints: { small: 0, large: 992 }
		// })

    // document.addEventListener('scroll', function(x) {
    //   lax.update(window.scrollY)
    // }, false)
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/style.scss";

[data-visibility="hide"] {
  display: none;

  @include for-size(phone-only) {
    display: block;
  }
}
</style>