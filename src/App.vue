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
const Loader = () => import(/*webpackChunkname: "loader"*/ './components/LoaderV2.vue');
// import Loader from "./components/LoaderV2.vue";

export default {
  name: "app",
  components: {
    Loader
  },
  data: () => ({
    loading: true
  }),
  created() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    });
    // setTimeout(() => {
    //   window.addEventListener("load", () => {
    //       this.loading = false;
    //   });
    // }, 3000);
  }
};
</script>