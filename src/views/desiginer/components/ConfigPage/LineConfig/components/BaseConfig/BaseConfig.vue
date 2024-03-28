<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 21:53:03
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 11:03:19
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
    <Item label="流动动画" :alone="true">
      <n-switch v-model:value="edgeData.isFlow" @update:value="AttrsChange" />
    </Item>
    <Item label="流动方式" :alone="true">
      <NSelect
        v-model:value="edgeData.Attrs.line.style.animation"
        :options="AnimationEnum"
        @update:value="AttrsChange"
      />
    </Item>
    <Item label="高级配置" :alone="true">
      <NButton :focusable="false"> 高级配置 </NButton>
    </Item>
  </div>
</template>
<script lang="ts">
export default { name: 'BaseCofig' }
</script>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { debounce } from 'lodash'
import type { Cell } from '@antv/x6'
import Item from '../../../../Item/Item.vue'
import router from '@/router'
import { nextTick } from 'process'

let props = defineProps<{
  cell: Cell
}>()

let edgeData = reactive({
  title: props.cell.getProp('title'),
  zIndex: props.cell.getProp('zIndex'),
  visible: props.cell.visible,
  isFlow: false,
  router: 'normal',
  Attrs: {
    line: {
      connection: true,
      stroke: '#7eb2fb',
      connector: { name: 'rounded' },
      strokeDasharray: '10,20',
      // 未知属性
      // strokeLinejoin: 'round',
      strokeWidth: 16,
      strokeLinecap: 'round',
      style: {
        animation: ''
      }
    }
  }
})

let AnimationEnum = [
  { label: '正向流动', value: '20s linear 0s infinite normal none running ant-line' },
  { label: '反向流动', value: '20s linear 0s infinite reverse none running ant-line' },
  { label: '停止', value: '' }
]
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
const AttrsChange = debounce(() => {
  if (edgeData.isFlow) {
    props.cell.setAttrs(edgeData?.Attrs)
    // console.log(props.cell.getAttrs(), '我是 props.cell')
  } else {
    edgeData.Attrs.line.style.animation = ''
    props.cell.setAttrs(edgeData?.Attrs)
  }
}, 400)
</script>
