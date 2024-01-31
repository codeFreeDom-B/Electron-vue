<!--
 * @Author: SUN HENG
 * @Date: 2023-11-13 10:21:09
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-31 15:13:56
 * @FilePath: \Electronvite\src\views\WorkBenches\WorkBenches.vue
 * @Description: 
-->
<template>
  <div class="benches">
    <div class="header">
      <div class="left-info">
        <div style="font-size: 32px">Welcome to Venus!</div>
      </div>
      <div class="right-search">
        <NInput round placeholder="搜索">
          <template #suffix>
            <n-icon :component="FlashOutline" />
          </template>
        </NInput>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { FlashOutline } from '@vicons/ionicons5'
import BaseApi from '@/apis/login'
onMounted(() => {
  BaseApi.getUserInfo({}).then((res) => {
    console.log(res, 'BaseApi')
  })
})
</script>
<style lang="scss" scoped>
.benches {
  width: 100%;
  height: 100%;
  // user-select: none;
  // -webkit-app-region: no-drag;
}
.header {
  display: flex;
  align-items: center;
  height: 75px;
  width: 100%;
  .left-info {
    color: #5acea7;
    flex: 1;
    div {
      padding-left: 100px;
    }
    // text-align: center;
  }
  .right-search {
    width: 300px;
    margin-right: 100px;
    user-select: none;
    -webkit-app-region: no-drag;
  }
}
</style>
