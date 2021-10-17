<template>
  <section class="cart-section-1">
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
      title: '購物清單',
      imgUrl: 'images/cart/cart-01.jpg'
    }
  }
}
</script>
