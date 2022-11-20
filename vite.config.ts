import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/   npm install --registry=http://registry.npmmirror.com
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/styles',
      '@components': '/src/components'
    }
  }
})
