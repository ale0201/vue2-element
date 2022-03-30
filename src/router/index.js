import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '@/pages/home/index.vue'
import Menu1 from '@/pages/menu1/index.vue'
import Menu2 from '@/pages/menu2/index.vue'
import Menu3 from '@/pages/menu3/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeLayout,
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        component: Menu1,
        children: [
        ]
      },
      {
        path: 'menu2',
        name: 'menu2',
        component: Menu2,
        children: [
        ]
      },
      {
        path: 'menu3',
        name: 'menu3',
        component: Menu3,
        children: [
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [...routes],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
