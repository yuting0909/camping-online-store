<template>
  <section class="about-section-1">
    <h1 class="text-white ps-4 py-2 pe-1 lh-base s1-animate">
      遠離塵囂。享受生活
    </h1>
  </section>
</template>

<style lang="scss">
.about-section-1 {
  height: 400px;
  background-image: url('../assets/about-1.jpg');
  object-fit: cover;
  background-size: cover;
  background-position: center;
  position: relative;
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
