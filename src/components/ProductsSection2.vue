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
  <section class="products-section-2">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-4 col-xl-3 d-none d-lg-block">
          <div class="card rounded-4">
            <div class="card-body py-4">
              <div class="regions pb-4 mb-4 border-bottom">
                <h2 class="fs-4 mb-3">
                  目的地
                </h2>
                <template v-for="(region, i) in regions" :key="i">
                  <input
                    type="checkbox"
                    class="btn-check btn-hover-white"
                    :id="region"
                    :value="region"
                    autocomplete="off"
                    v-model="filter.regions"
                  />
                  <label
                    class="btn btn-outline-secondary rounded-pill fs-7 py-1 px-3 my-1 me-2"
                    :for="region"
                    ># {{ region }}</label
                  >
                </template>
              </div>
              <div class="features">
                <h2 class="fs-4 mb-3">營區特色</h2>
                <template v-for="(feature, i) in features" :key="i">
                  <input
                    type="checkbox"
                    class="btn-check btn-hover-white"
                    :id="feature"
                    :value="feature"
                    autocomplete="off"
                    v-model="filter.features"
                  />
                  <label
                    class="btn btn-outline-secondary rounded-pill fs-7 py-1 px-3 my-1 me-2"
                    :for="feature"
                    ># {{ feature }}</label
                  >
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-xl-9">
          <div class="row">
            <div
              class="col-sm-6 col-md-4 col-lg-6 col-xl-4 mb-3"
              v-for="(item, i) in products"
              :key="i"
            >
              <product-card :product="item"></product-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: { ProductCard },
  data () {
    return {
      regions: ['北部', '中部', '南部', '東部', '離島'],
      features: [
        '免裝備',
        '裝備租借',
        '雨棚',
        '遊戲設施',
        '玩水',
        '高海拔',
        '森林',
        '草原',
        '靠海',
        '近溪流',
        '夜景',
        '雲海'
      ],
      filter: {
        regions: [],
        features: []
      },
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then(res => {
        this.products = res.data.products.filter(
          product => product.category === '露營區'
        )
        console.log('products:', this.products)
        this.isLoading = false
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
