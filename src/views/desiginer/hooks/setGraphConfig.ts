/*
 * @Author: SUN HENG
 * @Date: 2024-02-07 10:54:26
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-07 11:02:22
 * @FilePath: \Electronvite\src\views\desiginer\hooks\setGraphConfig.ts
 * @Description:
 */
import DesignApi from '@/apis/design'
export async function setGraphConfig(id: number, params: any) {
  const data = await DesignApi.setGraphData(id, params)
  return data
}
