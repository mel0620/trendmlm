<template>
  <div id="app">
    <div v-if="!loading">
      <router-view />
    </div>
    <div v-else>
      <loader></loader>
    </div>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";

export default {
  name: "app",
  components: {
    Loader
  },
  data: () => ({
    loading: true
  }),
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    });
  }
};
</script>

<style lang="scss">
@import "scss/style.scss";
</style>
