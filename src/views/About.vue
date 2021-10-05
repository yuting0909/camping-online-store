<template>
  <main id="about">
    <about-section-1></about-section-1>
    <about-section-2></about-section-2>
    <about-section-3></about-section-3>
  </main>
</template>

<script>
import AboutSection1 from '@/components/AboutSection1.vue'
import AboutSection2 from '@/components/AboutSection2.vue'
import AboutSection3 from '@/components/AboutSection3.vue'

export default {
  components: {
    AboutSection1,
    AboutSection2,
    AboutSection3
  }
}
</script>
