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
    <section class="product-section-1" v-if="product.city">
      <div class="container py-4 border-bottom border-light border-2">
        <div class="row g-0 g-lg-3">
          <div class="col-lg-7 d-flex flex-column">
            <div class="position-relative mb-3">
              <transition-group tag="div" name="transition" class="h-100">
                <div key="0" :class="{ 'h-100': 0 === index }">
                  <img
                    :src="product.imageUrl"
                    alt="產品圖片"
                    class="main-picture"
                    v-show="0 === index"
                  />
                </div>
                <div
                  :class="{ 'h-100': i + 1 === index }"
                  v-for="(img, i) in product.images"
                  :key="i + 1"
                  v-show="i + 1 === index"
                >
                  <img :src="img" alt="產品圖片" class="main-picture" />
                </div>
              </transition-group>
              <div
                class="position-absolute w-100 top-50 start-50 translate-middle"
              >
                <button
                  class="btn btn-sm btn-pre fs-3"
                  @click="setIndex(index - 1)"
                >
                  <i class="bi bi-chevron-left"></i>
                </button>
                <button
                  class="btn btn-sm btn-next fs-3 float-end"
                  @click="setIndex(index + 1)"
                >
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
            <div class="mb-3 d-none d-md-block">
              <a href="#" @click.prevent="setIndex(0)">
                <img
                  :src="product.imageUrl"
                  alt="產品圖片"
                  class="picture me-2"
                />
              </a>
              <a
                href="#"
                v-for="(img, i) in product.images"
                :key="i"
                @click.prevent="setIndex(i + 1)"
              >
                <img :src="img" alt="產品圖片" class="picture me-2" />
              </a>
            </div>
          </div>
          <div class="col-lg-5">
            <div
              class="bg-light p-4 d-flex flex-column align-items-center h-100"
            >
              <h1 class="fs-3 mb-3">{{ product.title }}</h1>
              <div class="flex-grow-1 d-flex flex-column text-muted px-lg-5">
                <p class="mb-2">
                  <i class="bi bi-geo-fill me-2"></i>{{ product.address }}
                </p>
                <p class="mb-2">
                  <i class="bi bi-tags-fill me-2"></i>{{ features }}
                </p>
                <p class="mb-2">
                  <i class="bi bi-chat-right-text-fill me-2"></i>營區簡介
                </p>
                <p class="mb-4 line-break lh-lg">
                  {{ product.description }}
                </p>
                <div class="row g-2 mt-auto mb-3">
                  <div class="col-sm-6 d-grid">
                    <button
                      v-if="!isFavorite"
                      class="btn btn-outline-warning btn-hover-white rounded-pill"
                      @click="updateFavorite(id)"
                    >
                      <span>收藏營地</span>
                    </button>
                    <button
                      v-else
                      class="btn btn-warning rounded-pill btn-hover-white text-white"
                      @click="updateFavorite(id)"
                    >
                      <span>取消收藏</span>
                    </button>
                  </div>
                  <div class="col-sm-6 d-grid">
                    <button
                      class="btn btn-outline-secondary btn-hover-white rounded-pill"
                      @click="scrollToChooseType"
                    >
                      選擇營地
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-section-2">
      <div class="container py-5 px-4">
        <div class="row mb-5">
          <div class="col-lg-2">
            <h2 class="fs-4 fw-bold text-primary mb-3">
              <i class="bi bi-tree-fill text-success me-2"></i>營區須知
            </h2>
          </div>
          <div class="col-lg-10">
            <div class="line-break lh-lg">
              {{ product.content }}
            </div>
          </div>
        </div>
        <div class="row mb-5" ref="types">
          <div class="col-lg-2">
            <h2 class="fs-4 fw-bold text-primary mb-3">
              <i class="bi bi-tree-fill text-success me-2"></i>選擇營地
            </h2>
          </div>
          <div class="col-lg-10">
            <ul class="list-unstyled">
              <li
                v-for="(type, i) in types"
                :key="i"
                class="card rounded-3 overflow-hidden mb-3 border-0 bg-light"
              >
                <div class="row g-0">
                  <div class="col-md-5">
                    <img
                      class="type-pic"
                      :src="type.images[0]"
                      alt="營地圖片"
                    />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body h-100 d-flex flex-column">
                      <h3
                        class="fs-5 mb-0 d-flex justify-content-between flex-wrap"
                      >
                        <span class="fw-bold mb-2">{{ type.title }}</span
                        ><span class="float-end fs-6 mb-2"
                          >NT {{ $filters.currency(type.price) }} /
                          {{ type.unit }}</span
                        >
                      </h3>
                      <ul class="list-unstyled text-muted mb-3">
                        <li
                          v-for="(content, i) in $filters.stringToArray(
                            type.content
                          )"
                          :key="i"
                          v-show="i < 3"
                        >
                          <i class="bi bi-check-lg me-2"></i>{{ content }}
                        </li>
                      </ul>
                      <a
                        v-if="$filters.stringToArray(type.content).length > 3"
                        href="#"
                        class="text-decoration-none text-secondary fs-7"
                        @click.prevent="openContentModal(type)"
                        ><i class="bi bi-exclamation-circle me-2"></i
                        >查看更多說明</a
                      >
                      <content-modal
                        ref="contentModal"
                        :type="tempType"
                      ></content-modal>
                      <div class="row g-2 mt-auto">
                        <div class="col-6 mb-2">
                          <input
                            type="number"
                            min="1"
                            class="form-control"
                            placeholder="請輸入數量"
                            v-model="typeNum[type.id]"
                          />
                        </div>
                        <div class="col-6">
                          <button
                            class="btn btn-primary w-100"
                            @click="addToCart(type.id)"
                          >
                            預定營地
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-2">
            <h2 class="fs-4 fw-bold text-primary mb-3">
              <i class="bi bi-tree-fill text-success me-2"></i>注意事項
            </h2>
          </div>
          <div class="col-lg-10">
            <div class="line-break lh-lg">
              {{ product.notice }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-section-3 bg-light">
      <similars-swiper :similars="products"></similars-swiper>
    </section>
  </main>
</template>

<script>
import ContentModal from '../components/ContentModal.vue'
import SimilarsSwiper from '@/components/SimilarsSwiper.vue'
import emitter from '../methods/emitter'

export default {
  components: {
    ContentModal,
    SimilarsSwiper
  },
  data () {
    return {
      product: {},
      features: '',
      types: [],
      id: '',
      products: [],
      isLoading: false,
      isFavorite: false,
      index: 0,
      typeNum: {},
      tempType: {},
      cart: []
    }
  },
  watch: {
    index (n, o) {
      if (n > this.product.images.length) {
        this.index = 0
      } else if (n < 0) {
        this.index = this.product.images.length
      }
    },
    types () {
      this.typeNum = this.types.reduce((acc, cur) => {
        acc[cur.id] = ''
        return acc
      }, {})
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
        this.defineIsFavorite()
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
        const index = this.products.indexOf(
          this.products.find(product => product.id === this.id)
        )
        this.products.splice(index, 1)
        // filter by region
        this.products = this.products.filter(
          product => product.region === this.product.region
        )
      })
    },
    defineIsFavorite () {
      const list = JSON.parse(localStorage.getItem('favoriteProducts')) || []
      if (list.length) {
        this.isFavorite = list.some(product => product.id === this.product.id)
      }
    },
    updateFavorite (id) {
      this.isFavorite = !this.isFavorite
      const list = JSON.parse(localStorage.getItem('favoriteProducts')) || []
      if (list.some(product => product.id === id)) {
        const productIndex = list.findIndex(product => product.id === id)
        list.splice(productIndex, 1)
        emitter.emit('send-message', {
          success: false,
          content: '已從收藏中移除!'
        })
      } else {
        list.push(this.product)
        emitter.emit('send-message', {
          success: true,
          content: '已加入收藏!'
        })
      }
      localStorage.setItem('favoriteProducts', JSON.stringify(list))
    },
    setIndex (index) {
      this.index = index
    },
    scrollToChooseType () {
      this.$refs.types.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    },
    addToCart (id) {
      if (!this.typeNum[id]) {
        emitter.emit('send-message', {
          success: false,
          content: '請填寫正確數量!'
        })
        return
      }
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: this.typeNum[id]
      }
      this.$http.post(url, { data: cart }).then(res => {
        this.getCart()
        this.isLoading = false
        emitter.emit('send-message', {
          success: true,
          content: '成功加入購物車!'
        })
      })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then(res => {
        this.cart = res.data.data.carts
        this.sendCart()
      })
    },
    sendCart () {
      emitter.emit('sendCart', this.cart)
    },
    openContentModal (type) {
      this.tempType = type
      this.$refs.contentModal.showModal()
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '../style/custom/_variables';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

.product-intro {
  .container {
    @include media-breakpoint-up(xxl) {
      max-width: 1200px;
    }
  }
}
.main-picture {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 250px;
  @include media-breakpoint-up(sm) {
    max-height: 400px;
  }
}
.btn-pre,
.btn-next {
  color: $gray-400;
  background-color: transparent;
  &:hover {
    color: $white;
  }
  &:focus {
    box-shadow: none;
  }
}
.picture {
  object-fit: cover;
  opacity: 0.5;
  width: 80px;
  height: 60px;
}
.line-break {
  white-space: pre-wrap;
}
.btn-hover-white {
  &:hover {
    color: $white;
  }
}
.type-pic {
  object-fit: cover;
  width: 100%;
  height: 200px;
  @include media-breakpoint-up(sm) {
    height: 250px;
  }
}
</style>
