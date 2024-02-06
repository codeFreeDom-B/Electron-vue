<!--
 * @Author: SUN HENG
 * @Date: 2023-09-21 15:19:07
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 16:09:31
 * @FilePath: \Electronvite\src\views\desiginer\EditPage.vue
 * @Description: 
-->
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
              style="margin-right: 20px; user-select: none; -webkit-app-region: no-drag"
              @click="handleClick(item.id)"
            >
              {{ item.name }}</NButton
            >
          </template>
        </template>
      </DesignHeader>
    </NLayout-header>

    <NLayout has-sider position="absolute" style="top: 64px" sider-placement="right">
      <NLayoutSider
        class="node-side"
        bordered
        content-style="padding: 24px;"
        show-trigger="bar"
        collapse-mode="width"
        :collapsed-width="64"
        :width="330"
        :native-scrollbar="false"
      >
        <DesignSide></DesignSide>
      </NLayoutSider>

      <NLayout content-style="padding: 24px; overflow:hidden;">
        <slot name="canvas"> </slot>
      </NLayout>
      <NLayoutSider
        bordered
        content-style="padding: 24px;"
        show-trigger="bar"
        collapse-mode="width"
        :collapsed-width="0"
        :width="330"
        :native-scrollbar="false"
      >
        <ConfigPage></ConfigPage>
      </NLayoutSider>
    </NLayout>
  </NLayout>
</template>
<script lang="ts">
export default { name: 'EditorPage' }
</script>
<script setup lang="ts">
import { DesignHeader, DesignSide } from './components/index'
import { NButton, NLayout } from 'naive-ui'
import { useSelectNode } from '@/views/desiginer/hooks/useSelectNode'
import { EventEmitterEnum } from '@/views/desiginer/utils/EventMitt'
import EventEmitter from '@/views/desiginer/hooks/useEventMitt'
import { ConfigPage } from './components/ConfigPage'
import { useEditPageStore } from '@/stores/modules/editPageStore/editPageStore'
import { onMounted, computed } from 'vue'
import { Graph, type Cell } from '@antv/x6'
import { useRouter } from 'vue-router'
import { useIpcRenderer } from '@vueuse/electron'
const IpcRenderer = useIpcRenderer()

const EditPageStore = useEditPageStore()
const ActionBar = EditPageStore.getActionBar
const router = useRouter()
onMounted(() => {
  EventEmitter.on(EventEmitterEnum.CELL_SELECT, (cell) => {
    useSelectNode(cell as Cell)
  })
})
const handleClick = (key: number) => {
  if (key == 2) {
    GraphInstance.toPNG(
      (res: any) => {
        console.log(res, 'toPNG')
      },
      { width: 260, height: 180, backgroundColor: '#333' }
    )
  } else if (key == 3) {
    router.push({
      name: 'Main'
    })
    IpcRenderer.send('window-restore')
  }
}
</script>
<style lang="scss" scoped>
@keyframes ant-line {
  to {
    stroke-dashoffset: -1000;
  }
}

.EditPage {
  width: 100%;
  height: 100%;
  :deep(.n-layout-toggle-bar) {
    user-select: none;
    -webkit-app-region: no-drag;
    top: calc(50% - 64px);
  }
  :deep(.n-scrollbar-content) {
    padding: 0 !important;
    height: 100%;
  }
  .node-side {
    :deep(.n-layout-toggle-bar) {
      left: initial;
      transform: rotate(0deg);
    }
  }
}
</style>
