<!--
 * @Author: SUN HENG
 * @Date: 2023-09-21 21:32:10
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 17:01:28
 * @FilePath: \Electronvite\src\views\desiginer\components\DesignSide\components\SideTop\SideTop.vue
 * @Description: 
-->
<template>
  <div class="side_top">
    <div style="min-width: 64px; text-align: center">组件</div>
    <div>
      <n-input round placeholder="搜索"> </n-input>
    </div>
  </div>
</template>
<script lang="ts">
export default { name: 'SideTop' }
</script>
<script setup lang="ts"></script>
<style scoped lang="scss">
.side_top {
  width: 100%;
  height: 42px;
  line-height: 42px;
  display: flex;
  user-select: none;
  -webkit-app-region: no-drag;
  border-bottom: 1px solid var(--n-color);
  div:nth-child(2) {
    flex: 1;
  }
}
</style>
