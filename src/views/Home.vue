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
import Hero from './HomeSections/Hero.vue'
import Services from './HomeSections/Services.vue'
import Works from './HomeSections/Works.vue'
import Clients from './HomeSections/Clients.vue'
import Plan from './HomeSections/Plan.vue'
import Testimonials from './HomeSections/Testimonials.vue'
import Contact from './HomeSections/Contact.vue'
import Technologies from './HomeSections/Technologies.vue'

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
