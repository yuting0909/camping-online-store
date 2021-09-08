<template>
  <nav class="d-md-block bg-light sidebar collapse border-end py-5">
    <h1 class="fs-6 fw-bold text-primary ms-3">後台系統</h1>
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <router-link to="/admin/products" class="nav-link rounded-0" :class="{active: this.$route.path === '/admin/products'}"><i class="bi bi-box-seam me-2"></i>產品清單</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/orders" class="nav-link rounded-0" :class="{active: this.$route.path === '/admin/orders'}"><i class="bi bi-card-text me-2"></i>訂單列表</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/coupons" class="nav-link rounded-0" :class="{active: this.$route.path === '/admin/coupons'}"><i class="bi bi-cash me-2"></i>優惠券</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="logout">登出</a>
      </li>
    </ul>
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
