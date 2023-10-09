<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 17:08:02
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-08 22:05:24
 * @FilePath: \Electronvite\src\views\desiginer\components\ConfigPage\LineConfig\LineConfig.vue
 * @Description: 
-->
<template>
  <div class="config">
    <NCard>
      <NTabs default-value="BaseConfig" justify-content="space-evenly" type="line">
        <NTabPane name="BaseConfig" tab="属性">
          <NScrollbar style="max-height: 100%"> <BaseConfig /> </NScrollbar>
        </NTabPane>
        <NTabPane name="Animation" tab="动画"> 动画 </NTabPane>
        <NTabPane name="DataBind" tab="数据绑定"> 数据绑定 </NTabPane>
        <NTabPane name="EventBind" tab="事件绑定"> 事件绑定 </NTabPane>
      </NTabs>
    </NCard>
  </div>
</template>
<script lang="ts">
export default { name: 'LineConfig' }
</script>
<script setup lang="ts">
import BaseConfig from './components/BaseConfig/BaseConfig.vue'
</script>
<style scoped lang="scss">
.config {
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>
