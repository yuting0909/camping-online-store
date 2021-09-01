<template>
  <admin-nav-top />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-lg-2 g-0 position-fixed">
        <admin-nav-left />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-lg-2 g-0"></div>
      <div class="col-md-9 col-lg-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavTop from '../components/AdminNavTop.vue'
import AdminNavLeft from '../components/AdminNavLeft.vue'

export default {
  components: {
    AdminNavTop,
    AdminNavLeft
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then(res => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
