<script setup lang="ts">
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  if (navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then((mediastream) => {
        nextTick().then(() => {
          // 返回的是Mediastream，并不是videotrack
          let videoTrack = mediastream.getVideoTracks()[0]

          // 如果需要播放，则可以直接使用auido播放
          let videoElement = document.getElementById('localVideo')
          if (!videoElement) return
          videoElement.srcObject = mediastream
          videoElement.play()
        })
      })
      .catch((err) => {
        console.log(err, '我进行了但是发生了错误')

        // 获取摄像头失败，可以通过 err.name 或者 err.message 来判断错误原因，err并没有返回错误错误码
      })
  } else {
    // 浏览器不支持获取屏幕共享，有可能是当前页面不是https，也可能是当前浏览器不支持屏幕共享
  }
})
</script>

<template>
  <div class="content">
    <video id="localVideo" controls></video>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  background: red;
}
#localVideo {
  width: 400px;
  height: 300px;
  background: red;
}
</style>
