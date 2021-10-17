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
  <section class="favorite-section-2">
    <div class="container pt-3 pt-md-5 px-4 px-sm-0">
      <div v-if="favorite.length" class="row mb-3">
        <h3 class="fs-6 mb-3">搜尋結果：{{ favorite.length }}個</h3>
        <div
          class="col-sm-6 col-lg-4 col-xl-3 mb-3"
          v-for="(item, i) in favorite"
          :key="i"
        >
          <product-card
            :product="item" @update-favorite="updateFavorite"
          ></product-card>
        </div>
      </div>
      <div v-else class="row mb-3">
        <h3 class="fs-5 fw-bold">沒有收藏的營地喔</h3>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  data () {
    return {
      favorite: [],
      isLoading: false,
      pagination: {
        current_page: 1,
        offset: 9,
        total_pages: 0,
        page_start: 0
      }
    }
  },
  components: { ProductCard },
  inject: ['emitter'],
  methods: {
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favoriteProducts')) || []
    },
    updateFavorite (isFavorite) {
      this.getFavorite()
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
    this.getFavorite()
  }
}
</script>
