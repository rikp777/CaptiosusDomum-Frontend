import Vue from 'vue'
import 'mutationobserver-shim'

import App from './App.vue'
import router from './router'
import store from './store'

import './utils/filter'
import './plugins'
import './registerServiceWorker'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
