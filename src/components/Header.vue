<template>
  <header
    class="position-fixed position-md-static bg-white overflow-hidden w-100"
  >
    <div class="row px-3 border-bottom shadow-sm">
      <div class="col my-auto d-md-none">
        <a
          class="fs-5"
          data-bs-toggle="collapse"
          href="#headerNavbarCollapse"
          role="button"
          aria-expanded="false"
          aria-controls="headerNavbarCollapse"
        >
          <i class="bi bi-list"></i>
        </a>
      </div>
      <div class="col mx-auto text-center">
        <router-link to="/">
          <img
            id="logo"
            class="img-fluid pt-4 d-none d-md-inline"
            src="../assets/logo.png"
            alt="icamping"
          />
          <img
            id="logo-text"
            class="img-fluid d-md-none"
            src="../assets/icamping.png"
            alt="icamping"
          />
        </router-link>
      </div>
      <div class="col my-auto d-md-none">
        <router-link to="/" class="fs-4 float-end d-flex align-items-center"
          ><i class="bi bi-cart4"></i>
          <span class="badge fs-8 bg-primary rounded-pill">
            {{ cart.length }}
          </span>
        </router-link>
      </div>
    </div>
    <div class="row collapse d-md-none" id="headerNavbarCollapse">
      <div class="col">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item px-lg-3">
              <router-link to="/about" class="nav-link"
                >品牌故事 STORY</router-link
              >
            </li>
            <li class="nav-item px-lg-3">
              <router-link to="/products" class="nav-link"
                >找營區 CAMPSITE</router-link
              >
            </li>
            <li class="nav-item px-lg-3">
              <router-link to="/login" class="nav-link">登入 LOGIN</router-link>
            </li>
            <li v-if="cart" class="nav-item px-lg-3 my-auto d-none d-md-block">
              <router-link
                to="/cart"
                class="btn btn-warning text-light rounded-pill nav-link py-1 px-3"
                ><i class="bi bi-bag me-2"></i>
                <small> {{ cart.length }} 件商品</small>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row g-0">
      <nav
        class="navbar navbar-expand-md bg-white d-none d-md-block top-0"
        id="headerNavbar"
        ref="headerNavbar"
        :class="{ 'position-fixed': positionFixed }"
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item px-lg-3">
                <router-link to="/about" class="nav-link"
                  >品牌故事 STORY</router-link
                >
              </li>
              <li class="nav-item px-lg-3">
                <router-link to="/products" class="nav-link"
                  >找營區 CAMPSITE</router-link
                >
              </li>
              <li class="nav-item px-lg-3">
                <router-link to="/login" class="nav-link"
                  >登入 LOGIN</router-link
                >
              </li>
              <li
                v-if="cart"
                class="nav-item px-lg-3 my-auto d-none d-md-block"
              >
                <router-link
                  to="/cart"
                  class="btn btn-warning text-light rounded-pill nav-link py-1 px-3"
                  ><i class="bi bi-bag me-2"></i>
                  <small> {{ cart.length }} 件商品</small>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
#logo {
  max-height: 100px;
}
#logo-text {
  max-height: 60px;
  min-width: 120px;
}
header,
#headerNavbar {
  z-index: 999;
}
</style>

<script>
import emitter from '../methods/emitter'

export default {
  data () {
    return {
      positionFixed: false,
      cart: []
    }
  },
  methods: {
    scrollHandler () {
      this.positionFixed = window.scrollY > this.$refs.headerNavbar.offsetTop
    },
    getCarts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then(res => {
        this.cart = res.data.data.carts
      })
    }
    // removeCarts () {
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
    //   this.$http.delete(url).then(res => {
    //     console.log(res.data)
    //   })
    // }
  },
  created () {
    this.getCarts()
    emitter.on('sendCart', cart => {
      this.cart = cart
    })
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>
