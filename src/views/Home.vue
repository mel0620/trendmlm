<template>
  <div class="home-page">
    <hero></hero>
    <services></services>
  </div>
</template>

<script>
import Hero from './HomeSections/Hero.vue'
import Services from './HomeSections/Services.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Services
  }
}
</script>
