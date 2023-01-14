import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import AutoImport from 'unplugin-auto-import/dist/vite'
// @ts-ignore
import Components from 'unplugin-vue-components/dist/vite'
// @ts-ignore
import {ElementPlusResolver} from 'unplugin-vue-components/dist/resolvers'

// https://vitejs.dev/config/ 初始化  npm install --registry=http://registry.npmmirror.com
const baseURL= 'http://amt.livedev1.zkjin.com/backend'
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
  },
  server: {
    proxy: {
      '/backend': { //user/sys-config/configInfo?type=1
        target: baseURL,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/backend/, ''),
      },
    }
  }
})
