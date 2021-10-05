<template>
  <Header v-show="$route.meta.show"></Header>
  <router-view />
  <Footer v-show="$route.meta.show"></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>
