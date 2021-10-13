<template>
  <section class="slider vw-100">
    <div class="slider-container position-relative overflow-hidden">
      <div
        class="slides h-100"
        :style="{
          width: `${carousels.length * 100}%`,
          marginLeft: `${-index * 100}%`
        }"
      >
        <div
          v-for="(carousel, i) in carousels"
          :key="i"
          class="slide-item h-100"
          :style="{ backgroundImage: `url(${carousel.imgUrl})` }"
        >
          <div class="slide-caption py-3 px-5">
            <h1>{{ carousel.title }}</h1>
            <p class="text-center">{{ carousel.text }}</p>
          </div>
        </div>
      </div>

      <div class="dots position-absolute">
        <button
          v-for="(carousel, i) in carousels"
          :key="i"
          :class="{ active: index === i }"
          @click="index = i"
        ></button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.slider-container {
  width: 100%;
  height: 500px;
}
.slides {
  transition: 0.5s;
}
.slide-item {
  width: 100vw;
  background-size: cover;
  background-position: 50% 70%;
  float: left;
  position: relative;
}
.slide-caption {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 99;
  color: #fff;
  background-color: rgba(39, 37, 37, 0.445);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dots {
  right: 0;
  bottom: 8px;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 100;
  button {
    display: block;
    margin-right: 8px;
    margin-left: 8px;
    width: 16px;
    height: 16px;
    background: rgba(#fff, 0.5);
    border: 2px solid rgba(#fff, 0.5);
    border-radius: 50%;
    transition: 0.3s;
    &:hover,
    &.active {
      background: #fff;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      carousels: [
        {
          title: '森呼吸',
          text: '在森林浴中吸取樹木產生的芬多精，夜晚與杉木相伴共眠',
          imgUrl: '/images/home/home-slider-01.jpg'
        },
        {
          title: '團聚好時光',
          text:
            '假期就是要一家人團聚、或是找好朋友出遊，烤肉、聊天、小酌幾杯，享受悠閒的歡樂時光',
          imgUrl: '/images/home/home-slider-02.jpg'
        },
        {
          title: '懶人露營',
          text:
            '免裝備、免自備炊具，更不用自己親手搭帳，就能體驗野外生活的悠閒愜意',
          imgUrl: '/images/home/home-slider-03.jpg'

        }
      ],
      index: 0,
      timer: null
    }
  },
  methods: {
    autoPlay () {
      if (this.timer) {
        return
      }
      this.timer = setInterval(() => {
        this.index = (this.index + 1) % this.carousels.length
      }, 3000)
    },
    autoStop () {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  mounted () {
    this.autoPlay()
  },
  unmounted () {
    this.autoStop()
  }
}
</script>
