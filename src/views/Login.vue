<template>
  <section
    class="login vh-100 position-relative"
    :style="{
      backgroundImage: 'url(' + publicPath + 'images/about/about-bg.jpeg' + ')'
    }"
  >
    <toast-messages />
    <div
      class="container-fluid position-absolute top-50 start-50 translate-middle"
      id="login"
    >
      <div class="row">
        <div class="col-10 col-md-6 col-xl-4 m-auto">
          <div class="card card-body bg-light border-0 rounded-3 p-3 p-sm-5">
            <img
              class="w-25 m-auto mb-3"
              alt="Vue logo"
              src="../assets/logo.png"
            />
            <form class="form-login" @submit.prevent="login">
              <div class="text-center mb-3">
                <h1 class="h3 mb-3 font-weight-normal">會員登入</h1>
              </div>
              <div class="input-group border-bottom mb-3">
                <div
                  class="input-group-text text-muted border-0 bg-transparent fs-5"
                >
                  <i class="bi bi-envelope-fill"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  class="form-control bg-transparent border-0"
                  placeholder="Email"
                  required
                  v-model="user.username"
                />
              </div>
              <div class="input-group border-bottom mb-3">
                <div
                  class="input-group-text text-muted border-0 bg-transparent fs-5"
                >
                  <i class="bi bi-lock-fill"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  class="form-control bg-transparent border-0"
                  placeholder="Password"
                  required
                  v-model="user.password"
                />
              </div>
              <br />
              <div class="d-grid mb-4">
                <button
                  class="btn btn-primary btn-lg btn-block rounded-3 fw-bold text-light"
                  type="submit"
                >
                  登入
                </button>
              </div>
              <router-link to="/" class="d-block w-fit m-auto"
                >回首頁</router-link
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pushMessageState from '../methods/pushMessageState'
import ToastMessages from '../components/ToastMessages.vue'
import emitter from '../methods/emitter'

export default {
  data () {
    return {
      publicPath: process.env.BASE_URL,
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: { ToastMessages },
  provide () {
    return { emitter }
  },
  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user).then(res => {
        if (res.data.success) {
          const { token, expired } = res.data
          document.cookie = `token=${token}; expired=${new Date(expired)}`
          this.$router.push('/admin/products')
        } else {
          pushMessageState(res, '登入')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  object-fit: cover;
  background-size: cover;
  background-position: center 40%;
}
</style>
