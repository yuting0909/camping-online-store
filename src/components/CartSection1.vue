<template>
  <section class="cart-section-1">
    <Banner :title="title" :imgUrl="imgUrl"></Banner>
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  components: { Banner },
  data () {
    return {
      title: '購物清單',
      imgUrl: '/images/cart/cart-01.jpg'
    }
  }
}
</script>
