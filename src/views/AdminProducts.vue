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
  <div class="table-responsive">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">地區 / 縣市</th>
          <th width="120">營區名稱</th>
          <th width="200" class="d-none d-sm-table-cell">營區特色</th>
          <th width="120">是否啟用</th>
          <th width="160">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.region }} / {{ item.city }}</td>
          <td>{{ item.title }}</td>
          <td v-if="item.features" class="d-none d-sm-table-cell">
            {{ item.features.join('、') }}
          </td>
          <td v-else>無</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="getProduct(item.id)"
              >
                編輯
              </button>
              <button
                type="button"
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
  </div>
  <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
  <delete-modal
    :item="temProduct"
    ref="deleteModal"
    @del-item="deleteProduct"
  ></delete-modal>
</template>

<script>
import DeleteModal from '../components/DeleteModal.vue'
import promiseMixin from '../mixins/promiseMixin'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      products: [],
      types: [],
      temProduct: {},
      temTypes: [],
      isLoading: false,
      pagination: {
        current_page: 1,
        offset: 10,
        total_pages: 0,
        page_start: 0
      }
    }
  },
  inject: ['pushMessageState'],
  components: { DeleteModal, Pagination },
  created () {
    this.getProducts()
  },
  mixins: [promiseMixin],
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.isLoading = true
      this.$http.get(api).then(res => {
        if (res.data.success) {
          this.products = Object.values(res.data.products).filter(
            product => product.category === '露營區'
          )
          this.types = Object.values(res.data.products).filter(
            product => product.category === '營地種類'
          )
          this.createPagination(page)
          this.isLoading = false
        }
      })
    },
    createPagination (currentPage) {
      this.pagination.current_page = currentPage
      this.pagination.page_start =
        (this.pagination.current_page - 1) * this.pagination.offset
      this.pagination.total_pages = Math.ceil(
        this.products.length / this.pagination.offset
      )
      this.products = this.products.slice(
        this.pagination.page_start,
        this.pagination.page_start + this.pagination.offset
      )
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
      this.isLoading = true
      const deleteTemTypesPromise = this.temTypes.map(type =>
        this.deletePromise(type)
      )
      this.deletePromise(this.temProduct)
        .then(res => {
          this.pushMessageState(res, '營區刪除')
          return Promise.all(deleteTemTypesPromise)
        })
        .then(res => {
          return this.getProducts()
        })
    }
  }
}
</script>
