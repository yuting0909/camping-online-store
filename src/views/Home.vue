<template>
  <main id="home">
    <home-slider-fixed></home-slider-fixed>
    <home-news></home-news>
    <home-category></home-category>
    <home-epaper></home-epaper>
  </main>
</template>

<script>
import HomeSliderFixed from '@/components/HomeSliderFixed.vue'
import HomeCategory from '@/components/HomeCategory.vue'
import HomeNews from '@/components/HomeNews.vue'
import HomeEpaper from '@/components/HomeEpaper.vue'

export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeNews,
    HomeEpaper,
    HomeSliderFixed
  }
}
</script>
