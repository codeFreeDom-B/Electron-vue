/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 13:38:18
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-12-20 13:53:36
 * @FilePath: \Electronvite\src\views\desiginer\plug\clipboard.plug.ts
 * @Description:
 */
import type { Graph } from '@antv/x6'
import { Clipboard } from '@antv/x6-plugin-clipboard'
export function useClipboard(graph: Graph) {
  const clipboard = new Clipboard({
    enabled: true
  })
  graph.bindKey('ctrl+c', () => {
    const cell = graph.getSelectedCells()
    if (cell.length) {
      clipboard.copy(cell)
    }
  })
  graph.bindKey('ctrl+v', () => {
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 })
      graph.clearTransformWidgets()
      graph.cleanSelection()
      graph.select(cells)
    }
  })
  graph.bindKey('ctrl+x', () => {
    const cell = graph.getSelectedCells()
    if (cell.length) {
      clipboard.cut(cell)
    }
  })
  graph.bindKey(['delete'], () => {
    const cells = graph.getSelectedCells()
    graph.removeCells(cells)
  })
  return clipboard
}
