<template>
  <div class="home-page">
    <hero></hero>
    <services></services>
    <!-- <Testimonials></Testimonials> -->
  </div>
</template>

<script>
import Hero from './HomeSections/Hero.vue'
import Services from './HomeSections/Services.vue'
import Testimonials from './HomeSections/Testimonials.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Services,
    Testimonials
  }
}
</script>
