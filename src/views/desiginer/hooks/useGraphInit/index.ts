/*
 * @Author: SUN HENG
 * @Date: 2023-09-22 12:04:14
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 15:35:23
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
import axios from 'axios'
// axios.defaults.baseURL = 'http://172.10.10.166:3000';
const NodesDatas = useNodesDatas()
export default function () {
  // setInterval(() => {
  //   axios.get('/nodes').then(res => {
  //     console.log(res,'api/nodes');
  //   })
  // },1000)

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
  })
  return {
    graphContainer,
    graphRef,
    dndRef
  }
}
