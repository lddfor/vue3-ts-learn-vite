import {createApp} from 'vue'
import 'reset-css'
import '@/styles/index.css'

import {router} from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

// 代码高亮组件
import HighCode from '@/components/hightCode/index.vue'
// import 'default-passive-events'
// import './utils/rem.ts'  //为了移动端准备

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/atom-one-dark.css'


const app = createApp(App)
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block)
  })
})

app.component('HighCode', HighCode)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


