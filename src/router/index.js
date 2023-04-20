import { createRouter, createWebHistory } from 'vue-router';
import { user, setUser } from '../main';

const router = createRouter({
  history: createWebHistory(process.env.ENVIRONMENT === 'production' ? '/rewardedq/' : '/'),
  routes: [
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
      path: '/result',
      name: 'Result',
      component: () => import('../views/Result'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NOTFOUND',
      component: () => import('../views/Login'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!((from.name === 'Login' && to.name === 'Questions') 
    || (from.name === 'Questions' && to.name === 'Login') 
    || (from.name === 'Questions' && to.name === 'Result'))) 
    setUser({ name: '', stuid: '', depGrade: '' });
  ((to.name === 'Questions' || to.name === 'Result') && !user.value.name) ? next('/login') : next();
  if (to.path === '/') next('/login');
});

export default router;
