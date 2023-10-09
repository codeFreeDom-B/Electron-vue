<!--
 * @Author: SUN HENG
 * @Date: 2023-09-09 12:07:22
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-08 16:57:39
 * @FilePath: \Electronvite\src\components\Layout\components\LayoutSide\LayOutSide.vue
 * @Description: 
-->
<template>
  <NLayout has-sider sider-placement="right" style="height: 100%">
    <NLayout>
      <slot name="content"></slot>
    </NLayout>
    <NLayoutSider
      bordered
      :show-trigger="isTrigger"
      collapse-mode="width"
      :collapsed="!isTrigger"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      class="menu"
    >
      <NMenu :collapsed-width="64" :collapsed-icon-size="40" :options="menuOptions" />
    </NLayoutSider>
  </NLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref, VNodeChild } from 'vue'
import { useMenuOptionStore } from '@/stores/modules/menuOptionsStore/menuOptionsStore'
import { useRouter } from 'vue-router'
const menuOptionsStore = useMenuOptionStore()
const menuOptions = menuOptionsStore.getMenuOptions
let activeKey: Ref<string | (() => VNodeChild)> = ref(menuOptions[2].key as () => VNodeChild)
let isTrigger: Ref<boolean | string> = ref('bar')
const Router = useRouter()
Router.beforeEach((to, from, next) => {
  isTrigger.value = false
  next()
})
</script>
<style scoped lang="scss">
.menu {
  user-select: none;
  -webkit-app-region: no-drag;
  :deep(.n-menu-item):hover {
    background: #18a058;
    --n-item-color-hover: rgba(243, 243, 245, 0);
    .n-menu-item-content--selected {
      a {
        color: #fafafa !important;
      }
    }
    a {
      color: #fafafa !important;
    }
  }
  :deep(.n-menu) {
    .n-menu-item {
      margin-top: 22px;
    }
  }
  :deep(.n-menu-item-content):hover {
    background: #18a058;
  }
  :deep(.n-layout-toggle-bar) {
    user-select: none;
    -webkit-app-region: no-drag;
  }
}
</style>
