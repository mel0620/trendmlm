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
import lax from "lax.js"
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
	    this.loading = false;
	});
	// setTimeout(() => {
	//   this.loading = false;
	// }, 5000);
  },
  created () {
	// setup lax
  	lax.setup()

	document.addEventListener('scroll', function(x) {
      lax.update(window.scrollY)
    }, false)
  },
};
</script>

<style lang="scss">
@import "scss/style.scss";
</style>
