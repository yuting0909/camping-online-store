<template>
  <Header></Header>
  <main id="user-products">
    <products-section-1></products-section-1>
    <products-section-2></products-section-2>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import ProductsSection1 from '@/components/ProductsSection1.vue'
import ProductsSection2 from '@/components/ProductsSection2.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    ProductsSection1,
    ProductsSection2,
    Footer
  }
}
</script>
