<script setup lang="ts">
import { LayOut } from './components'
import Login from './views/login/index.vue'
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
    <!-- <Login></Login> -->
    <!-- <LayOut></LayOut> -->
    <RouterView></RouterView>
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
}
</style>
<style>
body {
  background: #ffffff00;
}
</style>
