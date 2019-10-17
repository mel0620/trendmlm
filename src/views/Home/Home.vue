<template>
  <div class="home-page">
    <hero></hero>
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
import Hero from './Hero.vue'
import GetToKnow from './GetToKnow.vue'
import Services from './Services.vue'
import Works from './Works.vue'
import Clients from './Clients.vue'
import Plan from './Plan.vue'
import Testimonials from './Testimonials.vue'
import Contact from './Contact.vue'
import Technologies from './Technologies.vue'

export default {
  name: 'home',
  components: {
    Hero,
    GetToKnow,
    Services,
    Works,
    Clients,
    Plan,
    Testimonials,
    Contact,
    Technologies
  }
}
</script>
