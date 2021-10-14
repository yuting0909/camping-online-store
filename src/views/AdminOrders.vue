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
  <div class="table-responsive">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">購買時間</th>
          <th width="120">Email</th>
          <th width="200" class="d-none d-sm-table-cell">購買款項</th>
          <th width="100" class="d-none d-sm-table-cell">應付金額</th>
          <th width="100" class="d-none d-sm-table-cell">是否付款</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ $filters.date(order.create_at) }}</td>
          <td v-if="order.user">{{ order.user.email }}</td>
          <td class="d-none d-sm-table-cell">
            <ul class="list-unstyled">
              <li v-for="(product, i) in order.products" :key="i">
                {{ product.product.title }}：{{ product.qty }}
                {{ product.product.unit }}, 小計 {{ product.final_total }} 元
              </li>
            </ul>
          </td>
          <td class="text-right d-none d-sm-table-cell">{{ order.total }}</td>
          <td class="d-none d-sm-table-cell">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${order.id}`"
                v-model="order.is_paid"
                @change="updatePaid(order)"
              />
              <label :for="`paidSwitch${order.id}`">
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(order)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <order-modal :order="temOrder" ref="orderModal"></order-modal>
  <delete-modal
    :item="temOrder"
    ref="deleteModal"
    @del-item="deleteOrder"
  ></delete-modal>
  <pagination :pages="pagination" @update-page="getOrders"></pagination>
</template>

<script>
import OrderModal from '../components/OrderModal.vue'
import DeleteModal from '../components/DeleteModal.vue'
import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      orders: [],
      pagination: {},
      isLoading: false,
      temOrder: {},
      currentPage: 1
    }
  },
  inject: ['pushMessageState'],
  components: { OrderModal, DeleteModal, Pagination },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (page = 1) {
      this.currentPage = page
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.isLoading = false
        if (res.data.success) {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        }
      })
    },
    openModal (item) {
      this.temOrder = { ...item }
      this.$refs.orderModal.showModal()
    },
    openDelModal (item) {
      this.temOrder = { ...item, title: item.id }
      this.$refs.deleteModal.showModal()
    },
    deleteOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.temOrder.id}`
      this.$http.delete(api).then(res => {
        this.pushMessageState(res, '訂單刪除')
        this.getOrders(this.currentPage)
        this.$refs.deleteModal.hideModal()
      })
    },
    updatePaid (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = { is_paid: item.is_paid }
      this.$http.put(api, { data: paid }).then(res => {
        this.pushMessageState(res, '訂單更新')
        this.getOrders(this.currentPage)
      })
    }
  }
}
</script>
