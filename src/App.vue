<template>
  <div id="app">
	<div>
	  <router-view />
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
	setTimeout(() => {
	  this.loading = false;
	}, 3000);
  }
};
</script>

<style lang="scss">
@import "scss/style.scss";
// #app {
//   font-family: $font-primary;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
