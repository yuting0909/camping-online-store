<template>
  <main id="user-checkout">
    <checkout-section-1></checkout-section-1>
    <checkout-section-2></checkout-section-2>
  </main>
</template>

<script>
import CheckoutSection1 from '@/components/CheckoutSection1.vue'
import CheckoutSection2 from '@/components/CheckoutSection2.vue'

export default {
  components: {
    CheckoutSection1,
    CheckoutSection2
  }
}
</script>
