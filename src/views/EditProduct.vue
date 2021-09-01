<template>
  <div class="container mt-4">
    <h1 class="mb-4 fs-2 fw-bolder">編輯營區</h1>
    <div class="row">
      <div class="col-12">
        <h2
          class="fs-4 fw-bolder px-3 py-1 border-start border-primary border-4 rounded mb-3"
        >
          營區資訊
        </h2>
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
            <label for="category" class="form-label">地區</label>
            <select
              id="category"
              class="form-select"
              v-model="temProduct.category"
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
            id="description"
            placeholder="請輸入營區描述"
            v-model="temProduct.description"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">注意事項</label>
          <textarea
            type="text"
            class="form-control"
            id="content"
            placeholder="請輸入營區注意事項"
            v-model="temProduct.content"
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
        <div class="d-flex mb-3">
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
        <div class="mb-3">
          <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div
              class="col"
              v-for="type in temProduct.type_group"
              :key="type.title"
            >
              <div class="card bg-light h-100">
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
                <div class="card-footer bg-light p-0">
                  <div class="btn-group w-100">
                    <button
                      type="button"
                      class="btn btn-outline-success w-50 btn-left"
                      @click="openModal(false, type)"
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger w-50 btn-right"
                      @click="deleteType(type)"
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
  <type-modal ref="typeModal" :type="temType" @update-type="updateType" />
</template>

<script>
import TypeModal from '../components/TypeModal.vue'
export default {
  data () {
    return {
      region: {
        北部: ['台北', '新北', '桃園', '新竹'],
        中部: ['苗栗', '台中', '南投', '雲林'],
        南部: ['嘉義', '台南', '高雄', '屏東'],
        東部: ['宜蘭', '花蓮', '台東'],
        離島: ['金門', '澎湖']
      },
      cities: ['台北', '新北', '桃園', '新竹'],
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
        '夜景',
        '雲海'
      ],
      temProduct: {},
      temType: {},
      isNew: false,
      id: ''
    }
  },
  components: {
    TypeModal
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(api).then(res => {
        this.temProduct = res.data.product
      })
    },
    updateCities () {
      this.cities = this.region[this.temProduct.category]
      this.temProduct.city = this.cities[0]
    },
    openModal (isNew, type) {
      console.log(isNew, type)
      if (isNew) {
        this.temType = {}
      } else {
        this.temType = this.temProduct.type_group.find(
          item => item.id === type.id
        )
      }
      this.isNew = isNew
      const typeComponent = this.$refs.typeModal
      typeComponent.showModal()
    },
    updateType (item) {
      console.log(item)
      if (this.isNew) {
        this.temType = { ...item, id: new Date().getTime() }
        this.temProduct.type_group.push(this.temType)
      } else {
        this.temType = { ...item }
      }
      console.log(this.temProduct)
      this.$refs.typeModal.hideModal()
    },
    deleteType (item) {
      const i = this.temProduct.type_group.indexOf(item)
      this.temProduct.type_group.splice(i, 1)
    },
    updateProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.id}`
      this.$http.put(api, { data: this.temProduct }).then(res => {
        console.log(res)
        this.$router.push('/admin/products')
      })
    },
    cancel () {
      this.$router.push('/admin/products')
    }
  }
}
</script>
