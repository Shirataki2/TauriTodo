import { createApp } from 'vue'
import { Quasar } from 'quasar'
import ja from 'quasar/lang/ja'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from '@/App.vue'
import routes from '@/router/routes'
import { createRouter, createWebHistory } from 'vue-router'

const vueApp = createApp(App)

vueApp.use(Quasar, {
  lang: ja,
  plugins: {}
})

vueApp.use(createRouter({
  history: createWebHistory(),
  routes
}))

vueApp.mount('#app')
