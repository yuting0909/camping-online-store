<template>
  <div class="container py-4 px-4 px-sm-2">
    <h2 class="fs-4 fw-bold text-primary mb-4">
      <i class="bi bi-tree-fill text-success me-2"></i>你可能也會喜歡
    </h2>
    <swiper
      :slidesPerView="1"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{
        clickable: true
      }"
      :breakpoints="{
        '576': { slidesPerView: 2, spaceBetween: 20 },
        '992': { slidesPerView: 3, spaceBetween: 20 },
        '1200': { slidesPerView: 4, spaceBetween: 20 }
      }"
      class="mySwiper pb-5"
    >
      <swiper-slide v-for="(item, i) in similars" :key="i">
        <product-card :product="item" :favoriteShow="false"></product-card>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])

export default {
  props: ['similars'],
  components: {
    ProductCard,
    Swiper,
    SwiperSlide
  }
}
</script>
