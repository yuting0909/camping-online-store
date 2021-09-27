<template>
  <section class="product-section-2">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-4 d-none d-lg-block">
          <div class="card rounded-4">
            <div class="card-body py-4">
              <div class="regions pb-4 mb-4 border-bottom">
                <h2 class="fs-4 mb-3">
                  目的地
                </h2>
                <template v-for="(region, i) in regions" :key="i">
                  <input
                    type="checkbox"
                    class="btn-check"
                    :id="region"
                    :value="region"
                    autocomplete="off"
                    v-model="filter.regions"
                  />
                  <label
                    class="btn btn-outline-secondary rounded-pill fs-7 py-1 px-3 my-1 me-2"
                    :for="region"
                    ># {{ region }}</label
                  >
                </template>
              </div>
              <div class="features">
                <h2 class="fs-4 mb-3">營區特色</h2>
                <template v-for="(feature, i) in features" :key="i">
                  <input
                    type="checkbox"
                    class="btn-check"
                    :id="feature"
                    :value="feature"
                    autocomplete="off"
                    v-model="filter.features"
                  />
                  <label
                    class="btn btn-outline-secondary rounded-pill fs-7 py-1 px-3 my-1 me-2"
                    :for="feature"
                    ># {{ feature }}</label
                  >
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      regions: ['北部', '中部', '南部', '東部', '離島'],
      features: [
        '免裝備',
        '裝備租借',
        '雨棚',
        '遊戲設施',
        '玩水',
        '高海拔',
        '森林',
        '草原',
        '靠海',
        '近溪流',
        '夜景',
        '雲海'
      ],
      filter: {
        regions: [],
        features: []
      }
    }
  }
}
</script>
