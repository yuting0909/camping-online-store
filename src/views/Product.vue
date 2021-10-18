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
  <main :id="`product-introduction${id}`" class="product-intro pt-5 pt-md-0">
    <product-section-1 v-if="product.city" :id="id" :product="product" :features="features"></product-section-1>
    <product-section-2 :product="product" :types="types"></product-section-2>
    <product-section-3 :similars="products"></product-section-3>
  </main>
</template>

<script>
import ProductSection1 from '@/components/ProductSection1.vue'
import ProductSection2 from '@/components/ProductSection2.vue'
import ProductSection3 from '@/components/ProductSection3.vue'
import emitter from '../methods/emitter'

export default {
  components: {
    ProductSection1,
    ProductSection2,
    ProductSection3
  },
  provide () {
    return {
      emitter
    }
  },
  data () {
    return {
      product: {},
      features: '',
      types: [],
      id: '',
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(url).then(res => {
        this.product = res.data.product
        this.features = res.data.product.features.join('、')
        this.getTypes()
        this.getProducts()
        this.isLoading = false
      })
    },
    getTypes () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then(res => {
        this.types = res.data.products.filter(
          product => product.belong_to === this.product.title
        )
      })
    },
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then(res => {
        // filter by category
        this.products = res.data.products.filter(
          product => product.category === '露營區'
        )
        // remove itself
        const index = this.products.indexOf(this.products.find(product => product.id === this.id))
        this.products.splice(index, 1)
        // filter by region
        this.products = this.products.filter(product => product.region === this.product.region)
      })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
