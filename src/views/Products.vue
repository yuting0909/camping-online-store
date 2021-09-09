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
  <div class="text-end mt-4">
    <router-link to="/admin/create-product" class="btn btn-primary"
      >建立營區</router-link
    >
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="80">地區</th>
        <th width="80">縣市</th>
        <th width="120">營區名稱</th>
        <th width="160">營區特色</th>
        <th width="120">最低售價</th>
        <th width="120">是否啟用</th>
        <th width="160">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.region }}</td>
        <td>{{ item.city }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.features.join('、') }}</td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="getProduct(item.id)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <delete-modal
    :item="temProduct"
    ref="deleteModal"
    @del-item="deleteProduct"
  ></delete-modal>
</template>

<script>
import DeleteModal from '../components/DeleteModal.vue'

export default {
  data () {
    return {
      products: [],
      types: [],
      temProduct: {},
      temTypes: [],
      isLoading: false
    }
  },
  inject: ['pushMessageState'],
  components: { DeleteModal },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.isLoading = false
        if (res.data.success) {
          this.products = res.data.products.filter(
            product => product.category === '露營區'
          )
          this.types = res.data.products.filter(
            product => product.category === '營地種類'
          )
        }
      })
    },
    getProduct (id) {
      this.$router.push(`/admin/products/${id}`)
    },
    openDelModal (item) {
      this.temProduct = { ...item }
      this.temTypes = this.types.filter(type => type.belong_to === item.title)
      this.$refs.deleteModal.showModal()
    },
    deleteProduct () {
      this.$refs.deleteModal.hideModal()
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.temProduct.id}`
      this.isLoading = true
      this.$http.delete(api).then(res => {
        this.pushMessageState(res, '營區刪除')
        this.isLoading = false
        this.deleteTypes()
      }).then(() => {
        this.getProducts()
      })
    },
    deleteTypes () {
      for (let i = 0; i < this.temTypes.length; i++) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.temTypes[i].id}`
        this.$http.delete(api).then(res => {})
      }
    }
  }
}
</script>
