import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home"),
  },
  {
    path: '/area',
    name: 'area',
    component: () => import("@/views/area")
  },
  {
    path: '/text',
    name: 'text',
    component: () => import("@/views/text")
  },
  {
    path: '/server',
    name: 'server',
    component: () => import("@/views/server")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/dist/',
  routes
})

export default router
