<template>
  <section class="home-epaper" :style="{backgroundImage: 'url('+ publicPath + 'images/home/home-epaper-bg.jpg' +')'}">
    <div class="container-fluid py-5 px-4 text-light">
      <h2>訂閱電子報</h2>
      <p>
        歡迎訂閱 icamping 電子報，我們將不定期寄發給您最新的優惠與活動訊息。
      </p>
      <Form @submit="subscribe" v-slot="{ errors }" class="w-70 w-lg-50">
        <div class="row mb-3">
          <div class="col-8">
            <Field
              name="email"
              type="text"
              class="form-control contact-input rounded-0"
              rules="required|email"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入電子郵件"
            ></Field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>
          <div class="col-4">
            <button type="submit" class="btn btn-primary">
              訂閱
            </button>
          </div>
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  inject: ['emitter'],
  methods: {
    subscribe () {
      this.emitter.emit('send-message', {
        success: true,
        content: '成功訂閱電子報!'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-epaper {
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  height: 300px;
  .contact-input {
    background-color: transparent;
    color: #fff;
    &:focus {
      background-color: transparent;
    }
    &::placeholder {
      color: #fff;
    }
  }
}
</style>
