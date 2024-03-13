<!--
 * @Author: SUN HENG
 * @Date: 2023-12-19 18:35:56
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-13 18:01:11
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\vueText\index.vue
 * @Description: 
 
-->
<template>
  <div>{{ NodeData }}</div>
</template>
<script lang="ts">
export default {
  name: 'TextSun'
}
</script>
<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
let NodeData = ref('又要马儿跑，又要马儿不吃草')
onMounted(() => {
  const getNode = inject('getNode')
  const node = getNode()
  NodeData.value = node.getData().data

  node.on('change:data', ({ current }) => {
    NodeData.value = current.data
  })
})
</script>

<script setup lang="ts"></script>
