import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vodal from 'vodal'
import "vodal/common.css"
import "vodal/rotate.css"
// selected styles

Vue.component(Vodal.name, Vodal)
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
