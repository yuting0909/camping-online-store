<template>
  <div
    class="modal fade mt-5"
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
            <div class="row g-0 mb-3">
              <label for="type-1-name" class="col-sm-2 col-form-label fs-6"
                >營地種類</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="type-1-name"
                  placeholder="請輸入營地種類"
                  v-model="temType.title"
                />
              </div>
            </div>
            <div class="row g-0 mb-3">
              <label class="col-sm-2 col-form-label fs-6">收費單位</label>
              <div class="col-sm-10 d-flex align-items-center">
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
                <label for="unit-2">帳</label>
              </div>
            </div>
            <div class="row g-0 mb-3">
              <label for="type-1-price" class="col-sm-2 col-form-label fs-6"
                >收費</label
              >
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  id="type-1-price"
                  placeholder="請輸入收費金額"
                  v-model="temType.price"
                />
              </div>
            </div>
            <div class="row g-0 mb-3">
              <label for="type-1-content" class="col-sm-2 col-form-label fs-6"
                >備註</label
              >
              <div class="col-sm-10">
                <textarea
                  type="text"
                  class="form-control"
                  id="type-1-content"
                  placeholder="請輸入備註內容"
                  v-model="temType.content"
                ></textarea>
              </div>
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
            @click="$emit('update-type', temType)"
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
    }
  },
  watch: {
    type () {
      this.temType = this.type
    }
  },
  data () {
    return {
      modal: {},
      temType: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
