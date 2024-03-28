/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 14:47:47
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 13:17:32
 * @FilePath: \Electronvite\src\views\desiginer\utils\index.ts
 * @Description:
 */
import type { Cell } from '@antv/x6'
import { Edge, Graph } from '@antv/x6'
import _ from 'lodash'
import eventEmitter from '@/views/desiginer/hooks/useEventMitt'
import { EventEmitterEnum } from '@/views/desiginer/utils/EventMitt'
import { useNodesDatas } from '@/stores/modules/nodesDatas/nodesDatas'
import { storeToRefs } from 'pinia'
const AnimationOptions = [
  { label: '正向流动', value: '20s linear 0s infinite normal none running ant-line' },
  { label: '反向流动', value: '20s linear 0s infinite reverse none running ant-line' },
  { label: '停止', value: '' }
]
// 定义一个自定义边的类
class PipelineEdge extends Edge {
  constructor(options) {
    super(options)

    this.on('change:data', (model) => {
      this.handleStateChange(model)
    })
  }
  handleStateChange(model) {
    const { cell } = model
    const data = cell.getData()
    if (data.flowDirection == '正向流动') {
      cell.setAttrByPath('line/stroke', '#7eb2fb')
      cell.setAttrByPath('line/style/animation', cell.data.flowDirection)
    }
  }
}

// 将自定义边类型添加到可用的边类型列表中
Graph.registerEdge('arrow-edge', PipelineEdge)

export function setDefaultGraphListeners(graph: Graph) {
  // 双击创建边

  graph.on('blank:dblclick', ({ e, x, y }) => {
    graph.addEdge({
      shape: 'arrow-edge',
      source: [x, y],
      target: [x, y],
      markup: [
        {
          tagName: 'path',
          selector: 'outline',
          attrs: {
            cursor: 'pointer',
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none',
            cursor: 'pointer'
          }
        }
      ],
      attrs: {
        line: {
          connection: true,
          stroke: '#333',
          connector: { name: 'rounded' },
          strokeDasharray: '10,20',
          // 未知属性
          // strokeLinejoin: 'round',
          strokeWidth: 16,
          strokeLinecap: 'round'
        },
        outline: {
          connection: true,
          stroke: '#333',
          strokeWidth: 20,
          strokeLinecap: 'round'
        }
      },
      data: {
        flowDirection: '', // 初始化流动方向
        AnimationOptions
        //动画的选项
      }
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
  // graph.on('node:changed', ({ node, options }) => {
  //   const { data } = storeToRefs(NodesDatas);

  //   if (node.getData() && node.getData()?.id == data.value?.id) {
  //     // console.log('我要改变了哈',data.value);
  //     node.setAttrs({ label: { text: data.value.value } })
  //     console.log(node,'node');
  //     // graph.updateItem(node, { label: data.value.value });
  //   }
  // })
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
    const isAsync = false
    if (cell.data?.bindEvent == 'click') {
      const script = 'console.log(customClickEvent)'
      return new (isAsync ? Object.getPrototypeOf(async function () {}).constructor : Function)(
        'customClickEvent',
        script
      )('我是执行参数打印的结果')
    }
    // 发送选中的消息
    eventEmitter.emit(EventEmitterEnum.CELL_SELECT, {
      shape: cell.shape == 'edge' || cell.shape == 'arrow-edge' ? cell.shape : 'node',
      node: cell
    })
  })
}

function setCellStoreDataDefaultValue(graph: Graph, cell: Cell) {
  //这里我想直接创建的时候,直接默认选中就可以了,选中之后去判断是打开路由或者node
  const data = _.cloneDeep(cell.getProp())
  graph.cleanSelection()
  if (!data.title) {
    console.log(cell.shape, '我是shape')

    if (cell.shape == 'edge' || cell.shape == 'arrow-edge')
      return cell.setPropByPath('title', '普通边', { silent: true })
    graph.select(cell)
    // 这里因为监听不到选中事件所以直接进行抛出,来改变config
    eventEmitter.emit(EventEmitterEnum.CELL_SELECT, {
      shape: cell.shape == 'edge' || cell.shape == 'arrow-edge' ? cell.shape : 'node',
      node: cell
    })
  }
}
