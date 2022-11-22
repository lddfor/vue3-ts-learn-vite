import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/dist/vite'
import Components from 'unplugin-vue-components/dist/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/dist/resolvers'

// https://vitejs.dev/config/ 初始化  npm install --registry=http://registry.npmmirror.com

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/styles',
      '@components': '/src/components',
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
