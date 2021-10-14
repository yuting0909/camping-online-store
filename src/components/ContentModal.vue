<template>
  <div
    class="modal fade"
    id="contentModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="mb-0">營地介紹</h5>
        </div>
        <div class="modal-body">
          <img :src="type.images" :alt="type.title" class="img-fluid mb-3">
          <h6 class="fw-bold fs-5 mb-3">{{ type.title }}</h6>
          <ul class="list-unstyled text-muted mb-3">
            <li
              v-for="(content, i) in content"
              :key="i"
            >
              <i class="bi bi-check-lg me-2"></i>{{ content }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin'

export default {
  props: ['type'],
  data () {
    return {
      content: []
    }
  },
  watch: {
    type () {
      this.content = this.$filters.stringToArray(this.type.content)
    }
  },
  mixins: [modalMixin]
}
</script>
