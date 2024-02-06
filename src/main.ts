/*
 * @Author: SUN HENG
 * @Date: 2023-09-08 11:00:55
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 14:10:31
 * @FilePath: \Electronvite\src\main.ts
 * @Description:
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import naive from 'naive-ui'

const appInit = () => {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(naive)
  setTimeout(() => app.mount('#app'), 2700)
}
appInit()
