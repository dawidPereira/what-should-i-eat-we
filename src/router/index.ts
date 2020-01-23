import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Details from '../views/Details.vue'
import AddIngredient from '../views/AddIngredient.vue'
import AddRecipe from '../views/AddRecipe.vue'

import Test from '../views/Test.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/addIngredient',
    name: 'addIngredient',
    component: AddIngredient
  },
  {
    path: '/addRecipe',
    name: 'addRecipe',
    component: AddRecipe
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
