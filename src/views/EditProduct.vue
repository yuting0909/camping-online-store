<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-xmpavumjb">
      <div class="ldio-ylwm2fadiqf">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </Loading>
  <div class="container mt-4">
    <h1 class="mb-4 fs-2 fw-bolder">編輯營區</h1>
    <div class="row gx-5">
      <div class="col-12">
        <h2
          class="fs-4 fw-bolder px-3 py-1 border-start border-primary border-4 rounded mb-3"
        >
          營區資訊
        </h2>
      </div>
      <div class="col-12">
        <div class="mb-3">
          <label for="title" class="form-label">營區名稱</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="請輸入營區名稱"
            v-model="temProduct.title"
          />
        </div>

        <div class="row gx-2">
          <div class="mb-3 col-md-3">
            <label for="region" class="form-label">地區</label>
            <select
              id="region"
              class="form-select"
              v-model="temProduct.region"
              @change="updateCities"
            >
              <option>北部</option>
              <option>中部</option>
              <option>南部</option>
              <option>東部</option>
              <option>離島</option>
            </select>
          </div>
          <div class="mb-3 col-md-3">
            <label for="city" class="form-label">縣市</label>
            <select id="city" class="form-select" v-model="temProduct.city">
              <option v-for="city in cities" :key="city">{{ city }}</option>
            </select>
          </div>
          <div class="mb-3 col-md-6">
            <label for="address" class="form-label">地址</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="請輸入詳細地址"
              v-model="temProduct.address"
            />
          </div>
        </div>

        <div class="mb-3">
          <div class="mb-2">營區特色</div>
          <div id="features" class="mb-3 card d-block p-3">
            <div v-for="feature in features" :key="feature">
              <input
                class="form-check-input me-1"
                type="checkbox"
                :id="feature"
                :value="feature"
                v-model="temProduct.features"
              />
              <label class="form-check-label" :for="feature">{{
                feature
              }}</label>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">營區描述</label>
          <textarea
            type="text"
            class="form-control"
            rows="10"
            id="description"
            placeholder="請輸入營區描述"
            v-model="temProduct.description"
          ></textarea>
        </div>

        <div class="mb-3">
          <label for="content" class="form-label">營區須知</label>
          <textarea
            type="text"
            class="form-control"
            rows="10"
            id="content"
            placeholder="請輸入營區營區須知"
            v-model="temProduct.content"
          ></textarea>
        </div>

        <div class="mb-3">
          <label for="notice" class="form-label">注意事項</label>
          <textarea
            type="text"
            class="form-control"
            rows="10"
            id="notice"
            placeholder="請輸入營區注意事項"
            v-model="temProduct.notice"
          ></textarea>
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              :true-value="1"
              :false-value="0"
              id="is_enabled"
              v-model="temProduct.is_enabled"
            />
            <label class="form-check-label" for="is_enabled">
              是否啟用
            </label>
          </div>
        </div>
        <br />
      </div>

      <div class="col-12">
        <h2
          class="fs-4 fw-bolder px-3 py-1 border-start border-primary border-4 rounded mb-3"
        >
          營區照片
        </h2>
      </div>
      <div class="col-12">
        <label class="form-label">營區封面照片</label>
        <div class="d-flex">
          <div class="flex-fill mb-3 me-3">
            <input
              type="text"
              class="form-control"
              id="image"
              v-model="temProduct.imageUrl"
              placeholder="請輸入圖片連結"
            />
          </div>
          <div class="d-flex align-items-center mb-3 me-3">
            <span>或上傳檔案</span>
          </div>
          <div class="flex-fill mb-3">
            <input
              type="file"
              id="imageFile"
              class="form-control"
              ref="fileInput"
              @change="uploadFile"
            />
          </div>
        </div>

        <div class="mb-3">
          <div class="mb-3">
            <button
              class="btn btn-outline-primary btn-sm d-block"
              @click="temProduct.images.push('')"
            >
              新增更多照片
            </button>
          </div>

          <div
            class="d-flex"
            v-for="(image, key) in temProduct.images"
            :key="key"
          >
            <div class="flex-fill mb-3 me-3">
              <input
                type="url"
                class="form-control form-control"
                v-model="temProduct.images[key]"
                placeholder="請輸入連結"
              />
            </div>
            <div class="d-flex align-items-center mb-3 me-3">
              <span>或上傳檔案</span>
            </div>
            <div class="flex-fill mb-3 me-2">
              <input
                type="file"
                class="form-control"
                :ref="setItemRef"
                @change="uploadMoreFiles(key)"
              />
            </div>
            <div class="mb-3">
              <button
                class="btn btn-outline-danger"
                type="button"
                @click="temProduct.images.splice(key, 1)"
              >
                移除
              </button>
            </div>
          </div>
        </div>

        <div class="mb-3" v-if="temProduct.imageUrl || temProduct.images">
          <div class="row image-wall">
            <div class="col-sm-6 col-lg-3 mb-3" v-if="temProduct.imageUrl">
              <img
                class="product-image"
                :src="temProduct.imageUrl"
                :alt="temProduct.title"
              />
            </div>
            <div
              class="col-sm-6 col-lg-3 mb-3"
              v-for="(image, key) in temProduct.images"
              :key="key"
            >
              <img
                class="product-image"
                :src="temProduct.images[key]"
                :alt="temProduct.title"
              />
            </div>
          </div>
        </div>
        <br />
      </div>

      <div class="col-12 d-flex mb-3">
        <h2
          class="fs-4 fw-bolder px-3 py-1 border-start border-primary border-4 rounded"
        >
          營地種類
        </h2>
        <div class="ms-auto">
          <button
            class="btn btn-primary"
            type="button"
            @click="openModal(true)"
          >
            新增種類
          </button>
        </div>
      </div>

      <div class="col-12">
        <div class="mb-3">
          <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col" v-for="(type, i) in temTypes" :key="i">
              <div class="card bg-light h-100">
                <img
                  v-if="type.images && type.images[0]"
                  class="type-image"
                  :src="type.images[0]"
                  :alt="type"
                />
                <div class="card-body">
                  <div
                    class="card-title d-flex align-items-center justify-content-between"
                  >
                    <h3 class="fs-5 m-0">{{ type.title }}</h3>
                    <small class="text-end"
                      >NT${{ type.price }} / {{ type.unit }}</small
                    >
                  </div>
                  <div class="card-text">
                    <p>{{ type.content }}</p>
                    <small v-if="type.is_enabled" class="text-success"
                      ><i class="bi bi-check-circle-fill"></i> 已啟用</small
                    >
                    <small v-else class="text-muted"
                      ><i class="bi bi-check-circle"></i> 未啟用</small
                    >
                  </div>
                </div>
                <div class="card-footer bg-light border-0 p-0">
                  <div class="btn-group w-100">
                    <button
                      type="button"
                      class="btn btn-outline-success w-50 btn-left"
                      @click="openModal(false, type, i)"
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger w-50 btn-right"
                      @click="deleteTemType(type)"
                    >
                      刪除
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <hr />
        <div class="text-center my-5">
          <button
            class="btn btn-outline-secondary px-5 me-3"
            type="button"
            @click="cancel"
          >
            取消
          </button>
          <button
            class="btn btn-primary px-5"
            type="button"
            @click="updateProduct"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <type-modal ref="typeModal" :type="temType" @update-type="updateTemType" />
