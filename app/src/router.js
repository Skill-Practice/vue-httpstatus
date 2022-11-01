import { createRouter, createWebHistory } from 'vue-router';

import DefaultPage from './pages/DefaultPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultPage,
    },
  ],
});

export default router;
