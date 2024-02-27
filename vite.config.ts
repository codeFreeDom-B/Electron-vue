/*
 * @Author: SUN HENG
 * @Date: 2023-09-08 11:00:47
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-27 14:20:55
 * @FilePath: \Electronvite\vite.config.ts
 * @Description:
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import electron from 'vite-plugin-electron' //让vite支持electron

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    electron({
      entry: 'electron/main.ts', //配置入口文件
      onstart: (options) => {
        options.startup(['.', '--no-sandbox'])
      }
    })
  ],

  // optimizeDeps: {
  //   include: ['simple-peer']
  // },

  server: {
    // host: '0.0.0.0', //ip地址
    // port: 80, // 设置服务启动端口号
    // open: false, // 设置服务启动时是否自动打开浏览器
    // proxy: {
    //   '/socket.io': {
    //     target: 'http://localhost:3000',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }

    proxy: {
      '/api': {
        target: 'https://6e874w4071.zicp.fun',
        changeOrigin: true, // 允许跨域
        secure: false, //忽略安全证书
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
