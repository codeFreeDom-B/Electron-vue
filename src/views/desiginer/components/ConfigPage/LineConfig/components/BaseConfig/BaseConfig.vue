<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 21:53:03
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-18 16:21:22
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
// import type { Cell } from '@antv/x6'
import { Timing, Cell } from '@antv/x6'
import Item from '../../../../Item/Item.vue'
import router from '@/router'

let props = defineProps<{
  cell: Cell
}>()

function formatCssOptions(value, svg: SVGElement) {
  const getValue = ({ name, params }: { name: string; params?: string }) => svg[name](params)

  if (/\#\{path\}/.test(value))
    return value.replace('#{path}', getValue({ name: 'getAttribute', params: 'd' }))
  else if (/\#\{length\}/.test(value))
    return value.replace('#{length}', getValue({ name: 'getTotalLength' }))
  else return value
}

let Attrs = cloneDeep(props.cell.getAttrs())
const cellView = props.cell instanceof Cell ? GraphInstance.findViewByCell(props.cell) : props.cell
let targetOptions = {
  type: 'dom',
  value: 'path',
  styles: {
    strokeDasharray: '36, 24',
    fill: 'transparent',
    stroke: '#FF2851',
    strokeWidth: 9
  },
  attrs: {
    d: '#{path}',
    'stroke-linecap': 'round'
  }
}
if (props.cell.isEdge()) {
  const linePath = <SVGPathElement>cellView.container.firstChild

  for (const key in targetOptions.attrs) {
    targetOptions.attrs[key] = formatCssOptions(targetOptions.attrs[key], linePath)
  }

  for (const key in targetOptions.styles) {
    targetOptions.styles[key] = formatCssOptions(targetOptions.styles[key], linePath)
  }

  let [length, percentage] = targetOptions.styles.strokeDasharray.split(',')

  length = length >>> 0
  percentage = percentage >>> 0

  // options.keyframes[0].strokeDashoffset = 0
  // options.keyframes[1].strokeDashoffset = (length + percentage) * 10
}

let edgeData = reactive({
  title: props.cell.getProp('title'),
  zIndex: props.cell.getProp('zIndex'),
  visible: props.cell.visible,
  router: 'normal',
  Attrs: {
    ...Attrs,
    circleGroup: {
      width: '60px',
      height: '20px',
      fill: 'red',
      stroke: '#000000',
      strokeWidth: 1,
      y: -10,
      rx: 10, // 圆角半径
      ry: 10 // 同样也可以只设置rx，如果rx和ry相同的话
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
// 添加动画
const AttrsChange = debounce(() => {
  // @ts-ignore
  const edge = props?.cell
  // @ts-ignore
  const sourcePoint = edge.getSourcePoint() // 获取源节点连接点坐标
  // @ts-ignore
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
      y: -10,
      rx: 10, // 圆角半径
      ry: 10 // 同样也可以只设置rx，如果rx和ry相同的话
    }
  }
  for (let i = 0; i <= counts; i++) {
    const selector = 'rect' + i + new Date().getTime() + edge.id
    markup = [
      ...markup,
      {
        tagName: 'rect',
        selector,
        groupSelector: 'circleGroup'
      }
    ]
    // @ts-ignore
    attrOption[selector] = {
      atConnectionRatio: Number(0 + i * 0.1)
    }
  }
  edge.setMarkup(markup)
  edge.setAttrs(attrOption)
  const handleTransition = () => {
    const circleList = Object.keys(attrOption).filter((item) => item.includes(edge.id))
    circleList.map((item) => {
      // @ts-ignore
      const target = attrOption[item].atConnectionRatio + 0.1
      edge.transition(`attrs/${item}/atConnectionRatio`, target, options)
    })
  }
  const options = {
    delay: 0,
    duration: 1000,
    timing: Timing.linear,
    complete: () => {
      edge.setAttrs(attrOption)
      handleTransition()
    }
  }
  handleTransition()
}, 400)
</script>
