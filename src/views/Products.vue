<template>
  <div class="text-end mt-3">
    <button class="btn btn-secondary" type="button" @click="$refs.productModal.showModal()">新增商品</button>
  </div>
  <table class="table mt-3">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{item.catogory}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">
          200
        </td>
        <td class="text-right">
          100
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <product-modal ref="productModal"/>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  components: {
    ProductModal
  },
  created () {
    this.gerProducts()
  },
  methods: {
    gerProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api).then(res => {
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    }
  }
}
</script>
