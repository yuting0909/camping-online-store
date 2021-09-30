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
  <Header></Header>
  <main :id="`product-introduction${id}`" class="product-intro pt-5 pt-md-0">
    <product-section-1 :product="product" :features="features"></product-section-1>
    <div class="product-section-2">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-3">
            <h2 class="fs-4 mb-3"><i class="bi bi-tree-fill text-success me-2"></i>選擇營地</h2>
          </div>
          <div class="col-md-9">
            <ul class="list-unstyled">
              <li v-for="(type, i) in types" :key="i" class="card rounded-3 overflow-hidden mb-3 border-0 bg-light">
                <div class="row g-0">
                  <div class="col-5">
                    <img class="type-pic" :src="type.images[0]" alt="營地圖片">
                  </div>
                  <div class="col-7"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">
.type-pic {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProductSection1 from '@/components/ProductSection1.vue'

export default {
  components: {
    Header,
    Footer,
    ProductSection1
  },
  data () {
    return {
      product: {},
      features: '',
      types: [],
      id: '',
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
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
