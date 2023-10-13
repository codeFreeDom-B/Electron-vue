/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 14:47:47
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-13 16:20:38
 * @FilePath: \Electronvite\src\views\desiginer\utils\index.ts
 * @Description:
 */
import type { Cell, Graph } from '@antv/x6'
import _ from "lodash";
import eventEmitter from '@/views/desiginer/hooks/useEventMitt'
import { EventEmitterEnum } from '@/views/desiginer/utils/EventMitt'

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
}
export function toSetCellDefaultConfig(graph: Graph) {
  // 当added时，添加基础配置
  graph.on("edge:added", ({edge}) => {
    setCellStoreDataDefaultValue(edge)
  })
  graph.on("node:added", ({node}) => {
    setCellStoreDataDefaultValue(node)
  })
  const { sx, sy } = GraphInstance.scale();
  console.log(GraphInstance.scale(),GraphInstance.view.background.style.backgroundColor='red',sx,sy,'GraphInstance.scale()');
  
  
  // graph.on('cell:click', ({ cell }) => {
  //   // 发送选中的消息
  //   eventEmitter.emit(EventEmitterEnum.CELL_SELECT, {
  //     shape: cell.shape == 'edge' ? cell.shape : 'node',
  //     node:cell
  //   })
  // })
}


function setCellStoreDataDefaultValue(cell:Cell) {
  const data = _.cloneDeep(cell.getProp());
  console.log(cell.isNode(),'setCellStoreDataDefaultValue');
  
  if (!data.title) {
    console.log(data,'data');
  }
  
  
}