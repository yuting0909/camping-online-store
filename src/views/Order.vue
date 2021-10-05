<template>
  <main id="user-order">
    <order-section-1></order-section-1>
    <order-section-2></order-section-2>
  </main>
</template>

<script>
import OrderSection1 from '@/components/OrderSection1.vue'
import OrderSection2 from '@/components/OrderSection2.vue'

export default {
  components: {
    OrderSection1,
    OrderSection2
  }
}
</script>
