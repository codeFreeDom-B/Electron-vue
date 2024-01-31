/*
 * @Author: SUN HENG
 * @Date: 2024-01-29 16:13:28
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-31 15:12:19
 * @FilePath: \Electronvite\src\apis\login.ts
 * @Description:
 */
import http from '@/http'
export default class BaseApi {
  static Login(data: any): Promise<any> {
    return http<any, []>({
      url: '/auth/sign-in',
      method: 'post',
      data
    })
  }
  static getUserInfo(data: any): Promise<any> {
    return http<any, []>({
      url: '/users',
      method: 'post',
      data
    })
  }
}
