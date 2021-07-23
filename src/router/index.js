import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import NOTFOUND from '../views/NOTFOUND'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NOTFOUND',
    component: NOTFOUND,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
