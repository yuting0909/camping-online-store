<template>
  <section class="order-section-1">
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
      title: '訂購資訊',
      imgUrl: '/images/cart/cart-01.jpg'
    }
  }
}
</script>
