import Vue from 'vue'
import VueRouter from 'vue-router'
import HeaderView from '@/views/HeaderView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/header-view',
    name: 'HeaderView',
    component: HeaderView
  },
]

const router = new VueRouter({
  routes
})

export default router
