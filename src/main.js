import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

require("materialize-css/dist/css/materialize.css");
require("materialize-css/dist/js/materialize.js");

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
