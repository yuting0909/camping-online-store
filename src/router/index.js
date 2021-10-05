import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/products/:productId',
    component: () => import('../views/Product.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      show: false
    },
    children: [
      {
        path: 'products',
        component: () => import('../views/AdminProducts.vue')
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
