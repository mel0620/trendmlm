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
const Hero          = () => import(/*webpackChunkname: "hero" */ './Hero.vue');
const GetToKnow     = () => import(/*webpackChunkname: "gettoknow" */ './GetToKnow.vue');
const RQoute        = () => import(/*webpackChunkname: "rqoute" */ './RQoute.vue');
const Services      = () => import(/*webpackChunkname: "services" */ './Services.vue');
const Works         = () => import(/*webpackChunkname: "works" */ './Works.vue');
const Clients       = () => import(/*webpackChunkname: "clients" */ './Clients.vue');
const Plan          = () => import(/*webpackChunkname: "plan" */ './Plan.vue');
const Testimonials  = () => import(/*webpackChunkname: "testimonial" */ './Testimonials.vue');
const Contact       = () => import(/*webpackChunkname: "contact" */ './Contact.vue');
const Technologies  = () => import(/*webpackChunkname: "tech" */ './Technologies.vue');

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
  mounted() {

  }
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