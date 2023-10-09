/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 13:45:07
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-08 17:30:02
 * @FilePath: \Electronvite\src\views\desiginer\plug\selection.plug.ts
 * @Description:
 */
import { Selection } from '@antv/x6-plugin-selection'
export function useSelection() {
  return  new Selection({
    enabled: true,
    multiple: true,
    rubberband: true,
    movable: true,
    showNodeSelectionBox: true,
    showEdgeSelectionBox:true
  })
}
