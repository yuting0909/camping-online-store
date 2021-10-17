<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="navOffcanvas"
    aria-labelledby="navOffcanvasLabel"
    ref="offcanvas"
  >
    <div class="px-5 pt-3">
      <img
        id="logo"
        class="img-fluid"
        src="../assets/icamping.png"
        alt="icamping"
      />
    </div>
    <nav class="navbar">
      <div class="container p-0">
        <ul class="navbar-nav w-100">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link ps-3 mb-2"
              active-class="active-offcanvas"
              >首頁 HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link ps-3 mb-2"
              active-class="active-offcanvas"
              >品牌故事 STORY</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/products"
              class="nav-link ps-3 mb-2"
              active-class="active-offcanvas"
              >找營區 CAMPSITE</router-link
            >
          </li>
          <li class="nav-item border-bottom">
            <router-link
              to="/admin/products"
              class="nav-link ps-3 mb-2"
              active-class="active-offcanvas"
              >登入 LOGIN
            </router-link>
          </li>
          <li class="nav-item d-flex justify-content-center mt-5">
            <router-link
              to="/admin/products"
              class="nav-link mb-2 fs-4 position-relative w-fit text-muted"
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
            <router-link
              to="/cart"
              class="nav-link px-3 mb-2 fs-4 position-relative w-fit"
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
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '../style/custom/_variables';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

#navOffcanvas {
  width: 256px;
}
.nav-item .active-offcanvas {
  color: $light;
  background-color: $secondary;
}
</style>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'

export default {
  data () {
    return {
      offcanvas: {}
    }
  },
  props: ['cart'],
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas)
  },
  methods: {
    showOffcanvas () {
      this.offcanvas.show()
    },
    hideOffcanvas () {
      this.offcanvas.hide()
    }
  }
}
</script>
