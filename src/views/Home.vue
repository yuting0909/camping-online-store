<template>
  <div class="home">
    <Header></Header>
    <home-slider></home-slider>
    <home-news></home-news>
    <home-category></home-category>
    <home-epaper></home-epaper>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeSlider from '@/components/HomeSlider.vue'
import HomeCategory from '@/components/HomeCategory.vue'
import HomeNews from '@/components/HomeNews.vue'
import HomeEpaper from '@/components/HomeEpaper.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeSlider,
    HomeCategory,
    HomeNews,
    HomeEpaper,
    Footer
  }
}
</script>
