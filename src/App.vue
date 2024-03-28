<!--
 * @Author: SUN HENG
 * @Date: 2023-09-08 11:00:55
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-26 17:35:33
 * @FilePath: \Electronvite\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import { darkTheme, lightTheme, zhCN } from 'naive-ui'
// 先加载一会,免得读取文件慢
import { useDesignMenuStore } from '@/stores/modules/designMenuStore/designMenuStore'
const DesignMenuStore = useDesignMenuStore()
DesignMenuStore.getPackageListData()
// import { , dateZhCN } from 'naive-ui'
import { MessagePlugin } from '@/views/components/plugins/MessagePlugin/index'
import { LoadingPlugin } from '@/views/components/plugins/LoadingPlugin/index'
import { onMounted } from 'vue'
</script>

<template>
  <div class="main">
    <NConfigProvider class="config" :locale="zhCN" :theme="darkTheme">
      <RouterView></RouterView>
      <NLoadingBarProvider>
        <LoadingPlugin> <slot></slot> </LoadingPlugin>
      </NLoadingBarProvider>

      <NMessageProvider>
        <MessagePlugin></MessagePlugin>
        <slot></slot>
      </NMessageProvider>
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
