<!--
 * @Author: SUN HENG
 * @Date: 2024-03-08 17:44:39
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 15:25:15
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\LineConfig\components\Animation\Animation.vue
 * @Description: 
-->
<template>
  <TransitionGroup tag="div" name="fade" class="AnimationItem">
    <Item label="流动状态" :alone="true">
      <NSelect
        v-model:value="edgeData.flowDirection"
        :options="AnimationOptions"
        @update:value="AttrsChange"
      />
    </Item>
    <Item label="触发方式" :alone="true" style="margin-top: 10px">
      <NSelect
        v-model:value="edgeData.TriggerMode"
        :options="TriggerModeOptions"
        @update:value="AttrsChange"
      />
    </Item>
    <Item label="高级配置" :alone="true" style="margin-top: 10px">
      <NButton :focusable="false"> 高级配置 </NButton>
    </Item>
    <Item label="动画守卫配置(暂定)" isVertical style="margin-top: 10px">
      <template #suffix>
        <NButton type="primary" size="tiny" tertiary @click="AttrsChange"> 保存 </NButton>
      </template>
      <n-form :model="edgeData">
        <n-dynamic-input
          v-model:value="edgeData.guardOptions"
          item-style="margin-bottom: 0;"
          :on-create="onCreate"
          #="{ index }"
        >
          <div style="display: flex">
            <n-form-item
              ignore-path-change
              :show-label="false"
              :path="`dynamicInputValue[${index}].name`"
            >
              <n-input
                v-model:value="edgeData.guardOptions[index].name"
                placeholder="Name"
                @keydown.enter.prevent
              />
            </n-form-item>
            <div style="height: 34px; line-height: 34px; width: 40px; margin: 0px">==</div>
            <n-form-item
              ignore-path-change
              :show-label="false"
              :path="`dynamicInputValue[${index}].value`"
            >
              <n-input
                v-model:value="edgeData.guardOptions[index].value"
                placeholder="Value"
                @keydown.enter.prevent
              />
            </n-form-item>
          </div>
        </n-dynamic-input>
      </n-form>
    </Item>
  </TransitionGroup>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { debounce } from 'lodash'
import type { Cell } from '@antv/x6'
import Item from '../../../../Item/Item.vue'

let props = defineProps<{
  cell: Cell
}>()
let edgeData = reactive({
  TriggerMode: props.cell.getData()?.TriggerMode,
  flowDirection: props.cell.getData()?.flowDirection,
  guardOptions: props.cell.getData()?.guardOptions || [{ value: '', name: '' }]
})
let { AnimationOptions } = props.cell.getData()
let TriggerModeOptions = [
  {
    label: '自动播放',
    value: 'autoPlay'
  },
  {
    label: '数据驱动',
    value: 'dataPlay'
  }
]
const onCreate = () => ({
  name: '',
  value: ''
})
const AttrsChange = debounce(() => {
  props.cell.setData(edgeData)
}, 400)
</script>
