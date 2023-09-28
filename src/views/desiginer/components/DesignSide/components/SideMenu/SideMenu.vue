<!--
 * @Author: SUN HENG
 * @Date: 2023-09-22 15:29:04
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 17:04:17
 * @FilePath: \Electronvite\src\views\desiginer\components\DesignSide\components\SideMenu\SideMenu.vue
 * @Description: 
-->
<template>
  <div class="packageLsit">
    <NMenu
      v-model:value="defaultMenuItem"
      :options="MenuOptions"
      @update:value="handleChage"
    ></NMenu>
  </div>
  <div class="menumeat">
    <DesignDom :defaultMenu="defaultMenu"></DesignDom>
  </div>
</template>
<script lang="ts">
export default { name: 'SideMenu' }
</script>
<script setup lang="ts">
import { DesignDom } from '../index'
import getpageList from '@/views/desiginer/hooks/useMenuList'
const { MenuOptions, defaultMenuItem, handleChage, defaultMenu } = getpageList()
</script>
<style lang="scss" scoped>
.packageLsit {
  min-width: 64px;
  height: 100%;
  user-select: none;
  -webkit-app-region: no-drag;
  background: #232324;
  :deep(.n-menu-item) {
    height: 68px;
    .n-menu-item-content {
      padding: 0;
      display: flex;
      padding-left: 0px !important;
      justify-content: center;
      flex-direction: column;
      .n-menu-item-content__icon {
        margin-right: 0 !important;
      }
    }
  }
}
.menumeat {
  flex: 1;
  display: flex;
}
</style>
