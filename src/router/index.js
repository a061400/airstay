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
        path: 'main',
        component: () => import('../views/AllRoomView.vue'),
      },
      {
        path: 'room/:roomId',
        component: () => import('../views/RoomDetail.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
