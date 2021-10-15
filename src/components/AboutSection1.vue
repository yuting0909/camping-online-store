<template>
  <section class="about-section-1">
    <Banner :title="title" :imgUrl="publicPath + imgUrl"></Banner>
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  components: { Banner },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      title: '遠離塵囂。享受生活',
      imgUrl: '/images/about/about-01.jpg'
    }
  }
}
</script>
