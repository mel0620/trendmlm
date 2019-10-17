<template>
  <div class="home-page">
    <hero></hero>
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
