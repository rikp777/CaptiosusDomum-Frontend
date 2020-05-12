import Vue from 'vue'
import VueRouter from 'vue-router'
import lighting from './routes/lighting.route'
import thermostat from './routes/thermostat.route'
import room from './routes/room.route'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Main'),
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('../views/home/Index'),
        children: [
          ...lighting,
          ...thermostat,
          ...room
        ]
      },
      {
        name: 'admin',
        path: 'admin',
        component: () => import('../views/admin/Index'),
        children: [

        ]
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
