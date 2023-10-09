/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 13:30:50
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-07 13:34:07
 * @FilePath: \Electronvite\src\views\desiginer\plug\Keyboard.plug.ts
 * @Description:
 */
import { Keyboard } from '@antv/x6-plugin-keyboard'
export function useKeyboard() {
  return new Keyboard({
    enabled: true
  })
}
