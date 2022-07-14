import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'ProductPage',
    component: () => import('@/views/ProductPage.vue'),
  },
  {
    path: '/color',
    name: 'ChooseColorPage',
    component: () => import('@/views/ChooseColorPage.vue'),
  },
  {
    path: '/interior',
    name: 'InteriorPage',
    component: () => import('@/views/InteriorPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
