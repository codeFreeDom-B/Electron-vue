/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 13:10:28
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 14:11:29
 * @FilePath: \Electronvite\src\apis\workBenches.ts
 * @Description:
 */
import http from '@/http'
export default class BenchApi {
  static getCaseList(): Promise<any> {
    return http<any, []>({
      url: '/case',
      method: 'get'
    })
  }
}
