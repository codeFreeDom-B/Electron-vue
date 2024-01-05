/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 14:47:47
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-05 14:46:06
 * @FilePath: \Electronvite\src\views\desiginer\utils\index.ts
 * @Description:
 */
import type { Cell, Graph } from '@antv/x6'
import _ from 'lodash'
import eventEmitter from '@/views/desiginer/hooks/useEventMitt'
import { EventEmitterEnum } from '@/views/desiginer/utils/EventMitt'
import {useNodesDatas} from "@/stores/modules/nodesDatas/nodesDatas"
import {storeToRefs} from "pinia"
export function setDefaultGraphListeners(graph: Graph) {
  const NodesDatas=useNodesDatas()
  // 双击创建边
  graph.on('blank:dblclick', ({ e, x, y }) => {
    graph.addEdge({
      source: [x, y],
      target: [x, y],
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
  graph.on('node:changed', ({ node, options }) => {
    const { data } = storeToRefs(NodesDatas);
   
    
    if (node.getData() && node.getData()?.id == data.value?.id) {
      // console.log('我要改变了哈',data.value);
      node.setAttrs({ label: { text: data.value.value } })
      console.log(node,'node');
      // graph.updateItem(node, { label: data.value.value });
    }
  })
  
}
export function toSetCellDefaultConfig(graph: Graph) {
  // 当added时，添加基础配置
  graph.on('edge:added', ({ edge }) => {
    setCellStoreDataDefaultValue(graph, edge)
  })
  graph.on('node:added', ({ node }) => {
    setCellStoreDataDefaultValue(graph, node)
  })
  const { sx, sy } = GraphInstance.scale()
  // console.log(GraphInstance.scale(),GraphInstance.view.background.style.backgroundColor='red',sx,sy,'GraphInstance.scale()');

  graph.on('cell:click', ({ cell }) => {
    console.log(cell, 'cell.setPropByPath("title", data.title, { silent: true });')
    const isAsync=false
    if (cell.data) {
      console.log('我进来了');
      const script="console.log(customClickEvent)"
      return new (isAsync ? Object.getPrototypeOf(async function () {}).constructor : Function)('customClickEvent',script)(cell.data);
}
    // 发送选中的消息
    eventEmitter.emit(EventEmitterEnum.CELL_SELECT, {
      shape: cell.shape == 'edge' ? cell.shape : 'node',
      node: cell
    })
  })
}

function setCellStoreDataDefaultValue(graph: Graph, cell: Cell) {
  //这里我想直接创建的时候,直接默认选中就可以了,选中之后去判断是打开路由或者node
  const data = _.cloneDeep(cell.getProp())
  graph.cleanSelection()
  if (!data.title) {
    if (cell.shape == 'edge') return cell.setPropByPath('title', '普通边', { silent: true })
    graph.select(cell)
    // 这里因为监听不到选中事件所以直接进行抛出,来改变config
    eventEmitter.emit(EventEmitterEnum.CELL_SELECT, {
      shape: cell.shape == 'edge' ? cell.shape : 'node',
      node: cell
    })
  }
}
