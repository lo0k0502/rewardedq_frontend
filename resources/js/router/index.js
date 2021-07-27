import { createRouter, createWebHistory } from 'vue-router';
import { user, setUser } from '../app';

const routes = [
  { path: '/', redirect: '/login', },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../views/Questions'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NOTFOUND',
    component: () => import('../views/NOTFOUND'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!((from.name === 'Login' && to.name === 'Questions') || (from.name === 'Questions' && to.name === 'Login'))) 
    setUser({ id: '', depGrade: '', name: '' });
  (to.name === 'Questions' && !user.value.id) ? next('/login') : next();
  if (to.path === '/') next('/login');
});

export default router;
