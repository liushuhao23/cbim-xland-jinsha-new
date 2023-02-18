/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-11 22:28:33
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-17 21:16:51
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/user',
    name: 'User',
    component: import(/* webpackChunkName: 'User' */ '../views/User.vue'),
  },

  // {
  //   path: '/about',
  //   component: About,
  // },
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default routes;
