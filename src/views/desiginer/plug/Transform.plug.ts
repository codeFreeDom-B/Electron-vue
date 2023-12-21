/*
 * @Author: SUN HENG
 * @Date: 2023-12-19 20:46:16
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-12-19 20:47:51
 * @FilePath: \Electronvite\src\views\desiginer\plug\Transform.plug.ts
 * @Description: 
 */
import { Transform } from '@antv/x6-plugin-transform'
export function useTransform() {
 return new Transform({
    resizing: {
      enabled:true,
    },
    rotating: {
      enabled:true
    }
  })
}