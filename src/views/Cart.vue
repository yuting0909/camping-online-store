<template>
  <main id="user-cart">
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
    <section class="cart-section-1">
      <Banner :title="title" :imgUrl="publicPath + imgUrl"></Banner>
    </section>
    <section class="cart-section-2">
      <div v-if="cart.total" class="container py-5">
        <div class="table-responsive">
          <table class="table border-light">
            <thead class="bg-info text-white">
              <tr>
                <th width="360" class="ps-3 border-0">
                  商品名稱
                </th>
                <th
                  width="180"
                  class="d-none d-sm-table-cell text-center border-0"
                >
                  單價
                </th>
                <th width="200" class="text-center border-0">
                  數量
                  <span class="d-sm-none"> & 金額</span>
                </th>
                <th
                  width="120"
                  class="text-center border-0 d-none d-sm-table-cell"
                >
                  金額
                </th>
                <th width="120" class="text-center border-0">刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in cart.carts" :key="i">
                <td class="border-light">
                  <div class="row">
                    <div class="col-lg-5 d-none d-lg-block">
                      <img
                        class="cart-img"
                        :src="item.product.images[0]"
                        alt="產品圖片"
                      />
                    </div>
                    <div class="col-lg-7">
                      {{ item.product.belong_to }}
                      <br />
                      {{ item.product.title }}
                    </div>
                  </div>
                </td>
                <td
                  class="text-center align-middle border-light d-none d-sm-table-cell"
                >
                  $ {{ $filters.currency(item.product.price) }}
                </td>
                <td class="text-center align-middle border-light">
                  <div
                    class="input-quantity d-flex justify-content-center border m-0"
                  >
                    <button
                      class="btn btn-sm rounded-0"
                      @click="decreaseQty(item)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash text-muted"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </button>
                    <input
                      class="w-50 text-center border-0 border-start border-end"
                      type="text"
                      v-model="item.qty"
                    />
                    <button
                      class="btn btn-sm rounded-0"
                      @click="increaseQty(item)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus text-muted"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </button>
                  </div>
                  <span class="d-block d-sm-none mt-2"
                    >$ {{ $filters.currency(item.total) }}</span
                  >
                </td>
                <td
                  class="text-center align-middle border-light d-none d-sm-table-cell"
                >
                  $ {{ $filters.currency(item.total) }}
                </td>
                <td class="text-center align-middle border-light">
                  <button
                    class="btn btn-sm btn-outline-danger fs-5 btn-hover-white"
                    @click="removeCartItem(item)"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="d-sm-none">
                <td colspan="2" class="text-end">小計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total" class="d-sm-none">
                <td colspan="2" class="text-end text-success">折扣</td>
                <td class="text-end text-success">
                  - {{ $filters.currency(cart.total - cart.final_total) }}
                </td>
              </tr>
              <tr class="d-none d-sm-table-row">
                <td colspan="4" class="text-end">小計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr
                v-if="cart.final_total !== cart.total"
                class="d-none d-sm-table-row"
              >
                <td colspan="4" class="text-end text-success">折扣</td>
                <td class="text-end text-success">
                  - {{ $filters.currency(cart.total - cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="row justify-content-end">
          <div class="col-sm-8 col-lg-6">
            <div class="input-group mb-3 input-group-sm">
              <input
                type="text"
                class="form-control rounded-0"
                v-model="coupon_code"
                placeholder="請輸入優惠碼"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-info rounded-0"
                  type="button"
                  @click="addCouponCode"
                >
                  套用優惠碼
                </button>
              </div>
            </div>
            <div class="mb-3 text-end">
              總金額：
              <span class="text-warning fs-5 fw-bold"
                >NT$ {{ $filters.currency(cart.final_total) }}</span
              >
            </div>
            <div class="row">
              <div class="col-sm-5">
                <a
                  href="#/products"
                  class="w-100 mb-3 btn btn-outline-success rounded-0 px-3"
                  ><i class="bi bi-caret-left-fill"></i> 繼續購物
                </a>
              </div>
              <div class="col-sm-2"></div>
              <div class="col-sm-5">
                <a
                  href="#/order"
                  class="w-100 mb-3 btn btn-success text-white rounded-0 px-3"
                  >前往結帳 <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container py-5">
        <h2 class="fw-bold mb-3">目前還沒有加入商品喔</h2>
        <a href="#/products" class="btn btn-primary"
          >尋找喜歡的露營區 <i class="bi bi-caret-right-fill"></i
        ></a>
      </div>
    </section>
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  components: {
    Banner
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      title: '購物清單',
      imgUrl: 'images/cart/cart-01.jpg',
      cart: {},
      coupon_code: '',
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getCarts (mode) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then(res => {
        this.isLoading = false
        this.cart = res.data.data
        this.sendCart()
        if (mode === 'update') {
          this.emitter.emit('send-message', {
            success: true,
            content: '更新購物車成功!'
          })
        }
        if (mode === 'delete') {
          this.emitter.emit('send-message', {
            success: true,
            content: '已從購物車中移除!'
          })
        }
        if (mode === 'addCoupon') {
          this.emitter.emit('send-message', {
            success: true,
            content: '套用優惠券!'
          })
        }
      })
    },
    increaseQty (item) {
      item.qty++
      this.updateCarts(item)
    },
    decreaseQty (item) {
      item.qty--
      this.updateCarts(item)
    },
    updateCarts (item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then(res => {
        this.getCarts('update')
      })
    },
    removeCartItem (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.delete(url).then(res => {
        this.getCarts('delete')
      })
    },
    sendCart () {
      this.emitter.emit('sendCart', this.cart.carts)
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon }).then(res => {
        console.log(res)
        if (res.data.status) {
          this.getCarts('addCoupon')
        } else {
          this.emitter.emit('send-message', {
            success: false,
            content: res.data.message
          })
        }
      })
    }
  },
  created () {
    this.getCarts()
  }
}
</script>

<style lang="scss">
.cart-img {
  object-fit: cover;
  width: 100%;
  height: 100px;
}
</style>
