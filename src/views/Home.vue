<template>
  <main id="home">
    <!-- <home-slider></home-slider> -->
    <home-slider-fixed></home-slider-fixed>
    <home-news></home-news>
    <home-category></home-category>
    <home-epaper></home-epaper>
  </main>
</template>

<script>
// @ is an alias to /src
// import HomeSlider from '@/components/HomeSlider.vue'
import HomeSliderFixed from '@/components/HomeSliderFixed.vue'
import HomeCategory from '@/components/HomeCategory.vue'
import HomeNews from '@/components/HomeNews.vue'
import HomeEpaper from '@/components/HomeEpaper.vue'

export default {
  name: 'Home',
  components: {
    // HomeSlider,
    HomeCategory,
    HomeNews,
    HomeEpaper,
    HomeSliderFixed
  }
}
</script>
