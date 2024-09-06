import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'login',
        component: () => import('../views/UserLogin.vue'),
      },
      {
        path: 'newmember',
        component: () => import('../views/NewMember.vue'),
      },
      {
        path: 'homeowner',
        component: () => import('../views/Homeowner.vue'),
      },
      {
        path: 'main',
        name: 'main',
        component: () => import('../views/AllRoomView.vue'),
      },
      {
        path: 'room/:roomId',
        component: () => import('../views/RoomDetail.vue'),
      },
      {
        path: 'wishList',
        component: () => import('../views/WishList.vue'),
      },
      {
        path: 'checkout/:roomId',
        component: () => import('../views/CheckoutView.vue'),
      },
      {
        path: 'ordered/:orderedId',
        component: () => import('../views/OrderedView.vue'),
      },
      {
        path: '/about',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: '/policy',
        component: () => import('../views/PolicyView.vue'),
      },
      {
        path: '/terms',
        component: () => import('../views/TermsView.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../views/BackLogin.vue'),
      },
      {
        path: 'room',
        component: () => import('../views/BackRoomInfo.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/BackCouponInfo.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/BackOrderInfo.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'main',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置，返回保存的位置（用于浏览器后退时）
    if (savedPosition) {
      return savedPosition;
    }
    // 否则返回顶部
    return { top: 0 };
  },
});

export default router;
