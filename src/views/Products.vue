<template>
  <main id="user-products">
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
    <section class="products-section-1">
      <Banner :title="title" :imgUrl="publicPath + imgUrl"></Banner>
    </section>
    <section class="products-section-2">
      <div class="container pt-3 pt-md-5">
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
                      class="btn-check"
                      :id="region"
                      :value="region"
                      autocomplete="off"
                      v-model="filterRegions"
                    />
                    <label
                      class="btn btn-outline-secondary btn-hover-white rounded-pill fs-7 py-1 px-3 my-1 me-2"
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
                      class="btn-check"
                      :id="feature"
                      :value="feature"
                      autocomplete="off"
                      v-model="filterFeatures"
                    />
                    <label
                      class="btn btn-outline-secondary btn-hover-white rounded-pill fs-7 py-1 px-3 my-1 me-2"
                      :for="feature"
                      ># {{ feature }}</label
                    >
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-lg-none mb-3">
            <button
              class="btn btn-primary w-100 w-sm-fit"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#categoryFilter"
              aria-expanded="false"
              aria-controls="categoryFilter"
            >
              條件篩選<i class="bi bi-search ms-2"></i>
            </button>
            <div class="collapse mt-3" id="categoryFilter">
              <div class="card bg-light p-2 rounded-0 border-0">
                <div class="row g-1 regions mb-2">
                  <div class="d-none d-sm-block col-sm-2 pt-2">
                    <h2 class="fs-7">
                      目的地 <i class="bi bi-caret-right-fill"></i>
                    </h2>
                  </div>
                  <div class="col region-tags">
                    <template v-for="(region, i) in regions" :key="i">
                      <input
                        type="checkbox"
                        class="btn-check"
                        :id="region"
                        :value="region"
                        autocomplete="off"
                        v-model="filterRegions"
                      />
                      <label
                        class="btn btn-outline-secondary btn-hover-white rounded-pill fs-7 py-1 px-3 my-1 me-2"
                        :for="region"
                        ># {{ region }}</label
                      >
                    </template>
                  </div>
                </div>
                <div class="row g-1 features">
                  <div class="d-none d-sm-block col-sm-2 pt-2">
                    <h2 class="fs-7">
                      營區特色 <i class="bi bi-caret-right-fill"></i>
                    </h2>
                  </div>
                  <div class="col region-tags">
                    <template v-for="(feature, i) in features" :key="i">
                      <input
                        type="checkbox"
                        class="btn-check"
                        :id="feature"
                        :value="feature"
                        autocomplete="off"
                        v-model="filterFeatures"
                      />
                      <label
                        class="btn btn-outline-secondary btn-hover-white rounded-pill fs-7 py-1 px-3 my-1 me-2"
                        :for="feature"
                        ># {{ feature }}</label
                      >
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-xl-9">
            <div class="row mb-3">
              <div class="col">
                <form>
                  <div class="input-group">
                    <span class="input-group-text bg-primary text-light"
                      >搜尋營區</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入營區名稱"
                      v-model="keyword"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div v-if="products.length" class="row mb-3">
              <div
                class="col-sm-6 col-lg-6 col-xl-4 mb-3"
                v-for="(item, i) in products"
                :key="i"
              >
                <product-card
                  :product="item"
                  @update-favorite="updateFavorite"
                ></product-card>
              </div>
            </div>
            <div v-else class="pt-3">
              <h3 class="fs-5 fw-bold">沒有符合條件的營地喔</h3>
            </div>
            <Pagination
              :pages="pagination"
              @update-page="getProducts"
            ></Pagination>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ProductCard from '@/components/ProductCard.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Banner,
    ProductCard,
    Pagination
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      title: '尋找營區',
      imgUrl: 'images/products/products-01.jpg',
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
      keyword: '',
      filterRegions: [],
      filterFeatures: [],
      products: [],
      isLoading: false,
      pagination: {
        current_page: 1,
        offset: 9,
        total_pages: 0,
        page_start: 0
      }
    }
  },
  inject: ['emitter'],
  watch: {
    keyword () {
      this.getProducts()
    },
    filterRegions () {
      this.getProducts()
    },
    filterFeatures () {
      this.getProducts()
    }
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then(res => {
        this.products = res.data.products.filter(
          product => product.category === '露營區'
        )
        this.filterProducts()
        this.createPagination(page)
        this.isLoading = false
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
    filterProducts () {
      // filter products by regions
      if (this.filterRegions.length) {
        const filterProducts = []
        this.filterRegions.forEach(region => {
          this.products.forEach(product => {
            if (product.region === region) {
              filterProducts.push(product)
            }
          })
        })
        this.products = filterProducts
      }
      // filter products by features
      if (this.filterFeatures.length) {
        this.filterFeatures.forEach(feature => {
          this.products = this.products.filter(product =>
            product.features.includes(feature)
          )
        })
      }
      // filter products by keyword
      if (this.keyword) {
        this.products = this.products.filter(product =>
          product.title.match(this.keyword)
        )
      }
      this.productsNum = this.products.length
    },
    updateFavorite (isFavorite) {
      if (isFavorite) {
        this.emitter.emit('send-message', {
          success: true,
          content: '已加入收藏!'
        })
      } else {
        this.emitter.emit('send-message', {
          success: false,
          content: '已從收藏中移除!'
        })
      }
    }
  },
  created () {
    if (this.$route.query.feature) {
      this.filterFeatures.push(this.$route.query.feature)
    }
    if (this.$route.query.region) {
      this.filterRegions.push(this.$route.query.region)
    }
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.btn-check:checked + .btn-outline-secondary,
.btn-check:active + .btn-outline-secondary,
.btn-outline-secondary:active,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show {
  color: $white;
}

.btn-hover-white {
  &:hover {
    color: $white;
  }
  &.active {
    color: $white;
  }
}
</style>
