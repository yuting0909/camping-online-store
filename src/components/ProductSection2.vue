<template>
  <div class="product-section-2">
    <div class="container py-5 px-4">
      <div class="row mb-5">
        <div class="col-lg-2">
          <h2 class="fs-4 fw-bold text-primary mb-3">
            <i class="bi bi-tree-fill text-success me-2"></i>營區須知
          </h2>
        </div>
        <div class="col-lg-10">
          <div class="line-break lh-lg">
            {{ product.content }}
          </div>
        </div>
      </div>
      <div class="row mb-5" id="choose-type">
        <div class="col-lg-2">
          <h2 class="fs-4 fw-bold text-primary mb-3">
            <i class="bi bi-tree-fill text-success me-2"></i>選擇營地
          </h2>
        </div>
        <div class="col-lg-10">
          <ul class="list-unstyled">
            <li
              v-for="(type, i) in types"
              :key="i"
              class="card rounded-3 overflow-hidden mb-3 border-0 bg-light"
            >
              <div class="row g-0">
                <div class="col-sm-5">
                  <img class="type-pic" :src="type.images[0]" alt="營地圖片" />
                </div>
                <div class="col-sm-7">
                  <div class="card-body h-100 d-flex flex-column">
                    <h3
                      class="fs-5 mb-0 d-flex justify-content-between flex-wrap"
                    >
                      <span class="fw-bold mb-2">{{ type.title }}</span
                      ><span class="float-end fs-6 mb-2"
                        >NT {{ type.price }} / {{ type.unit }}</span
                      >
                    </h3>
                    <ul class="list-unstyled text-muted mb-3">
                      <li
                        v-for="(content, i) in stringToArray(type.content)"
                        :key="i"
                      >
                        <i class="bi bi-check-lg me-2"></i>{{ content }}
                      </li>
                    </ul>
                    <div class="row mt-auto">
                      <div class="col-md-6 mb-2">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="請輸入數量"
                          v-model="typeNum[type.id]"
                        />
                      </div>
                      <div class="col-md-6">
                        <button
                          class="btn btn-primary w-100"
                          @click="addToCart(type.id)"
                        >
                          預定營地
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-2">
          <h2 class="fs-4 fw-bold text-primary mb-3">
            <i class="bi bi-tree-fill text-success me-2"></i>注意事項
          </h2>
        </div>
        <div class="col-lg-10">
          <div class="line-break lh-lg">
            {{ product.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '../style/custom/_variables';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

.type-pic {
  object-fit: cover;
  width: 100%;
  height: 200px;
  @include media-breakpoint-up(sm) {
    height: 250px;
  }
}
</style>

<script>
import emitter from '../methods/emitter'

export default {
  data () {
    return {
      typeNum: {},
      cart: []
    }
  },
  props: ['product', 'types'],
  watch: {
    types () {
      this.typeNum = this.types.reduce((acc, cur) => {
        acc[cur.id] = 0
        return acc
      }, {})
    }
  },
  methods: {
    stringToArray (str) {
      return str.split('\n')
    },
    addToCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: this.typeNum[id]
      }
      this.$http.post(url, { data: cart }).then(res => {
        console.log(res)
        this.getCart()
      })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then(res => {
        this.cart = res.data.data.carts
        this.sendCart()
      })
    },
    sendCart () {
      emitter.emit('sendCart', this.cart)
      console.log('sendCart')
    }
  }
}
</script>
