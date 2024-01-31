/*
 * @Author: SUN HENG
 * @Date: 2024-01-06 11:00:28
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-31 15:17:57
 * @FilePath: \Electronvite\src\http\index.ts
 * @Description:
 */
import Request from './request'
import type { AxiosResponse } from 'axios'

import type { RequestConfig } from './types'

export interface SHResponse<T> {
  statusCode: number
  desc: string
  result: T
}

// 重写返回类型
interface SHRequestConfig<T, R> extends RequestConfig<SHResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      if (localStorage.jwtToken) {
        config.headers.Authorization = `Bearer ${window.localStorage.getItem('jwtToken')}`
      }
      return config
    },
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      console.log(result, '我是响应拦截器')
      return result
    }
  }
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {SHRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const shRequest = <D = any, T = any>(config: SHRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<SHResponse<T>>(config)
}
// // 取消请求
// export const cancelRequest = (url: string | string[]) => {
//   return request.cancelRequest(url)
// }
// // 取消全部请求
// export const cancelAllRequest = () => {
//   return request.cancelAllRequest()
// }

export default shRequest
