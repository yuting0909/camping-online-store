<template>
  <Header></Header>
  <about-section-1></about-section-1>
  <about-section-2></about-section-2>
  <about-section-3></about-section-3>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import AboutSection1 from '@/components/AboutSection1.vue'
import AboutSection2 from '@/components/AboutSection2.vue'
import AboutSection3 from '@/components/AboutSection3.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    AboutSection1,
    AboutSection2,
    AboutSection3,
    Footer
  }
}
</script>
