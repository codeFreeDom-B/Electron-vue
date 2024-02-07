/*
 * @Author: SUN HENG
 * @Date: 2024-02-07 09:55:23
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-07 10:33:08
 * @FilePath: \Electronvite\src\views\desiginer\hooks\getTemplateData.ts
 * @Description:
 */
import DesignApi from '@/apis/design'
export async function getTemplateData(graphId: string) {
  const data = await DesignApi.getTemplate(graphId)
  return {
    data
  }
}
