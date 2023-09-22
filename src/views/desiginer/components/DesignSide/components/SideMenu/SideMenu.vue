<template>
  <div class="packageLsit">
    <NMenu :options="MenuOptions" on-update:value="handleChage"></NMenu>
  </div>
  <div class="menumeat"></div>
</template>
<script lang="ts">
export default { name: 'SideMenu' }
</script>
<script setup lang="ts">
import getpageList from '@/views/desiginer/hooks/useMenuList'
const { MenuOptions } = getpageList()
const handleChage = () => {
  console.log(1111)
}
</script>
<style lang="scss" scoped>
.packageLsit {
  width: 64px;
  height: 100%;
  user-select: none;
  -webkit-app-region: no-drag;
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
  background: red;
}
</style>
