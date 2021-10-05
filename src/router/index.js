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
    path: '/order',
    component: () => import('../views/Order.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/checkout/:orderId',
    component: () => import('../views/Checkout.vue'),
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
        component: () => import('../views/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/AdminCoupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
