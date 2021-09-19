import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      navShow: true
    }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: {
      navShow: true
    }
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      navShow: false
    }
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      navShow: false
    },
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'create-product',
        component: () => import('../views/CreateProduct.vue')
      },
      {
        path: 'products/:productId',
        component: () => import('../views/EditProduct.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
