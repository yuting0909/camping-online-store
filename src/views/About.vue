<template>
  <main id="about">
    <section class="about-section-1">
      <Banner :title="title" :imgUrl="publicPath + imgUrl"></Banner>
    </section>
    <section class="about-section-2">
      <div class="container">
        <div
          class="a-image a-image-1"
          :style="{
            backgroundImage:
              'url(' + publicPath + 'images/about/about-02.jpg' + ')'
          }"
        ></div>
        <div
          class="a-image a-image-2"
          :style="{
            backgroundImage:
              'url(' + publicPath + 'images/about/about-03.jpg' + ')'
          }"
        ></div>
        <div class="a-content-1 d-flex content-1-slide-in">
          <div
            class="container-1 d-flex flex-column justify-content-center p-3 lh-lg"
          >
            <h2 class="mb-3">露營，無藥可治的癮</h2>
            <div class="under-line bg-secondary mb-3"></div>
            <p>
              因為喜愛大自然，所以嚮往偶爾能離開喧囂的城市，來到景色優美的戶外露營，感受蒼穹之下與星子為伴的恬然，享受山林的靜謐和芬多精。無論是一個人在山林間思考，或與家人朋友圍著營火談心夜話，露營能讓人以不同方式、不同風格得到快樂。感到煩悶的時刻，來場露營，投入大自然的懷抱，或許是最好的療癒。
            </p>
          </div>
        </div>
        <div
          class="a-content-2 d-flex slide-in"
          :class="{ active: slideState.aContent2 }"
          ref="aContent2"
        >
          <div
            class="container-2 d-flex flex-column justify-content-center ps-3"
          >
            <h2 class="fs-3 lh-lg">露營是親近自然的途徑、壓力的隔離</h2>
          </div>
        </div>
        <div
          class="a-content-3 d-flex slide-in"
          :class="{ active: slideState.aContent3 }"
          ref="aContent3"
        >
          <div
            class="container-3 d-flex flex-column justify-content-center p-4 lh-lg"
          >
            <h2 class="mb-3">認識台灣的美</h2>
            <div class="under-line bg-secondary mb-3"></div>
            <p>
              台灣環境生態多樣性十分豐富，因此無論是高山、海濱、森林、溪谷等，都是大家可以體驗的露營文化。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="about-section-3 px-3 px-lg-5 py-5"
      :style="{
        backgroundImage:
          'url(' + publicPath + 'images/about/about-bg.jpeg' + ')'
      }"
    >
      <div
        class="a-content-4 mx-auto pt-5 pb-3 px-3 px-lg-5 slide-in"
        :class="{ active: slideState.aContent4 }"
        ref="aContent4"
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
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Banner
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      title: '遠離塵囂。享受生活',
      imgUrl: 'images/about/about-01.jpg',
      slideState: {
        aContent2: false,
        aContent3: false,
        aContent4: false
      }
    }
  },
  methods: {
    aContent2SlideIn () {
      const sliderContent = this.$refs.aContent2
      const slideInAt = window.scrollY + window.innerHeight
      const contentBottom =
        sliderContent.offsetTop + sliderContent.offsetHeight / 2
      if (slideInAt > contentBottom) {
        this.slideState.aContent2 = true
      }
    },
    aContent3SlideIn () {
      const sliderContent = this.$refs.aContent3
      const slideInAt = window.scrollY + window.innerHeight
      const contentBottom =
        sliderContent.offsetTop + sliderContent.offsetHeight / 2
      if (slideInAt > contentBottom) {
        this.slideState.aContent3 = true
      }
    },
    aContent4SlideIn () {
      const sliderContent = this.$refs.aContent4
      const slideInAt = window.scrollY + window.innerHeight
      const contentBottom =
        sliderContent.offsetTop + sliderContent.offsetHeight / 2
      if (slideInAt > contentBottom) {
        this.slideState.aContent4 = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.aContent2SlideIn)
    window.addEventListener('scroll', this.aContent3SlideIn)
    window.addEventListener('scroll', this.aContent4SlideIn)
  },
  unmounted () {
    window.removeEventListener('scroll', this.aContent2SlideIn)
    window.removeEventListener('scroll', this.aContent3SlideIn)
    window.removeEventListener('scroll', this.aContent4SlideIn)
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '../style/custom/_variables';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

.about-section-2 .container {
  @include media-breakpoint-up(xxl) {
    max-width: 1200px;
  }
}
.a-image {
  object-fit: cover;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 20px 0 rgb(70, 70, 65);
}
.under-line {
  width: 64px;
  height: 4px;
}
.about-section-2 {
  overflow-x: hidden;
  .a-image-1 {
    width: 500px;
    height: 585px;
    margin: 60px auto 0 0;
    background-position: center bottom;
    @include media-breakpoint-down(xl) {
      width: 400px;
    }
    @include media-breakpoint-down(lg) {
      width: 320px;
      height: 596px;
      margin-top: 54px;
    }
    @include media-breakpoint-down(md) {
      width: 350px;
      height: 395px;
      margin-top: 484px;
    }
    @include media-breakpoint-down(sm) {
      width: 100%;
      height: 350px;
      margin-top: 500px;
    }
  }
  .a-image-2 {
    width: 650px;
    height: 405px;
    margin: -45px 207px 0 auto;
    @include media-breakpoint-down(xl) {
      width: 500px;
      height: 345px;
      margin-right: 227px;
    }
    @include media-breakpoint-down(lg) {
      width: 465px;
      height: 364px;
      margin-right: 25px;
    }
    @include media-breakpoint-down(md) {
      width: 320px;
      height: 465px;
      margin-top: -25px;
      margin-right: auto;
      margin-left: 175px;
    }
    @include media-breakpoint-down(sm) {
      width: 85%;
      height: 385px;
      margin-top: -25px;
      margin-right: 32px;
      margin-left: auto;
    }
  }
}
.a-content-1 {
  width: 580px;
  min-height: 540px;
  margin: -946px 0 0 auto;
  @include media-breakpoint-down(xl) {
    width: 500px;
    min-height: 540px;
    margin-top: -886px;
  }
  @include media-breakpoint-down(lg) {
    width: 340px;
    min-height: 550px;
    margin-top: -915px;
  }
  @include media-breakpoint-down(md) {
    width: 100%;
    min-height: 400px;
    margin-top: -1280px;
  }
  @include media-breakpoint-down(sm) {
    min-height: 500px;
    margin-top: -1210px;
  }
}
.a-content-2 {
  width: 258px;
  min-height: 360px;
  margin: 45px auto 0 0;
  @include media-breakpoint-down(xl) {
    width: 200px;
    min-height: 366px;
    margin-top: 59px;
  }
  @include media-breakpoint-down(lg) {
    width: 180px;
    min-height: 348px;
    margin-top: 30px;
  }
  @include media-breakpoint-down(md) {
    width: 165px;
    min-height: 200px;
    margin-top: 520px;
  }
  @include media-breakpoint-down(sm) {
    width: 90%;
    min-height: auto;
    margin-right: auto;
    margin-left: auto;
    margin-top: 765px;
    padding: 0;
  }
}
.a-content-3 {
  width: 345px;
  min-height: 253px;
  margin: -327px 0 95px auto;
  background-color: rgba(255, 253, 253, 0.8);
  @include media-breakpoint-down(xl) {
    width: 320px;
    min-height: 230px;
    margin-top: -230px;
    margin-bottom: 54px;
  }
  @include media-breakpoint-down(lg) {
    width: 480px;
    min-height: 230px;
    margin-top: -45px;
    margin-left: 35px;
  }
  @include media-breakpoint-down(md) {
    width: 326px;
    min-height: 280px;
    margin-top: 110px;
    margin-bottom: 100px;
    margin-left: 0px;
  }
  @include media-breakpoint-down(sm) {
    width: 90%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
}
.about-section-3 {
  object-fit: cover;
  background-size: cover;
  background-position: center 40%;
  .a-content-4 {
    transform: translate(0, 100px);
    max-width: 1000px;
    background-color: rgba(255, 253, 253, 0.4);
  }
}
.content-1-slide-in {
  animation-name: content-1-slide-in;
  animation-duration: 1s;
  animation-direction: normal;
}
@keyframes content-1-slide-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.a-content-2.slide-in {
  transform: translateX(-50%) scale(0.95);
}
.a-content-3.slide-in {
  transform: translateX(50%) scale(0.95);
}
.a-content-4.slide-in {
  transform: translateY(100%) scale(0.95);
}
.slide-in {
  opacity: 0;
  transition: all 0.5s;
  &.active {
    opacity: 1;
    transform: translateX(0%) scale(1);
  }
}
</style>
