import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import LazyLoadDirective from "./directives/LazyLoadDirective";

Vue.config.productionTip = false

Vue.directive("lazyload", LazyLoadDirective);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
