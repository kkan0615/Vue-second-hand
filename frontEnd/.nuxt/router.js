import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39374449 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages_product_index" */))
const _20a3777e = () => interopDefault(import('..\\pages\\signUp.vue' /* webpackChunkName: "pages_signUp" */))
const _640e8a77 = () => interopDefault(import('..\\pages\\product\\list.vue' /* webpackChunkName: "pages_product_list" */))
const _2e7040fc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/product",
    component: _39374449,
    name: "product"
  }, {
    path: "/signUp",
    component: _20a3777e,
    name: "signUp"
  }, {
    path: "/product/list",
    component: _640e8a77,
    name: "product-list"
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
