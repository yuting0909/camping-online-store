<template>
  <Header></Header>
  <main id="user-products">
    <product-section-1></product-section-1>
    <product-section-2></product-section-2>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import ProductSection1 from '@/components/ProductSection1.vue'
import ProductSection2 from '@/components/ProductSection2.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    ProductSection1,
    ProductSection2,
    Footer
  }
}
</script>
