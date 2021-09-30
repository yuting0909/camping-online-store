<template>
  <div class="product-section-1">
    <div class="container py-5 border-bottom border-light border-4">
      <div class="row g-0 g-lg-3">
        <div class="col-md-7">
          <img
            :src="product.imageUrl"
            alt="產品圖片"
            class="main-picture mb-3"
          />
          <div class="mb-3">
            <a href="#">
              <img
                :src="product.imageUrl"
                alt="產品圖片"
                class="picture me-2"
              />
            </a>
            <a href="#" v-for="(img, i) in product.images" :key="i">
              <img :src="img" alt="產品圖片" class="picture me-2" />
            </a>
          </div>
        </div>
        <div class="col-md-5">
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
                <div class="col-lg-6 d-grid">
                  <button
                    v-if="!isFavorite"
                    class="favorite-btn btn btn-outline-secondary rounded-pill"
                    @click="addToFavorite(product.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      class="bi bi-suit-heart-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                      /></svg
                    ><span>收藏營地</span>
                  </button>
                  <button
                    v-else
                    class="favorite-btn btn btn-secondary rounded-pill text-warning"
                    @click="addToFavorite(product.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      class="bi bi-suit-heart-fill me-2"
                      :class="{ active: isFavorite }"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                      /></svg
                    ><span>取消收藏</span>
                  </button>
                </div>
                <div class="col-lg-6 d-grid">
                  <button class="btn btn-outline-secondary rounded-pill">
                    選擇營地種類
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
  height: 250px;
  @include media-breakpoint-up(sm) {
    height: 400px;
  }
}
.picture {
  object-fit: cover;
  width: 80px;
  height: 80px;
}
.line-break {
  white-space: pre-wrap;
}
.favorite-btn {
  &:hover {
    color: $warning;
  }
  &:hover svg {
    fill: $warning;
  }
  svg {
    fill: $secondary;
    &.active {
      fill: $warning;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      isFavorite: false
    }
  },
  props: ['product', 'features'],
  methods: {
    defineIsFavorite () {
      console.log(this.product.id)
      const list = JSON.parse(localStorage.getItem('favoriteProducts')) || []
      if (list.length) {
        this.isFavorite = list.some(product => product.id === this.product.id)
      }
    },
    addToFavorite (id) {
      console.log(id)
      this.isFavorite = !this.isFavorite
      const list = JSON.parse(localStorage.getItem('favoriteProducts')) || []
      if (list.some(product => product.id === id)) {
        const productIndex = list.findIndex(product => product.id === id)
        list.splice(productIndex, 1)
      } else {
        list.push(this.product)
      }
      localStorage.setItem('favoriteProducts', JSON.stringify(list))
    }
  },
  mounted () {
    this.defineIsFavorite()
  }
}
</script>
