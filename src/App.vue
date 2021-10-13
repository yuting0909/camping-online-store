<template>
  <flash-message></flash-message>
  <Header v-show="$route.meta.show"></Header>
  <router-view />
  <Footer v-show="$route.meta.show"></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FlashMessage from '@/components/FlashMessage.vue'
import emitter from '@/methods/emitter.js'

export default {
  components: { Header, Footer, FlashMessage },
  provide () {
    return {
      emitter
    }
  }
}
</script>
