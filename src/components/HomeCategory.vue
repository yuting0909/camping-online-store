<template>
  <section class="category-group py-5">
    <div class="themes pb-5">
      <div class="container mb-5">
        <h2
          class="m-auto pb-3 mb-5 border-bottom border-primary border-4 w-fit"
        >
          精選主題露營
        </h2>
        <br />
        <div class="row g-4">
          <div
            class="col-md-6 col-lg-4"
            v-for="(theme, i) in themeList"
            :key="i"
          >
            <a
              :href="`#/products?feature=${theme.feature}`"
              class="theme d-block text-center overflow-hidden position-relative"
            >
              <img
                class="position-relative"
                :src="theme.imgUrl"
                :alt="theme.title"
              />
              <figcaption class="position-absolute">
                <h3>{{ theme.title }}</h3>
              </figcaption>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="regions">
      <div class="container mb-5">
        <h2
          class="m-auto pb-3 mb-5 border-bottom border-primary border-4 w-fit"
        >
          您的目的地？
        </h2>
        <br />
        <div class="row g-4">
          <div class="col-6 col-lg-3" v-for="(region, i) in regions" :key="i">
            <a
              :href="`#/products?region=${region.region}`"
              class="region d-block text-center overflow-hidden position-relative"
            >
              <img
                class="position-relative"
                :src="region.imgUrl"
                :alt="region.title"
              />
              <figcaption class="position-absolute">
                <h3>{{ region.title }}</h3>
                <p>探索{{ region.title }}營區</p>
              </figcaption>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.category-group {
  background-image: url('/images/home/home-bg.jpeg');
  background-position: bottom;
  background-repeat: no-repeat;
}
.theme {
  background-color: rgb(48, 68, 70);
  border-radius: 8px;
  height: 220px;
  &:hover img {
    opacity: 0.4;
  }
  &:hover figcaption::before,
  &:hover figcaption::after {
    opacity: 1;
    transform: scale(1);
  }
  &:hover h3 {
    transform: translate3d(0, 0, 0);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    transition: opacity 0.35s;
  }
  figcaption {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    &::before,
    &::after {
      position: absolute;
      top: 30px;
      right: 30px;
      bottom: 30px;
      left: 30px;
      content: '';
      opacity: 0;
      transition: opacity 0.35s, transform 0.35s;
    }
    &::before {
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transform: scale(0, 1);
    }
    &::after {
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
      transform: scale(1, 0);
    }
  }
  h3 {
    padding-top: 27%;
    transform: translate3d(0, -20px, 0);
    transition: transform 0.35s;
  }
}
.region {
  height: 380px;
  background-color: rgb(48, 68, 70);
  border-radius: 8px;
  &:hover img {
    opacity: 0.7;
    transform: translate3d(0, 0, 0);
  }
  &:hover h3::after {
    transform: translate3d(0, 0, 0);
  }
  &:hover p {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transform: translate3d(-10px, 0, 0);
    transition: opacity 0.35s, transform 0.35s;
  }
  figcaption {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    color: #fff;
    text-align: left;
  }
  h3 {
    position: relative;
    overflow: hidden;
    padding: 0.5em 0;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #fff;
      content: '';
      transition: transform 0.35s;
      transform: translate3d(-100%, 0, 0);
    }
  }
  p {
    text-align: end;
    padding: 0.5em 0;
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    transition: opacity 0.35s, transform 0.35s;
  }
}
</style>

<script>
export default {
  data () {
    return {
      themeList: [
        { title: '森林系', imgUrl: '/images/home/home-theme-01.jpg', feature: '森林' },
        { title: '觀夜景', imgUrl: '/images/home/home-theme-02.jpg', feature: '夜景' },
        { title: '賞雲海', imgUrl: '/images/home/home-theme-03.jpg', feature: '雲海' },
        { title: '親子遊樂', imgUrl: '/images/home/home-theme-04.jpg', feature: '遊樂設施' },
        { title: '免裝備', imgUrl: '/images/home/home-theme-05.jpg', feature: '免裝備' },
        { title: '新手露營', imgUrl: '/images/home/home-theme-06.jpg', feature: '裝備租借' }
      ],
      regions: [
        { title: '北部', imgUrl: '/images/home/home-region-01.jpg', region: '北部' },
        { title: '中部', imgUrl: '/images/home/home-region-02.jpg', region: '中部' },
        { title: '南部', imgUrl: '/images/home/home-region-03.jpg', region: '南部' },
        { title: '東部', imgUrl: '/images/home/home-region-04.jpg', region: '東部' }
      ]
    }
  }
}
</script>
