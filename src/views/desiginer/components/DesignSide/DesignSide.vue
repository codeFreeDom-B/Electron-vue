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
  .menuside {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>
