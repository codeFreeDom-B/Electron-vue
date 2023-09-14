import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import electron from "vite-plugin-electron"//让vite支持electron


export default defineConfig({
  plugins: [vue(), vueJsx(), electron({
    entry: "electron/main.ts",//配置入口文件
    onstart: options => {
      options.startup(['.', '--no-sandbox'])
    }
  })
  ],
  // optimizeDeps: {
  //   include: ['simple-peer']
  // },
  
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
})

