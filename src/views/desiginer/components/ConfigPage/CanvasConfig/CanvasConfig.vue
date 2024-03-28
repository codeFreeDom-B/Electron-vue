<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 17:08:19
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 17:33:00
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\CanvasConfig\CanvasConfig.vue
 * @Description: 
-->
<template>
  <div class="CanvasConfig">
    <div class="header"><n-button style="width: 100%" dashed> 画布配置 </n-button></div>
    <div class="backOption">
      <NUpload
        multiple
        directory-dnd
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        :max="5"
      >
        <NUploadDragger>
          <div style="margin-bottom: 12px">
            <NIcon size="48" :depth="3">
              <ArchiveIcon />
            </NIcon>
          </div>
          <NText style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </NText>
        </NUploadDragger>
      </NUpload>
      <div>
        <n-color-picker
          v-model:value="backgroundColor"
          @complete="handleChange"
          :swatches="['#FFFFFF', '#18A058', '#2080F0', '#F0A020', 'rgba(208, 48, 80, 1)']"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

let backgroundColor = ref()
onMounted(() => {
  backgroundColor.value = window.GraphInstance?.background?.options?.background?.color
})

const handleChange = () => {
  window.GraphInstance.drawBackground({
    color: backgroundColor.value
  })
}
</script>
<style lang="scss" scoped>
.CanvasConfig {
  width: 85%;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
  margin-right: 35px;

  .header {
    width: 100%;
  }
}
</style>
