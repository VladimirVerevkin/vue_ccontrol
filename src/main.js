import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vodal from 'vodal'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "vodal/common.css"
import "vodal/rotate.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import dotenv from 'dotenv'

// dotenv.config()

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component(Vodal.name, Vodal)
console.log(process.env.VUE_APP_URL)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
