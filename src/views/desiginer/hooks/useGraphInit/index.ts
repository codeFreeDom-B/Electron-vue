/*
 * @Author: SUN HENG
 * @Date: 2023-09-22 12:04:14
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-13 17:37:05
 * @FilePath: \Electronvite\src\views\desiginer\hooks\useGraphInit\index.ts
 * @Description:
 */
import { ref, onMounted, shallowRef } from 'vue'
import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import defaultOptions from "./defaultOption"
import { useClipboard } from '@/views/desiginer/plug/clipboard.plug'
import { useSelection } from '@/views/desiginer/plug/selection.plug'
import { useHistory } from '@/views/desiginer/plug/history.plug'
import { setDefaultGraphListeners,toSetCellDefaultConfig } from '@/views/desiginer/utils'


import { useIpcRenderer } from '@vueuse/electron'
export default function () {
  const graphContainer = ref<HTMLDivElement>()
  const graphRef = shallowRef<Graph>()
  const dndRef = shallowRef<Dnd>()
  onMounted(() => {
    const IpcRenderer = useIpcRenderer()
    IpcRenderer.send('window-max')
    // Window.foo ='1'
    window.GraphInstance = graphRef.value = new Graph({
      container: graphContainer.value,
      background: {
        color: '#fafafa'
      },
      ...defaultOptions,
    //   interacting(cellView) {
    
        
    //     // if (!cellView.cell) return;
    
    //     const { cellMoveable } = cellView.cell.getProp();
    //     console.log( cellView.cell.getProp(),cellMoveable,'cellView.cell');
    //     // if (typeof cellMoveable != "boolean") return true;

    //     // return {
    //     //     nodeMovable: cellMoveable,
    //     //     edgeMovable: cellMoveable,
    //     //     edgeLabelMovable: cellMoveable,
    //     //     vertexMovable: cellMoveable,
    //     //     arrowheadMovable: cellMoveable
    //     // };
    // }
    })
    setDefaultGraphListeners(graphRef.value)
    toSetCellDefaultConfig(graphRef.value)
    graphRef.value.use(useSelection())
    graphRef.value.use(useHistory())
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
