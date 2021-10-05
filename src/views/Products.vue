<template>
  <main id="user-products">
    <products-section-1></products-section-1>
    <products-section-2></products-section-2>
  </main>
</template>

<script>
import ProductsSection1 from '@/components/ProductsSection1.vue'
import ProductsSection2 from '@/components/ProductsSection2.vue'

export default {
  components: {
    ProductsSection1,
    ProductsSection2
  }
}
</script>
