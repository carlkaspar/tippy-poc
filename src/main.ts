import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

export const array = new Array(100)

app.use(router)

app.mount('#app')
