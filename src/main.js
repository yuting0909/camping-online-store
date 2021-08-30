import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import '@/style/all.scss'

createApp(App)
  .use(router)
  .mount('#app')
