import {createApp} from 'vue'
import 'reset-css'
import '@/styles/index.css'

import {router} from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

// import './utils/rem.ts'  //为了移动端准备

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


