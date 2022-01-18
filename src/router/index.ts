import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "Home" */ '@/views/pages/Home'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, form, next) => {
  next();
});

export default router;
