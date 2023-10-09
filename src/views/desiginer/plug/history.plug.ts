/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 15:17:23
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-07 15:22:02
 * @FilePath: \Electronvite\src\views\desiginer\plug\history.plug.ts
 * @Description: 
 */
import { History } from '@antv/x6-plugin-history'
export function useHistory() {
  return new History({
    enabled: true,
  })
}