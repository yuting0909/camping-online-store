<template>
  <main id="user-cart">
    <cart-section-1></cart-section-1>
    <cart-section-2></cart-section-2>
  </main>
</template>

<script>
import CartSection1 from '@/components/CartSection1.vue'
import CartSection2 from '@/components/CartSection2.vue'

export default {
  components: {
    CartSection1,
    CartSection2
  }
}
</script>
