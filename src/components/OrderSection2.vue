<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-xmpavumjb">
      <div class="ldio-ylwm2fadiqf">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </Loading>
  <section class="order-section-2">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-6 mb-5">
          <div class="card rounded-0">
            <div class="card-header rounded-0 bg-info text-white">
              <h2 class="fs-4 my-1">訂單資訊</h2>
            </div>
            <div class="card-body px-sm-4">
              <div
                v-for="(item, i) in cart.carts"
                :key="i"
                class="row g-0 py-2"
              >
                <div class="col-8">
                  <span class="me-2"
                    >{{ item.product.belong_to }} /
                    {{ item.product.title }}</span
                  ><span class="fs-7 text-muted">( 數量：{{ item.qty }} )</span>
                </div>
                <div class="col-4 text-end">
                  NT$ {{ $filters.currency(item.total) }}
                </div>
              </div>
              <div class="row g-0 py-2 border-top">
                <div class="col-8">小計：</div>
                <div class="col-4 text-end">
                  NT$ {{ $filters.currency(cart.total) }}
                </div>
              </div>
              <div
                v-if="cart.final_total !== cart.total"
                class="row g-0 py-2 text-success border-bottom border-dark"
              >
                <div class="col-8">折扣：</div>
                <div class="col-4 text-end">
                  - NT$ {{ $filters.currency(cart.total - cart.final_total) }}
                </div>
              </div>
              <div class="row g-0 py-2">
                <div class="col-8">合計：</div>
                <div class="col-4 text-end">
                  NT$ {{ $filters.currency(cart.final_total) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-5">
          <div class="card rounded-0">
            <div class="card-header rounded-0 bg-info text-white">
              <h2 class="fs-4 my-1">訂購者資料</h2>
            </div>
            <div class="card-body">
              <Form @submit="createOrder" v-slot="{ errors }">
                <div class="mb-3">
                  <label for="name" class="form-label mb-1">訂購者姓名</label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    class="form-control"
                    rules="required"
                    :class="{ 'is-invalid': errors['name'] }"
                    v-model="form.user.name"
                  ></Field>
                  <error-message
                    name="name"
                    class="invalid-feedback"
                  ></error-message>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label mb-1">電子信箱</label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
                    class="form-control"
                    rules="required|email"
                    :class="{ 'is-invalid': errors['email'] }"
                    v-model="form.user.email"
                  ></Field>
                  <span class="fs-7 text-muted"
                    >請填入訂單通知Email (訂單資訊將以此E-mail通知您)</span
                  >
                  <error-message
                    name="email"
                    class="invalid-feedback"
                  ></error-message>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label mb-1">連絡電話</label>
                  <Field
                    id="phone"
                    name="phone"
                    type="text"
                    class="form-control"
                    :rules="isPhone"
                    :class="{ 'is-invalid': errors['phone'] }"
                    v-model="form.user.tel"
                  ></Field>
                  <error-message
                    name="phone"
                    class="invalid-feedback"
                  ></error-message>
                </div>
                <div class="mb-3">
                  <label for="note" class="form-label mb-1">訂單備註</label>
                  <textarea
                    name="note"
                    id="note"
                    rows="5"
                    class="form-control"
                    placeholder="有什麼想告訴營主嗎?"
                    v-model="form.message"
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-sm-5 mb-3">
                    <a href="#/cart" class="btn btn-outline-success w-100"
                      ><i class="bi bi-caret-left-fill"></i> 返回購物車</a
                    >
                  </div>
                  <div class="col-sm-3"></div>
                  <div class="col-sm-4 mb-3">
                    <button
                      type="submit"
                      class="btn btn-success text-white w-100"
                    >
                      提交訂單
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: 'none'
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    getCarts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then(res => {
        this.isLoading = false
        this.cart = res.data.data
      })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼'
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then(res => {
        if (res.data.success) {
          this.$router.push(`/checkout/${res.data.orderId}`)
        }
      })
    }
  },
  created () {
    this.getCarts()
  }
}
</script>
