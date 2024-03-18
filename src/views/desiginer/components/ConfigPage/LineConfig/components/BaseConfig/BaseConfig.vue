<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 21:53:03
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-18 09:41:39
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
      <n-switch @update:value="AttrsChange" />
    </Item>
    <Item label="宽度" :alone="true">
      <n-input-number
        v-model:value="edgeData.Attrs.line.strokeWidth"
        :min="0"
        @update:value="AttrsChange"
      />
    </Item>
    <!-- <Item label="边宽度" :alone="true">
      <n-input-number
        v-model:value="edgeData.Attrs.stroke.strokeWidth"
        :min="0"
        @update:value="AttrsChange"
      />
    </Item> -->
    <Item label="高级配置" :alone="true">
      <NButton :focusable="false"> 高级配置 </NButton>
    </Item>
  </div>
</template>
<script lang="ts">
export default { name: 'BaseCofig' }
</script>
<script setup lang="ts">
import { reactive } from 'vue'
import { debounce, cloneDeep } from 'lodash'
import type { Cell } from '@antv/x6'
import { Timing } from '@antv/x6'
import Item from '../../../../Item/Item.vue'
import router from '@/router'

let props = defineProps<{
  cell: Cell
}>()

let Attrs = cloneDeep(props.cell.getAttrs())

let edgeData = reactive({
  title: props.cell.getProp('title'),
  zIndex: props.cell.getProp('zIndex'),
  visible: props.cell.visible,
  router: 'normal',
  Attrs: {
    ...Attrs,
    c7: {
      stroke: '#f5222d',
      fill: '#fe854f',
      // 路径值[0,1]
      atConnectionRatio: 0,
      strokeWidth: 1,
      cursor: 'pointer',
      y: '-10px'
    }
  }
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
  // @ts-ignore
  props?.cell[fnName](attrName, edgeData[attrName])
}, 400)
const VisibleChange = debounce(() => {
  props.cell.setVisible(edgeData?.visible)
  if (!edgeData?.visible) return props.cell.removeTools()
}, 400)
const AttrsChange = debounce(() => {
  // @ts-ignore
  const edge = props?.cell
  const sourcePoint = edge.getSourcePoint() // 获取源节点连接点坐标
  const targetPoint = edge.getTargetPoint() // 获取目标节点连接点坐标
  const length = Math.hypot(targetPoint.x - sourcePoint.x, targetPoint.y - sourcePoint.y)
  const counts = Math.floor(length / (60 + 20 + 14))
  let markup = cloneDeep(props.cell.getMarkup())
  const attrOption = {
    circleGroup: {
      width: '60px',
      height: '20px',
      fill: 'red',
      stroke: '#000000',
      strokeWidth: 1,
      rx: 10, // 圆角半径
      ry: 10 // 同样也可以只设置rx，如果rx和ry相同的话
    }
  }
  for (let i = 0; i <= counts; i++) {
    const selector = 'rect' + i + edge.id
    markup = [
      ...markup,
      {
        tagName: 'rect',
        selector,
        groupSelector: 'circleGroup'
      }
    ]
    attrOption[selector] = {
      atConnectionLengthKeepGradient: 0 + i * 80
    }
  }
  edge.setMarkup(markup)
  edge.setAttrs(attrOption)
  const handleTransition = () => {
    const circleList = Object.keys(attrOption).filter((item) => item !== 'circleGroup')
    circleList.map((item) => {
      const target = attrOption[item].atConnectionLengthKeepGradient + 80
      edge.transition(`attrs/${item}/atConnectionLengthKeepGradient`, target, options)
    })
  }
  const options = {
    delay: 0,
    duration: 1500,
    timing: Timing.linear,
    complete: () => {
      edge.setAttrs(attrOption)
      handleTransition()
    }
  }
  handleTransition()
  console.log(new Date().getTime(), 'procell213')

  // if (mark.length < 3) {
  //   mark.push({
  //     tagName: 'rect',
  //     selector: 'c7',
  //     attrs: {
  //       width: '60px',
  //       height: '20px',
  //       fill: '#ffffff',
  //       stroke: '#000000',
  //       strokeWidth: 1,
  //       rx: 10, // 圆角半径
  //       ry: 10 // 同样也可以只设置rx，如果rx和ry相同的话
  //     }
  //   })
  //   props.cell.setMarkup(mark)
  // }
  // props.cell.setAttrs(edgeData?.Attrs)
  // const options = {
  //   delay: 0,
  //   duration: 2000,
  //   timing: Timing.linear
  // }

  // props.cell.transition('attrs/c7/atConnectionRatio', 1, options)
}, 400)
</script>
