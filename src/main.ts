/*
 * @Author: SUN HENG
 * @Date: 2023-09-08 11:00:55
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-06 11:20:45
 * @FilePath: \Electronvite\src\main.ts
 * @Description: 
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import naive from 'naive-ui'
import axios from 'axios';

// 创建一个取消请求的源
const source = axios.CancelToken.source();
console.log(source,'source');

// 发起一个可以取消的GET请求
axios.get('api/nodes', {
  cancelToken: source.token
}).then((response) => {
  console.log(response.data);
}).catch((thrown) => {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理其他错误
  }
});

// 在某个时刻取消请求
setTimeout(() => {
  source.cancel('Operation canceled by the user.');
}, 2000);
const appInit = () => {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(naive)
  setTimeout(() => app.mount('#app'), 2700)
}
appInit()


