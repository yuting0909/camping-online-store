<template>
  <div class="slider vw-100">
    <div
      class="slider-container position-relative w-100"
      @mouseenter.stop="stopPlay"
      @mouseleave.stop="autoPlay"
    >
      <transition-group
        tag="div"
        class="slides w-100 h-100 overflow-hidden position-relative"
        :name="transitionName"
      >
        <div
          class="slide w-100 h-100 position-absolute"
          v-for="(carousel, i) in carousels"
          :key="i"
          v-show="index === i"
          :style="{ backgroundImage: `url(${carousel.imgUrl})` }"
        >
          <div class="slide-caption py-3 px-5">
            <h1>{{ carousel.title }}</h1>
            <p class="text-center">{{ carousel.text }}</p>
            <a href="" class="btn btn-outline-light rounded-0 px-4">查看更多</a>
          </div>
        </div>
      </transition-group>
      <div class="dots position-absolute">
        <button
          v-for="(carousel, i) in carousels"
          :key="i"
          :class="{ active: index === i }"
          @click="setIndex(i)"
        ></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slider-container {
  height: 500px;
}
.slide {
  background-size: cover;
  background-position: 50% 70%;
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
  bottom: 10px;
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
.right-in-enter-from {
  left: 100%;
}
.right-in-enter-active,
.right-in-leave-active {
  transition: left 1s;
}
.right-in-enter-to,
.right-in-leave-from {
  left: 0%;
}
.right-in-leave-to {
  left: -100%;
}
.left-in-enter-from {
  left: -100%;
}
.left-in-enter-active,
.left-in-leave-active {
  transition: left 1s;
}
.left-in-enter-to,
.left-in-leave-from {
  left: 0%;
}
.left-in-leave-to {
  left: 100%;
}
</style>

<script>
export default {
  data () {
    return {
      transitionName: 'left-in',
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
  watch: {
    index (n, o) {
      if (n > this.carousels.length - 1) {
        this.index = 0
      } else if (n < 0) {
        this.index = this.carousels.length - 1
      } else {
        this.transitionName = n > o ? 'right-in' : 'left-in'
      }
    }
  },
  methods: {
    setIndex (i) {
      this.index = i
    },
    autoPlay () {
      this.timer = setInterval(() => {
        this.index++
      }, 3000)
    },
    stopPlay () {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  mounted () {
    this.autoPlay()
  }
}
</script>
