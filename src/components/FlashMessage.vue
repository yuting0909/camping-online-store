<template>
  <div class="toast-container" id="flash-messages">
    <div
      class="toast text-success bg-light border-0 rounded-4"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      ref="flashMessage"
      :class="{ 'text-warning': !message.success }"
    >
      <div class="toast-body" v-if="message.content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
          v-if="message.success"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-exclamation-circle"
          viewBox="0 0 16 16"
          v-else
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
          />
        </svg>
        <span class="text-muted fs-6 fw-bold ms-3">{{ message.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
  data () {
    return {
      message: {}
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('send-message', msg => {
      this.message = msg
      const toast = new Toast(this.$refs.flashMessage, {
        delay: 3000
      })
      toast.show()
      console.log(msg)
    })
  }
}
</script>

<style lang="scss" scoped>
#flash-messages {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
