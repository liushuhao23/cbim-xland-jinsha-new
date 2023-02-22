/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-17 18:28:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-22 19:30:29
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/user/users',
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // {
  //   path: '/user',
  //   name: 'User',
  //   component: User,
  // },
  {
    path: '/user',
    name: 'User',
    children: [
      {
        path: 'users',
        name: 'User',
        component: User,
      },
    ],
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
