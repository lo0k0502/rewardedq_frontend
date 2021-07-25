import { createRouter, createWebHistory } from 'vue-router';
import { user, setUser } from '../app';

const routes = [
  {
    path: '/',
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
  if (!(from.name === 'Login' && to.name === 'Questions')) setUser({ id: '', depGrade: '', name: '' });
  (to.name === 'Questions' && !user.value.id) ? next('/') : next();
});

export default router;
