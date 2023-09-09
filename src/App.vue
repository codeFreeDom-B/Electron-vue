<script setup lang="ts"></script>

<template>
  <div class="main">
    <n-watermark
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
    />
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
  width: 98vw;
  height: 98vh;
  border-radius: 20px;
  background: #fafafa;
  overflow: hidden;
}
</style>
<style>
body {
  background: #ffffff00;
}
</style>
