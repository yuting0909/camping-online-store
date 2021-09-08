<template>
  <admin-nav-top />
  <div class="container-fluid position-relative">
    <toast-messages />
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
import ToastMessages from '../components/ToastMessages.vue'
import emitter from '../methods/emitter'
import pushMessageState from '../methods/pushMessageState'

export default {
  components: {
    AdminNavTop,
    AdminNavLeft,
    ToastMessages
  },
  provide () {
    return {
      emitter,
      pushMessageState
    }
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then(res => {
      pushMessageState(res, '登入')
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
