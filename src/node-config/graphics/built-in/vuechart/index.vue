<!--
 * @Author: SUN HENG
 * @Date: 2023-12-19 18:35:56
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-14 17:09:29
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\vuechart\index.vue
 * @Description: 
 
-->
<template>
  <NButton style="width: 100%; height: 100%" :type="type" @click="handlerClick()"> 按钮 </NButton>
</template>
<script lang="ts">
export default {
  name: 'ButtonSun'
}
</script>
<script setup lang="ts">
import { NButton } from 'naive-ui'
import { inject, ref, onMounted } from 'vue'

const type = ref('primary')
onMounted(() => {
  const getNode = inject('getNode')
  const node = getNode()
  node.on('change:data', () => {
    console.log(node.getData(), 'lalalalal')
    if (node.getData()) {
      if (node.getData()?.btnType) {
        type.value = node.getData().btnType
      }
    }
  })
})

const handlerClick = () => {
  console.log('你好')
}
</script>
