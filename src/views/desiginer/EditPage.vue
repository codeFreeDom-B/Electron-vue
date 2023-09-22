<template>
  <NLayout position="absolute" class="EditPage">
    <NLayout-header style="height: 64px" bordered>
      <DesignHeader>
        <template #actionbtn>
          <template v-for="item in ActionBar" :key="item.id">
            <NButton
              type="primary"
              :render-icon="item.icon"
              size="large"
              style="margin-right: 20px"
            >
              {{ item.name }}</NButton
            >
          </template>
        </template>
      </DesignHeader>
    </NLayout-header>
    <NLayout has-sider position="absolute" style="top: 64px">
      <NLayout-sider
        bordered
        content-style="padding: 24px;"
        show-trigger="bar"
        collapse-mode="width"
        :collapsed-width="64"
        :width="330"
        :native-scrollbar="false"
      >
        <DesignSide></DesignSide>
      </NLayout-sider>
      <NLayout content-style="padding: 24px;">
        <slot name="canvas"></slot>
      </NLayout>
    </NLayout>
  </NLayout>
</template>
<script lang="ts">
export default { name: 'EditorPage' }
</script>
<script setup lang="ts">
import { DesignHeader, DesignSide } from './components/index'
import { NButton, NLayout } from 'naive-ui'
import { useEditPageStore } from '@/stores/modules/editPageStore/editPageStore'
const EditPageStore = useEditPageStore()
const ActionBar = EditPageStore.getActionBar
</script>
<style lang="scss" scoped>
.EditPage {
  width: 100%;
  height: 100%;
  :deep(.n-layout-toggle-bar) {
    user-select: none;
    -webkit-app-region: no-drag;
  }
  :deep(.n-scrollbar-content) {
    padding: 0 !important;
    height: 100%;
  }
}
</style>
