<template>
  <div class="banner" :style="{ backgroundImage: `url(${imgUrl})` }">
    <h1 class="text-white ps-4 py-2 pe-1 lh-base s1-animate">
      {{ title }}
    </h1>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '../style/custom/_variables';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

.banner {
  height: 200px;
  object-fit: cover;
  background-size: cover;
  background-position: center 70%;
  position: relative;
  overflow: hidden;
  @include media-breakpoint-up(sm) {
    height: 400px;
  }
  h1 {
    background-color: rgba(41, 41, 41, 0.6);
    position: absolute;
    bottom: 10%;
    left: 60%;
    right: -5px;
  }
}
.s1-animate {
  animation-name: s1-animate;
  animation-duration: 1s;
  animation-direction: normal;
}
@keyframes s1-animate {
  0% {
    opacity: 0;
    transform: translateX(-200%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

<script>
export default {
  props: ['title', 'imgUrl']
}
</script>
