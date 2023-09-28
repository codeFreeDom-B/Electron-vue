<!--
 * @Author: SUN HENG
 * @Date: 2023-09-21 21:15:26
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 17:00:33
 * @FilePath: \Electronvite\src\views\desiginer\components\DesignSide\DesignSide.vue
 * @Description: 
-->
<template>
  <div class="DesignDomType">
    <SideTop></SideTop>
    <aside class="menuside">
      <SideMenu></SideMenu>
    </aside>
  </div>
</template>
<script lang="ts">
export default { name: 'DesignSide' }
</script>
<script setup lang="ts">
import { SideTop, SideMenu } from './components'
</script>
<style lang="scss" scoped>
.DesignDomType {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .menuside {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>
