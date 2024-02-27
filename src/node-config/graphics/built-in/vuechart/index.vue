<!--
 * @Author: SUN HENG
 * @Date: 2023-12-19 18:35:56
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-27 17:00:13
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\vuechart\index.vue
 * @Description: 
 
-->
<template>
  <NButton style="width: 100%; height: 100%" type="primary" @click="handlerClick()">
    Primary
  </NButton>
</template>
<script lang="ts">
export default {
  name: 'ButtonSun'
}
</script>
<script setup lang="ts">
import { NButton } from 'naive-ui'
const handlerClick = () => {
  console.log('你好')
}
</script>
