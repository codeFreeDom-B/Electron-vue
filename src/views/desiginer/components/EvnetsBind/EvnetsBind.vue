<!--
 * @Author: SUN HENG
 * @Date: 2023-11-21 11:38:54
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-15 09:55:59
 * @FilePath: \Electronvite\src\views\desiginer\components\EvnetsBind\EvnetsBind.vue
 * @Description: 
-->
<template>
  <NCollapse>
    <NCollapseItem
      v-for="item in EventList"
      :key="item.label"
      :title="item.label"
      :name="item.label"
    >
      <Item label="事件类型" :alone="true">
        <NSelect v-model:value="item.action" :options="options"
      /></Item>
      <div>
        <div>选择节点</div>
        <NTransfer
          select-all-text="全选"
          ref="transfer"
          v-model:value="item.target"
          :options="cellList"
          @mouseenter="handleMouse"
        />
      </div>
      <div style="display: flex; justify-content: center">
        <NButton type="info" @click="handleSave"> 保存 </NButton>
      </div>
    </NCollapseItem>
  </NCollapse>

  <div style="display: flex; justify-content: center">
    <NButton type="primary" dashed @click="handleAddEvent"> 增加事件 </NButton>
  </div>
</template>

<script lang="ts" setup>
import type { Cell } from '@antv/x6'
import { EventTypeEnum } from './index.d'
import { ref, onMounted } from 'vue'
import Item from '../Item/Item.vue'
import { cloneDeep } from 'lodash'
let props = defineProps<{
  cell: Cell
}>()
let EventList = ref<
  {
    label: string
    action: EventTypeEnum
    target: []
    condition: any
  }[]
>([])
let options = ref([
  {
    label: '单击',
    value: EventTypeEnum.CLICK
  },
  {
    label: '双击',
    value: EventTypeEnum.DBCLICK
  },
  {
    label: '值变化',
    value: EventTypeEnum.CHANGE
  }
])
let cellList = ref<
  {
    label: string
    value: string
    disabled: boolean
  }[]
>([])
onMounted(() => {
  let cells = cloneDeep(window.GraphInstance.getCells())
  EventList.value = props.cell.getData()?.EventConfig || []
  cells.map((item) => {
    cellList.value.push({
      label: item.getProp('title'),
      value: item.id,
      disabled: false
    })
  })
})
const handleAddEvent = () => {
  EventList.value.push({
    label: `事件${EventList.value.length + 1}`,
    action: EventTypeEnum.CLICK,
    target: [],
    condition: null
  })
}
const handleSave = () => {
  props.cell.setData({
    ...props.cell.getData(),
    EventConfig: EventList.value
  })
}
const handleMouse = () => {
  console.log(handleMouse, '1212')
}
// const eventsBindData = reactive<CustomEventsConfigIns[]>(configEventsData() || [])

// function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
//   if (!level) return undefined
//   return repeat(6 - level, undefined).map((_, index) => {
//     const key = '' + baseKey + level + index
//     return {
//       whateverLabel: createLabel(level),
//       whateverKey: key,
//       whateverChildren: createData(level - 1, key)
//     }
//   })
// }

// function createLabel(level: number): string {
//   if (level === 4) return '道生一'
//   if (level === 3) return '一生二'
//   if (level === 2) return '二生三'
//   if (level === 1) return '三生万物'
//   return ''
// }
// const data = createData()
// let defaultExpandedKeys = ref(['40', '41'])
</script>
