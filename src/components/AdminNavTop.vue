<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">iCamping</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#adminNavbar"
        aria-controls="adminNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="adminNavbar">
        <ul class="navbar-nav me-auto d-md-none">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link"
              >產品清單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link"
              >優惠券</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  inject: ['pushMessageState'],
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api).then(res => {
        this.pushMessageState(res, '登出')
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
