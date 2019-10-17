<template>
  <div class="home-page">
    <hero></hero>
    <!-- <Testimonials></Testimonials> -->
    <services></services>
    <works></works>
  </div>
</template>

<script>
import Hero from './HomeSections/Hero.vue'
import Services from './HomeSections/Services.vue'
import Works from './HomeSections/Works.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Services,
    Works
  }
}
</script>
