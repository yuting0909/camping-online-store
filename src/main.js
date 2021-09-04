import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { currency } from './methods/filters'

import '@/style/all.scss'

const app = createApp(App)
app.config.globalProperties.$filters = { currency }
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
