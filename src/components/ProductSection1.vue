<template>
  <div class="product-section-1">
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
          <div class="bg-light p-4 d-flex flex-column align-items-center h-100">
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
  </div>
</template>

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
</style>

<script>
export default {
  data () {
    return {
      isFavorite: false,
      index: 0
    }
  },
  props: ['id', 'product', 'features'],
  watch: {
    index (n, o) {
      if (n > this.product.images.length) {
        this.index = 0
      } else if (n < 0) {
        this.index = this.product.images.length
      }
    }
  },
  inject: ['emitter'],
  methods: {
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
      } else {
        list.push(this.product)
      }
      localStorage.setItem('favoriteProducts', JSON.stringify(list))
      if (this.isFavorite) {
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
    },
    setIndex (index) {
      this.index = index
    },
    scrollToChooseType () {
      this.emitter.emit('scrollToChooseType')
    }
  },
  created () {
    this.defineIsFavorite()
  }
}
</script>
