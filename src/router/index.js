import { createRouter, createWebHistory } from 'vue-router'; // Import from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/secure',
    name: 'Secure',
    component: () => import(/* webpackChunkName: "secure" */ '../views/Secure.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for history mode
  routes,
});

export default router;