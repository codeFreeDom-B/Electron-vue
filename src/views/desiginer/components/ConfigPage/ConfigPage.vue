<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 14:39:31
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-08 21:21:57
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
  line: markRaw(LineConfig)
}
let componentType = ref(componentTypeEnum.page)
onMounted(() => {
  EventEmitter.on(EventEmitterEnum.ACTIVE_CELL, (cell) => {
    if (!cell) return (componentType.value = componentTypeEnum.page)
    if ((cell as Cell).shape == 'edge') {
      componentType.value = componentTypeEnum.line
    } else {
      componentType.value = componentTypeEnum.page
    }
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
