import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Workouts from './components/Workouts'
import WorkoutsHistory from './components/WorkoutsHistory'
import Diet from './components/Diet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/workouts',
    component: Workouts
  },
  {
    path: '/diet',
    component: Diet
  },
  {
    path: '/workouts-history',
    component: WorkoutsHistory
  }
]

const router = new VueRouter({
  routes
})

export default router
