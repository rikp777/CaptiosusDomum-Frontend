import Vue from 'vue'
import VueRouter from 'vue-router'
import lighting from './routes/lighting.route'
import climate from './routes/climate.route'
import room from './routes/room.route'
import device from './routes/device.route'

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
          ...climate,
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
