<!--
 * @Author: SUN HENG
 * @Date: 2023-09-08 11:00:55
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-11-13 09:52:28
 * @FilePath: \Electronvite\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route, 'rousadasdte')
</script>

<template>
  <div class="main">
    <!-- <n-watermark
      content="孙恒"
      cross
      fullscreen
      :font-size="16"
      :line-height="16"
      :width="384"
      :height="384"
      :x-offset="12"
      :y-offset="0"
      :image-width="64"
      :image-opacity="0.24"
    /> -->
    <NConfigProvider class="config" :theme="darkTheme">
      <RouterView></RouterView>
    </NConfigProvider>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.main {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 20px;
  // background: #fafafa;
  overflow: hidden;
  .config {
    width: 100%;
    height: 100%;
  }
}
</style>
<style>
body {
  background: #ffffff00;
}
</style>
