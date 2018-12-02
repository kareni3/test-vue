import Vue from 'vue'
import Router from 'vue-router'
import qwe from '@/qwe.vue'

Vue.use(Router)

export default new Router({
  mode:  'history',
  routes: [
    {
      path: '/qwe',
      name: 'qwe',
      component: qwe
    }
  ]
})
