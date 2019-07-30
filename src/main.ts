import Vue from 'vue'
import App from './App.vue'
import store from './store'

import "../node_modules/fullpage.js/dist/fullpage.min.css"
import "./styles/_main.scss"

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
