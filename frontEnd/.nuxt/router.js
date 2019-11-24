import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fd037da = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _0f01bf18 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages_products_index" */))
const _20a3777e = () => interopDefault(import('..\\pages\\signUp.vue' /* webpackChunkName: "pages_signUp" */))
const _16e8e2e7 = () => interopDefault(import('..\\pages\\products\\add.vue' /* webpackChunkName: "pages_products_add" */))
const _62b1f9c8 = () => interopDefault(import('..\\pages\\products\\list.vue' /* webpackChunkName: "pages_products_list" */))
const _410a3d02 = () => interopDefault(import('..\\pages\\products\\_id\\index.vue' /* webpackChunkName: "pages_products__id_index" */))
const _2e7040fc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _0fd037da,
    name: "login"
  }, {
    path: "/products",
    component: _0f01bf18,
    name: "products"
  }, {
    path: "/signUp",
    component: _20a3777e,
    name: "signUp"
  }, {
    path: "/products/add",
    component: _16e8e2e7,
    name: "products-add"
  }, {
    path: "/products/list",
    component: _62b1f9c8,
    name: "products-list"
  }, {
    path: "/products/:id",
    component: _410a3d02,
    name: "products-id"
  }, {
    path: "/",
    component: _2e7040fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
