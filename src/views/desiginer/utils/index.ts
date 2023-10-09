/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 14:47:47
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-08 18:06:49
 * @FilePath: \Electronvite\src\views\desiginer\utils\index.ts
 * @Description:
 */
import type { Graph } from '@antv/x6'
import eventEmitter from '@/views/desiginer/hooks/useEventMitt'
import {EventEmitterEnum} from "@/views/desiginer/utils/EventMitt"

export function setDefaultGraphListeners(graph: Graph) {
  // 双击创建边
  graph.on('blank:dblclick', ({ e, x, y }) => {
    graph.addEdge({
      source: [x, y],
      target: [x, y]
    })
  })

  // 鼠标经过边时，显示target
  graph.on('edge:mouseenter', ({ cell }) => {
    cell.addTools([
      {
        name: 'source-arrowhead'
      },
      {
        name: 'target-arrowhead',
        args: {
          attrs: {
            fill: 'red'
          }
        }
      }
    ])
  })
  // 鼠标移出时，恢复
  graph.on('edge:mouseleave', ({ cell }) => {
    cell.removeTools()
  })

  graph.on('cell:click', ({cell}) => {
    // 发送选中的消息
    eventEmitter.emit(EventEmitterEnum.CELL_SELECT,cell)
  })
}
