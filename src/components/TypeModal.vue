<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            <span>新增營地種類</span>
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <div class="row mb-3">
              <label for="type-1-name" class="col-sm-2 col-form-label fs-6"
                >營地種類</label
              >
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="type-1-name"
                  placeholder="請輸入營地種類"
                  v-model="temType.title"
                />
              </div>
              <label class="col-sm-2 col-form-label fs-6">收費單位</label>
              <div class="col-sm-4 d-flex align-items-center">
                <input
                  class="me-1"
                  type="radio"
                  id="unit-1"
                  value="區"
                  v-model="temType.unit"
                />
                <label class="me-2" for="unit-1">區</label>
                <input
                  class="me-1"
                  type="radio"
                  id="unit-2"
                  value="帳"
                  v-model="temType.unit"
                />
                <label class="me-2" for="unit-2">帳</label>
                <input
                  class="me-1"
                  type="radio"
                  id="unit-3"
                  value="間"
                  v-model="temType.unit"
                />
                <label for="unit-3">間</label>
              </div>
            </div>
            <div class="row mb-3">
              <label for="type-1-price" class="col-sm-2 col-form-label fs-6"
                >原價</label
              >
              <div class="col-sm-4">
                <input
                  type="number"
                  class="form-control"
                  id="type-1-price"
                  placeholder="請輸入收費金額"
                  v-model="temType.origin_price"
                />
              </div>
              <label for="type-1-price" class="col-sm-2 col-form-label fs-6"
                >特價</label
              >
              <div class="col-sm-4">
                <input
                  type="number"
                  class="form-control"
                  id="type-1-price"
                  placeholder="請輸入收費金額"
                  v-model="temType.price"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="type-1-content" class="col-sm-2 col-form-label fs-6"
                >備註</label
              >
              <div class="col-sm-10">
                <textarea
                  type="text"
                  class="form-control"
                  rows="6"
                  id="type-1-content"
                  placeholder="請輸入備註內容"
                  v-model="temType.content"
                ></textarea>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  id="type-1-is_enabled"
                  v-model="temType.is_enabled"
                />
                <label class="form-check-label" for="type-1-is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="mb-3">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm d-block"
                @click="temType.images.push('')"
              >
                新增營地照片
              </button>
            </div>
            <div
              class="d-flex"
              v-for="(image, key) in temType.images"
              :key="key"
            >
              <div class="flex-fill mb-3 me-3">
                <input
                  type="url"
                  class="form-control form-control"
                  v-model="temType.images[key]"
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
                  @change="uploadFile(key)"
                />
              </div>
              <div class="mb-3">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  @click="temType.images.splice(key, 1)"
                >
                  移除
                </button>
              </div>
            </div>

            <div v-if="temType.images" class="row image-wall">
              <div
                class="col-6 col-lg-4 mb-3"
                v-for="(image, key) in temType.images"
                :key="key"
              >
                <img
                  class="product-image"
                  :src="temType.images[key]"
                  :alt="temType.title"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="
              $emit('update-type', { type: temType, index: index })
            "
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    type: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number
    }
  },
  watch: {
    type () {
      this.temType = this.type
      if (!this.temType.images) {
        this.temType.images = []
      }
    }
  },
  data () {
    return {
      modal: {},
      temType: {},
      itemRefs: []
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    setItemRef (el) {
      if (el) {
        this.itemRefs.push(el)
      }
    },
    uploadFile (key) {
      const file = this.itemRefs[key].files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData).then(response => {
        if (response.data.success) {
          this.temType.images[key] = response.data.imageUrl
        }
      })
    }
  },
  beforeUpdate () {
    this.itemRefs = []
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
