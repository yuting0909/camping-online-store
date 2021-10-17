<template>
  <main id="user-favorite">
    <favorite-section-1></favorite-section-1>
    <favorite-section-2></favorite-section-2>
  </main>
</template>

<script>
import FavoriteSection1 from '@/components/FavoriteSection1.vue'
import FavoriteSection2 from '@/components/FavoriteSection2.vue'

export default {
  components: {
    FavoriteSection1,
    FavoriteSection2
  }
}
</script>
