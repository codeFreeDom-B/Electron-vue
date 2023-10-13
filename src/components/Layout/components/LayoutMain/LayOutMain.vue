<!--
 * @Author: SUN HENG
 * @Date: 2023-09-09 12:08:18
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-13 09:44:58
 * @FilePath: \Electronvite\src\components\Layout\components\LayoutMain\LayOutMain.vue
 * @Description: 
-->
<script setup lang="ts">
import { reactive } from 'vue'
import type { ActionBarType } from '@/components/Layout/index.d'
import { useActionBarStore } from '@/stores/modules/actionBarStore/actionBarStore'
const useBarList = useActionBarStore()
const ActionBar: ActionBarType[] = useBarList.getActionBarList
import { useIpcRenderer } from '@vueuse/electron'
const ipcRenderer = useIpcRenderer()
const handleClick = (item: ActionBarType) => {
  ipcRenderer.send(item.type)
}
</script>
<template>
  <div class="layoutContent">
    <div class="layoutHeader">
      <div class="action_bar" v-for="item in ActionBar" :key="item.id">
        <div class="bar_dom" @click="handleClick(item)">
          <component :is="item.icon"></component>
        </div>
      </div>
    </div>
    <div>
      <slot name="routes"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layoutContent {
  flex: 1;
  .layoutHeader {
    height: 20px;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 20px;
    margin-top: 10px;
    .action_bar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      border-radius: 10px;
      overflow: hidden;
      .bar_dom {
        color: #dee1e6;
        text-align: center;
        width: 60px;
        height: 35px;
        line-height: 48px;
        user-select: none;
        -webkit-app-region: no-drag;
      }
    }
    .action_bar:nth-child(1):hover {
      background: #dee1e6;
    }
    .action_bar:nth-child(2):hover {
      background: #f8635f;
      color: #fafafa;
    }
  }
}
</style>
