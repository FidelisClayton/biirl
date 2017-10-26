import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Workouts from './components/Workouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/workouts',
    component: Workouts
  }
]

const router = new VueRouter({
  routes
})

export default router
