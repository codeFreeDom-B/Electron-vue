<template>
  <EditPage class="EditPage">
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
import { nextTick, onMounted } from 'vue'
const { dndRef, graphRef, graphContainer } = useGraphInit()
onMounted(() => {
  nextTick().then(() => {
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
  background: red;
  .graphContainer {
    user-select: none;
    -webkit-app-region: no-drag;
  }
}
</style>