</template>

<script>
import productMixin from '../mixins/productMixin'
import promiseMixin from '../mixins/promiseMixin'

export default {
  data () {
    return {
      temProduct: {},
      id: '',
      isLoading: false
    }
  },
  mixins: [productMixin, promiseMixin],
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.isLoading = false
        const product = res.data.products[this.id]
        this.temProduct = product.features
          ? product
          : { ...product, features: [] }
        this.getTypes()
      })
    },
    getTypes () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.$http.get(api).then(res => {
        const productsArr = Object.values(res.data.products)
        this.types = productsArr.filter(
          product => product.belong_to === this.temProduct.title
        )
        this.temTypes = productsArr.filter(
          product => product.belong_to === this.temProduct.title
        )
      })
    },
    updateProduct () {
      const createTemTypesPromise = this.temTypes.map(type =>
        this.createPromise(type)
      )
      const deleteTypesPromise = this.types.map(type =>
        this.deletePromise(type)
      )
      this.updatePromise(this.temProduct)
        .then(res => {
          this.pushMessageState(res, '營區更新')
          return Promise.all(deleteTypesPromise)
        })
        .then(res => {
          return Promise.all(createTemTypesPromise)
        })
        .then(res => {
          return this.$router.push('/admin/products')
        })
    }
  }
}
</script>
