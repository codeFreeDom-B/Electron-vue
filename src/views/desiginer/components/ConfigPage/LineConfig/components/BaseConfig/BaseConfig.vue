<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 21:53:03
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 15:27:44
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\LineConfig\components\BaseConfig\BaseConfig.vue
 * @Description: 
-->
<template>
  <div>
    <Item label="名称" :alone="true">
      <NInput
        type="text"
        maxlength="36"
        minlength="1"
        placeholder="请输入组件名称"
        clearable
        showCount
        v-model:value="edgeData.title"
        @update:value="attributeChange('setProp', 'title')"
      />
    </Item>
    <Item label="层级" :alone="true">
      <n-input-number
        v-model:value="edgeData.zIndex"
        :min="0"
        @update:value="attributeChange('setProp', 'zIndex')"
      />
    </Item>
    <Item label="路由" :alone="true">
      <NSelect
        v-model:value="edgeData.router"
        :options="routers"
        @update:value="() => attributeChange('setRouter', 'router')"
      />
    </Item>
    <Item label="显隐" :alone="true">
      <n-switch v-model:value="edgeData.visible" @update:value="VisibleChange" />
    </Item>
  </div>
</template>
<script lang="ts">
export default { name: 'BaseCofig' }
</script>
<script setup lang="ts">
import { reactive } from 'vue'
import { debounce } from 'lodash'
import type { Cell } from '@antv/x6'
import Item from '../../../../Item/Item.vue'
let props = defineProps<{
  cell: Cell
}>()

let edgeData = reactive({
  title: props.cell.getProp('title'),
  zIndex: props.cell.getProp('zIndex'),
  visible: props.cell.visible
})
const routers = [
  { label: '默认路由', value: 'normal' },
  { label: '正交路由', value: 'orth' },
  { label: '受限正交路由', value: 'oneSide' },
  { label: '智能正交路由', value: 'manhattan' },
  { label: '智能地铁线路由', value: 'metro' },
  { label: '实体关系路由', value: 'er' }
]

const attributeChange = debounce<(fnName: string, attrName: string) => void>((fnName, attrName) => {
  if (attrName == 'router') {
    // @ts-ignore
    return props?.cell[fnName](edgeData[attrName])
  }
  // @ts-ignoretransition
  props?.cell[fnName](attrName, edgeData[attrName])
}, 400)

const VisibleChange = debounce(() => {
  props.cell.setVisible(edgeData?.visible)
  if (!edgeData?.visible) return props.cell.removeTools()
}, 400)
</script>
