<template>
  <section class="order-section-1">
    <Banner :title="title" :imgUrl="imgUrl"></Banner>
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  components: { Banner },
  data () {
    return {
      title: '訂購資訊',
      imgUrl: '/images/cart/cart-01.jpg'
    }
  }
}
</script>
