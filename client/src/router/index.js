import Vue from 'vue'
import Router from 'vue-router'
import Shortener from '@/components/Shortener'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shortener',
      component: Shortener
    }
  ]
})
