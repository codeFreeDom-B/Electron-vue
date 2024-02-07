/*
 * @Author: SUN HENG
 * @Date: 2024-02-07 09:57:58
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-07 12:55:15
 * @FilePath: \Electronvite\src\apis\design.ts
 * @Description:
 */
import http from '@/http'

export default class DesignApi {
  static getTemplate(graphId: string): Promise<any> {
    return http<any, []>({
      url: `/instance/${graphId}`,
      method: 'get'
    })
  }
  static setGraphData(id: number, data: any): Promise<any> {
    return http<any, []>({
      url: `/instance/${id}`,
      method: 'put',
      data
    })
  }
}
