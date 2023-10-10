<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 14:39:31
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-09 13:43:19
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\ConfigPage.vue
 * @Description: 
-->
<template>
  <Transition>
    <div class="pageconfig">
      <component :is="componentType"></component>
    </div>
  </Transition>
</template>
<script lang="ts">
export default { name: 'ConfigPage' }
</script>
<script setup lang="ts">
import { markRaw, onMounted, ref } from 'vue'
import LineConfig from './LineConfig/LineConfig.vue'
import CanvasPage from './CanvasConfig/CanvasConfig.vue'
import { EventEmitterEnum } from '@/views/desiginer/utils/EventMitt'
import EventEmitter from '@/views/desiginer/hooks/useEventMitt'
import type { Cell } from '@antv/x6'

const componentTypeEnum = {
  page: markRaw(CanvasPage),
  edge: markRaw(LineConfig),
  node: markRaw(CanvasPage)
}
let componentType = ref(componentTypeEnum.page)
onMounted(() => {
  EventEmitter.on(EventEmitterEnum.ACTIVE_CELL, (cell) => {
    console.log(cell, 'cellaaaa')
    if (!cell) return (componentType.value = componentTypeEnum.page)

    // @ts-ignore
    componentType.value = componentTypeEnum[cell.shape]
  })
})
</script>
<style scoped lang="scss">
.pageconfig {
  width: 349px;
  height: 100%;
  // background: red;
  user-select: none;
  -webkit-app-region: no-drag;
}
</style>
