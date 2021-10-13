<template>
  <div class="toast-container">
    <div
      id="flash-message"
      class="toast text-success bg-light border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      ref="toast"
    >
      <div class="toast-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          />
        </svg>
        <span class="text-muted fs-6 fw-bold ms-3">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#flash-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 120;
}
</style>

<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
  data () {
    return {
      message: ''
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('send-message', msg => {
      this.message = msg
      const toast = new Toast(this.$refs.toast, {
        delay: 2000
      })
      toast.show()
    })
  }
}
</script>
