<!--
 * @Author: SUN HENG
 * @Date: 2023-09-21 15:12:34
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-28 16:47:11
 * @FilePath: \Electronvite\src\views\desiginer\X6\X6Desigin.vue
 * @Description: 
-->
<template>
  <EditPage class="EditPage">
    <!-- <WorkSpace> </WorkSpace> -->
    <template #canvas>
      <div
        ref="graphContainer"
        class="graphContainer"
        @dragover="handleDragOver($event)"
        @dragenter="handleDragEnter"
      ></div>
    </template>
  </EditPage>
</template>
<script setup lang="ts">
import EditPage from '../index'
import useGraphInit from '../hooks/useGraphInit'
import eventEmitter from '../hooks/useEventMitt'
import WorkSpace from '../components/DesignGraph/DesignGraph.vue'
import { nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const { dndRef, graphRef, graphContainer } = useGraphInit()
const route = useRoute()

onMounted(() => {
  nextTick().then(async () => {
    // @ts-ignore
    eventEmitter.on('drag', (val) => {
      let { node, event } = val
      dndRef.value?.start(dndRef.value.draggingGraph.createNode(node), event)
    })
  })
})

const handleDragOver = (e: Event) => {
  e.preventDefault()
}
const handleDragEnter = () => {
  console.log('ss')
}
</script>
<style scoped lang="scss">
.EditPage {
  width: 100%;
  height: 100%;
  .graphContainer {
    overflow: hidden;
    user-select: none;
    -webkit-app-region: no-drag;
    :deep(.x6-widget-selection-box) {
      border: 2px dashed rgb(99, 226, 183);
      box-shadow: 0 0 0 0;
    }
    :deep(.x6-widget-transform) {
      border: 0px;
    }
  }
}
</style>
<style>
@keyframes ant-line {
  to {
    stroke-dashoffset: -1000;
  }
}
</style>
