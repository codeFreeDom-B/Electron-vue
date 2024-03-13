<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 21:53:03
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-13 16:42:32
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\NodeConfig\components\BaseConfig\BaseConfig.vue
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
    <Item label="显隐" :alone="true">
      <n-switch v-model:value="edgeData.visible" @update:value="VisibleChange" />
    </Item>
    <Item label="数据参数" :alone="true">
      <n-input-group>
        <n-input
          v-model:value="edgeData.data"
          :style="{ width: '70%' }"
          @update:value="setData()"
        />
        <n-button type="primary" ghost @click="handleBind">
          <n-icon :component="Infinite" />
        </n-button>
        <n-button type="primary" ghost> <n-icon :component="CodeSlashSharp" /> </n-button>
      </n-input-group>
    </Item>
    <Item label="高级配置" :alone="true">
      <NButton :focusable="false"> 高级配置 </NButton>
    </Item>
  </div>
  <GlobalDataConfigModal
    v-model:visible="customButtonsData.GlobalApiConfig"
  ></GlobalDataConfigModal>
</template>
<script lang="ts">
export default { name: 'BaseCofig' }
</script>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { debounce } from 'lodash'
import type { Cell } from '@antv/x6'
import Item from '../../../../Item/Item.vue'
import { Infinite, CodeSlashSharp } from '@vicons/ionicons5'
import { NButton } from 'naive-ui'
import GlobalDataConfigModal from '@/views/desiginer/components/GlobalDataModal/DataModal.vue'

let props = defineProps<{
  cell: Cell
}>()
let edgeData = reactive({
  title: props.cell.getProp('title'),
  zIndex: props.cell.getProp('zIndex'),
  visible: props.cell.visible,
  router: 'normal',
  data: null,
  Attrs: {
    line: {
      stroke: '#1890ff',
      strokeDasharray: 5,
      targetMarker: 'classic',
      style: {
        animation: 'ant-line 30s infinite linear'
      }
    }
  }
})
let customButtonsData = ref({
  GlobalApiConfig: false
})
if (props.cell.getData()?.data) {
  edgeData.data = props.cell.getData()?.data
}
// const routers = [
//   { label: '默认路由', value: 'normal' },
//   { label: '正交路由', value: 'orth' },
//   { label: '受限正交路由', value: 'oneSide' },
//   { label: '智能正交路由', value: 'manhattan' },
//   { label: '智能地铁线路由', value: 'metro' },
//   { label: '实体关系路由', value: 'er' }
// ]
// const AttrsChange = debounce(() => {
//   console.log('添加动画', edgeData?.Attrs)

//   props.cell.setAttrs(edgeData?.Attrs)
//   console.log(props.cell.getAttrs(), 'Attrs')
// }, 400)

const attributeChange = debounce<(fnName: string, attrName: string) => void>((fnName, attrName) => {
  if (attrName == 'router') {
    // @ts-ignore
    return props?.cell[fnName](edgeData[attrName])
  }
  // @ts-ignore
  props?.cell[fnName](attrName, edgeData[attrName])
}, 400)
const VisibleChange = debounce(() => {
  props.cell.setVisible(edgeData?.visible)
  if (!edgeData?.visible) return props.cell.removeTools()
}, 400)

const setData = debounce(() => {
  console.log('添加数据', edgeData)

  props.cell.setData({
    data: edgeData.data
  })
  console.log(props.cell, 'Attrs')
}, 400)

// 绑定数据
const handleBind = () => {
  customButtonsData.value.GlobalApiConfig = true
}
</script>
