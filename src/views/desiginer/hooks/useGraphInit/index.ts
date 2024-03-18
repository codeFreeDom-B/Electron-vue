/*
 * @Author: SUN HENG
 * @Date: 2023-09-22 12:04:14
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-18 16:20:32
 * @FilePath: \Electronvite\src\views\desiginer\hooks\useGraphInit\index.ts
 * @Description:
 */
import { ref, onMounted, shallowRef } from 'vue'
import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import defaultOptions from './defaultOption'
import { useClipboard } from '@/views/desiginer/plug/clipboard.plug'
import { useSelection } from '@/views/desiginer/plug/selection.plug'
import { useHistory } from '@/views/desiginer/plug/history.plug'
import { useTransform } from '@/views/desiginer/plug/Transform.plug'
import { useKeyboard } from '@/views/desiginer/plug/Keyboard.plug'
import { useExport } from '@/views/desiginer/plug/export.plug'
import { setDefaultGraphListeners, toSetCellDefaultConfig } from '@/views/desiginer/utils'
import { useNodesDatas } from '@/stores/modules/nodesDatas/nodesDatas'
import { useIpcRenderer } from '@vueuse/electron'

const NodesDatas = useNodesDatas()
export default function () {
  const graphContainer = ref<HTMLDivElement>()
  const graphRef = shallowRef<Graph>()
  const dndRef = shallowRef<Dnd>()
  onMounted(() => {
    const IpcRenderer = useIpcRenderer()
    IpcRenderer.send('window-max')
    window.GraphInstance = graphRef.value = new Graph({
      container: graphContainer.value,
      background: {
        color: '#fafafa'
      },
      ...defaultOptions
    })
    setDefaultGraphListeners(graphRef.value)
    toSetCellDefaultConfig(graphRef.value)
    graphRef.value.use(useSelection())
    graphRef.value.use(useHistory())
    graphRef.value.use(useTransform())
    graphRef.value.use(useKeyboard())
    graphRef.value.use(useExport())
    graphRef.value.use(useClipboard(graphRef.value))
    dndRef.value = new Dnd({
      target: graphRef.value
    })
    graphRef.value.on(
      'cell:click',
      (args: {
        cell: any
        current?: number // 当前值
        previous?: number // 改变之前的值
        options: any // 透传的 options
      }) => {
        if (args.cell.getData()) {
          const data = args.cell.getData()
          if (data.EventConfig?.type != 1) return
          args.cell.setData({ ...data, btnType: 'info' })
        }
      }
    )
  })
  return {
    graphContainer,
    graphRef,
    dndRef
  }
}
