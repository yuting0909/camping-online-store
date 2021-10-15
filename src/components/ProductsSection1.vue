<template>
  <section class="products-section-1">
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
      title: '尋找營區',
      imgUrl: '/images/products/products-01.jpg'
    }
  }
}
</script>
