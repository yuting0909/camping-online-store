<template>
  <admin-nav />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'

export default {
  components: {
    AdminNav
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then(res => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
