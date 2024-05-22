import './assets/main.css'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

pinia.use(piniaPluginPersistedstate)

const toastOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  hideProgressBar: true
}
app.use(Toast, toastOptions)
app.use(router)

app.mount('#app')
