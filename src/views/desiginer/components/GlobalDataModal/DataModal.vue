<!--
 * @Author: SUN HENG
 * @Date: 2024-03-13 16:22:52
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-13 17:09:13
 * @FilePath: \Electronvite\src\views\desiginer\components\GlobalDataModal\DataModal.vue
 * @Description: 
-->
<template>
  <NModal
    class="GlobalDataConfigModal"
    v-model:show="props.visible"
    preset="card"
    @update:show="(bool) => $emit('update:visible', bool)"
    size="huge"
    :maskClosable="false"
    title="数据绑定"
    style="width: 36vw; height: 60vh; top: -6vh"
    positive-text="应用"
    negative-text="取消"
  >
    <NInput v-model:value="pattern" placeholder="搜索" />
    <NTree :show-irrelevant-nodes="false" :pattern="pattern" :data="data" block-line />
    <template #footer>
      <div style="display: flex; justify-content: flex-end">
        <div style="margin-right: 20px">
          <NButton @click="() => $emit('update:visible', false)">取消</NButton>
        </div>
        <div>
          <NButton type="success" @click="() => $emit('update:visible', false)">应用</NButton>
        </div>
      </div>
    </template>
  </NModal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TreeOption } from 'naive-ui'
const props = defineProps<{
  visible: boolean
}>()

defineEmits<{
  (e: 'update:visible', data: any): void
}>()

let pattern = ref('')

const data: TreeOption[] = [
  {
    label: '新智慧园区',
    key: '0',
    children: [
      {
        label: '园区大门',
        key: '0-0',
        children: [
          { label: '车辆', key: '0-0-0' },
          { label: '访客', key: '0-0-1' }
        ]
      },
      {
        label: '1号草坪',
        key: '0-1',
        children: [
          { label: '湿度', key: '0-1-0' },
          { label: '浇水', key: '0-1-1' }
        ]
      }
    ]
  },
  {
    label: '智能家居',
    key: '1',
    children: [
      {
        label: '客厅',
        key: '1-0',
        children: [
          { label: '空调', key: '1-0-0' },
          { label: '窗帘', key: '1-0-1' }
        ]
      },
      {
        label: '卧室',
        key: '1-1',
        children: [
          { label: '窗帘', key: '1-1-0' },
          { label: '照明', key: '1-1-1' }
        ]
      }
    ]
  }
]
</script>
