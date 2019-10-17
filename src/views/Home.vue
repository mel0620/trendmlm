<template>
  <div class="home-page">
    <hero></hero>
    <services></services>
    <works></works>
    <plan></plan>
  </div>
</template>

<script>
import Hero from './HomeSections/Hero.vue'
import Services from './HomeSections/Services.vue'
import Works from './HomeSections/Works.vue'
import Plan from './HomeSections/Plan.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Services,
    Works,
    Plan
  }
}
</script>
