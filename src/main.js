import Vue from 'vue'
import 'mutationobserver-shim'

import App from './App.vue'
import router from './router'
import store from './store'

import './utils/filter'
import './plugins'
import './registerServiceWorker'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  icon: 'success',
  toast: true,
  position: 'top-end',
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
  backdrop: false,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
}
Vue.use(VueSweetalert2, options);

import apiService from './utils/apiService'
apiService.initialize();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
