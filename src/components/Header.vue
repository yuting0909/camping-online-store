<template>
  <header
    class="position-fixed position-md-static bg-white overflow-hidden w-100"
  >
    <div class="row px-3 border-bottom shadow-sm">
      <div class="col my-auto">
        <a class="fs-4 d-md-none" @click.prevent="openOffcanvas">
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
      <div class="col my-auto">
        <router-link
          to="/cart"
          class="fs-4 pe-3 float-end position-relative d-none d-md-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
            />
          </svg>
          <span
            class="badge fs-8 bg-warning rounded-pill position-absolute cart-badge"
          >
            {{ cart.length }}
          </span>
        </router-link>
        <router-link
          to="/admin/products"
          class="fs-4 pe-3 float-end text-muted position-relative d-none d-md-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <nav-offcanvas ref="navOffcanvas" :cart="cart"></nav-offcanvas>
    <div class="row g-0">
      <nav
        class="navbar navbar-expand-md bg-white d-none d-md-block top-0 p-0 shadow-sm"
        id="headerNavbar"
        ref="headerNavbar"
        :class="{ 'position-fixed': positionFixed }"
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link
                  to="/"
                  class="nav-link mx-2 py-3"
                  active-class="active-link"
                  >首頁 HOME</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/about"
                  class="nav-link mx-2 py-3"
                  active-class="active-link"
                  >品牌故事 STORY</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/products"
                  class="nav-link mx-2 py-3"
                  active-class="active-link"
                  >找營區 CAMPSITE</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/favorite"
                  class="nav-link mx-2 py-3"
                  active-class="active-link"
                  >我的收藏 FAVORITE
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-link v-if="floatCart" to="/cart" id="float-cart" class="btn btn-primary px-3 py-2">
      <div class="fs-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
          />
        </svg>
        <span
          class="badge fs-8 bg-warning rounded-pill position-absolute cart-badge"
        >
          {{ cart.length }}
        </span>
      </div>
    </router-link>
  </header>
</template>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '../style/custom/_variables';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

#logo {
  max-height: 100px;
}
#logo-text {
  max-height: 60px;
  min-width: 120px;
}
header,
#headerNavbar {
  z-index: 100;
}
.nav-item .active-link {
  border-bottom: 0.25rem solid $secondary;
  color: $secondary;
}
.cart-badge {
  top: -2px;
  right: 2px;
}
#float-cart {
  position: fixed;
  bottom: 20px;
  right: 20px;
  // background-color: #F5FFFA;
  border-radius: 50%;
  text-decoration: none;
}
</style>

<script>
import emitter from '../methods/emitter'
import NavOffcanvas from '../components/NavOffcanvas.vue'

export default {
  data () {
    return {
      positionFixed: false,
      cart: [],
      floatCart: false
    }
  },
  components: { NavOffcanvas },
  methods: {
    scrollHandler () {
      this.positionFixed = window.scrollY > this.$refs.headerNavbar.offsetTop
      this.floatCart = window.scrollY > this.$refs.headerNavbar.offsetTop
    },
    getCarts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then(res => {
        this.cart = res.data.data.carts
      })
    },
    openOffcanvas () {
      this.$refs.navOffcanvas.showOffcanvas()
    }
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
  },
  beforeUpdate () {
    this.$refs.navOffcanvas.hideOffcanvas()
  }
}
</script>
