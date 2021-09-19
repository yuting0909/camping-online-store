<template>
  <section class="about-section-3 px-5 pt-5">
    <div
      class="a-3-container mx-auto py-3 px-5 slide-in"
      :class="{ active: slide_in }"
      ref="sliderContent"
    >
      <h2
        class="mx-auto w-fit border-bottom border-secondary border-4 pb-3 mb-3"
      >
        經營理念
      </h2>
      <p class="lh-lg">
        露營在這幾年快速成長成全民熱衷的活動之一，上百座營地如雨後春筍湧現，該怎麼「露」才能兼顧安全與樂趣？icamping
        精選全台各地的優質營地，提供專業的諮詢服務，讓想露營的你可以依據需求快速找到合適的營地，期待讓更多人感受到露營的魅力，進而愛護、保護美麗的大自然。
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.about-section-3 {
  height: 500px;
  background-image: url('../assets/about-bg.jpeg');
  object-fit: cover;
  background-size: cover;
  background-position: center 40%;
  .a-3-container {
    transform: translate(0, 100px);
    max-width: 1000px;
    background-color: rgba(255, 253, 253, 0.4);
  }
}
.slide-in {
  opacity: 0;
  transform: translateY(100%) scale(0.95);
  transition: all 0.5s;
  &.active {
    opacity: 1;
    transform: translateY(0%) scale(1);
  }
}
</style>

<script>
export default {
  data () {
    return {
      slide_in: false
    }
  },
  methods: {
    slideIn () {
      const sliderContent = this.$refs.sliderContent
      const slideInAt = window.scrollY + window.innerHeight
      const contentBottom =
        sliderContent.offsetTop + sliderContent.offsetHeight
      if (slideInAt > contentBottom) {
        this.slide_in = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.slideIn)
  }
}
</script>
