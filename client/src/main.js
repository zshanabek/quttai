import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.config.productionTip = false
const options = {
  theme: 'outline',
  position: 'bottom-center',
  keepOnHover: true,
  duration: 10000
}

Vue.use(Toasted, options)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
