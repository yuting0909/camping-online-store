import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { currency, date, stringToArray } from './methods/filters'

import '@/style/all.scss'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$filters = { currency, date, stringToArray }
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.component('Field', Field)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
