<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 17:08:02
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 17:42:00
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\LineConfig\LineConfig.vue
 * @Description: 
-->
<template>
  <div class="config">
    <NCard>
      <NTabs default-value="BaseConfig" justify-content="space-evenly" type="line">
        <NTabPane name="BaseConfig" tab="属性">
          <NScrollbar style="max-height: 100%"> <BaseConfig :cell="cell" /> </NScrollbar>
        </NTabPane>
        <NTabPane name="Animation" tab="动画">
          <Animation :cell="cell"></Animation>
        </NTabPane>
        <NTabPane name="DataBind" tab="数据绑定">
          <DataBind></DataBind>
        </NTabPane>
        <NTabPane name="EventBind" tab="事件绑定"> <EventsBinds :cell="cell" /> </NTabPane>
      </NTabs>
    </NCard>
  </div>
</template>
<script lang="ts">
export default { name: 'LineConfig' }
</script>
<script setup lang="ts">
import type { Cell } from '@antv/x6'
import BaseConfig from './components/BaseConfig/BaseConfig.vue'
import EventsBinds from '../../EvnetsBind/EvnetsBind.vue'
import DataBind from '../../DataBind/DataBind.vue'
import { onMounted } from 'vue'
import Animation from './components/Animation/Animation.vue'
defineProps<{
  cell: Cell
}>()
</script>
<style scoped lang="scss">
.config {
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>
