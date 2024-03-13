<!--
 * @Author: SUN HENG
 * @Date: 2023-11-21 11:38:54
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-13 20:27:31
 * @FilePath: \Electronvite\src\views\desiginer\components\EvnetsBind\EvnetsBind.vue
 * @Description: 
-->
<template>
  <!-- <NTree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    key-field="whateverKey"
    label-field="whateverLabel"
    children-field="whateverChildren"
    selectable
  /> -->
  <div style="display: flex; justify-content: center">
    <NButton type=""> 增加事件 </NButton>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, reactive } from 'vue'
import { repeat } from 'seemly'
import type { TreeOption } from 'naive-ui'

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
