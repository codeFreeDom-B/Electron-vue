<!--
 * @Author: SUN HENG
 * @Date: 2024-03-28 17:41:22
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 18:21:44
 * @FilePath: \Electronvite\src\views\desiginer\components\DataBind\DataBind.vue
 * @Description: 
-->
<template>
  <n-modal
    style="width: 800px; height: 700px"
    v-model:show="showModal"
    preset="dialog"
    title="测点选择"
    positive-text="确认"
    negative-text="取消"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  >
    <template #default>
      <div style="width: 700px; height: 550px; margin: 25px auto">
        <n-input v-model:value="pattern" placeholder="搜索" />
        <n-switch v-model:value="showIrrelevantNodes">
          <template #checked> 展示搜索无关的节点 </template>
          <template #unchecked> 隐藏搜索无关的节点 </template>
        </n-switch>
        <n-tree
          checkable
          cascade
          multiple
          checkbox-placement="right"
          :show-irrelevant-nodes="showIrrelevantNodes"
          :pattern="pattern"
          :data="data"
          block-line
        />
      </div>
    </template>
    <template #action>
      <div style="display: flex">
        <n-button type="tertiary" style="margin-right: 20px" @click="cancelCallback">
          取消
        </n-button>
        <n-button type="primary" @click="submitCallback"> 确认 </n-button>
      </div>
    </template>
  </n-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { TreeOption } from 'naive-ui'
const data: TreeOption[] = [
  {
    label: '0',
    key: '0',
    children: [
      {
        label: '0-0',
        key: '0-0',
        children: [
          { label: '0-0-0', key: '0-0-0' },
          { label: '0-0-1', key: '0-0-1' }
        ]
      },
      {
        label: '0-1',
        key: '0-1',
        children: [
          { label: '0-1-0', key: '0-1-0' },
          { label: '0-1-1', key: '0-1-1' }
        ]
      }
    ]
  },
  {
    label: '1',
    key: '1',
    children: [
      {
        label: '1-0',
        key: '1-0',
        children: [
          { label: '1-0-0', key: '1-0-0' },
          { label: '1-0-1', key: '1-0-1' }
        ]
      },
      {
        label: '1-1',
        key: '1-1',
        children: [
          { label: '1-1-0', key: '1-1-0' },
          { label: '1-1-1', key: '1-1-1' }
        ]
      }
    ]
  }
]
const pattern = ref('')
const showIrrelevantNodes = ref(false)

const showModal = ref(true)
const cancelCallback = () => {
  showModal.value = false
  window.$message.success('Cancel')
}
const submitCallback = () => {
  showModal.value = false
  window.$message.success('Submit')
}
</script>
