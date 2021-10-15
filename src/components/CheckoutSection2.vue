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
  <section class="checkout-section-1">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-6 m-auto">
          <div class="card rounded-0">
            <div class="card-header bg-info text-white rounded-0">
              <h2 class="fs-4 my-1">訂購資訊</h2>
            </div>
            <div class="card-body px-sm-4">
              <table class="table align-middle">
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.qty }} {{ item.product.unit }}</td>
                    <td class="text-end">
                      NT$ {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-end">總計</td>
                    <td class="text-end">
                      NT$ {{ $filters.currency(order.total) }}
                    </td>
                  </tr>
                </tfoot>
              </table>

              <table class="table">
                <tbody>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span v-if="!order.is_paid">尚未付款</span>
                      <span v-else class="text-success">付款完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-end" v-if="order.is_paid === false">
                <button class="btn btn-danger" @click="payOrder">確認付款去</button>
              </div>
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
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.order = res.data.order
          this.isLoading = false
        }
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          this.getOrder()
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
