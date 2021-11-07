<template>
  <main id="user-favorite">
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
    <section class="favorite-section-1">
      <Banner :title="title" :imgUrl="publicPath + imgUrl"></Banner>
    </section>
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
              :product="item"
              @update-favorite="updateFavorite"
            ></product-card>
          </div>
        </div>
        <div v-else class="row mb-3">
          <h3 class="fs-5 fw-bold">沒有收藏的營地喔</h3>
        </div>
      </div>
    </section>
    <!-- <favorite-section-1></favorite-section-1>
    <favorite-section-2></favorite-section-2> -->
  </main>
</template>

<script>
// import FavoriteSection1 from '@/components/FavoriteSection1.vue'
// import FavoriteSection2 from '@/components/FavoriteSection2.vue'
import Banner from '@/components/Banner.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    // FavoriteSection1,
    // FavoriteSection2,
    Banner,
    ProductCard
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      title: '收藏的營區',
      imgUrl: 'images/products/products-01.jpg',
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
