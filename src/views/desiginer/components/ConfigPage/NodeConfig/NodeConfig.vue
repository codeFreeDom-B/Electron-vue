<!--
 * @Author: SUN HENG
 * @Date: 2023-11-13 11:22:43
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-18 11:59:54
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\NodeConfig\NodeConfig.vue
 * @Description: 
-->
<template>
  <div class="config">
    <NCard>
      <NTabs default-value="BaseConfig" justify-content="space-evenly" type="line">
        <NTabPane name="BaseConfig" tab="属性">
          <NScrollbar style="max-height: 100%"> <BaseConfig :cell="props.cell" /> </NScrollbar>
        </NTabPane>
        <NTabPane name="Animation" tab="动画"> 动画 </NTabPane>
        <NTabPane name="DataBind" tab="数据绑定">
          <NButton @click="handleClick">绑定</NButton>
        </NTabPane>
        <NTabPane name="EventBind" tab="事件绑定"> <EventsBinds :cell="props.cell" /> </NTabPane>
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
import { onMounted } from 'vue'
import type { NButton } from 'naive-ui'
let props = defineProps<{
  cell: Cell
}>()
const handleClick = () => {
  props.cell.setData({
    bindEvent: 'click'
  })
}
</script>
<style scoped lang="scss">
.config {
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>
