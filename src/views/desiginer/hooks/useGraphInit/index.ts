import { ref, onMounted,shallowRef } from "vue";
import { Graph } from "@antv/x6";
import { Dnd } from '@antv/x6-plugin-dnd'
import { useIpcRenderer } from '@vueuse/electron'
export default function () {
  const graphContainer = ref<HTMLDivElement>()
  const graphRef = shallowRef<Graph>();
  const dndRef = shallowRef<Dnd>();
  onMounted(() => {
    const IpcRenderer = useIpcRenderer()
    IpcRenderer.send('window-max')
    
    graphRef.value= new Graph({
      container: graphContainer.value,
      width: 1920,
      height: 600,
      background: {
        color: 'red'
      }
      
    })
    dndRef.value = new Dnd({
      target: graphRef.value,
    })
  })
  return {
    graphContainer,
    graphRef,
    dndRef
  }
}