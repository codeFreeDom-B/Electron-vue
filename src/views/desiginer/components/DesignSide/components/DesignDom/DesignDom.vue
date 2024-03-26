<!--
 * @Author: SUN HENG
 * @Date: 2023-09-22 20:53:15
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-26 14:19:29
 * @FilePath: \Electronvite\src\views\desiginer\components\DesignSide\components\DesignDom\DesignDom.vue
 * @Description: 
-->
<template>
  <div class="DesignDom">
    <div class="DomType">
      <NMenu
        v-model:value="DefalutMenuItem"
        :options="props.defaultMenu.childrens"
        @update-value="hanldeClick"
        :indent="0"
      >
      </NMenu>
    </div>
    <div class="DomPack">
      <DrageItem v-if="DragNodeItem" :drag-list="DragNodeItem.childrens"></DrageItem>
      <!-- <div
        v-for="item in "
        :key="item.id"
        style="width: 100px; height: 100px; border: 3px solid #fafafa"
        @mousedown="handleInitNode"
        draggable
      ></div> -->
    </div>
  </div>
</template>
<script lang="ts">
export default { name: 'DesignDom' }
</script>
<script setup lang="ts">
import { type MenuOption, NMenu } from 'naive-ui'
import DrageItem from '../DrageItem/DrageItem.vue'
import { watch, ref, type Ref } from 'vue'

let props = defineProps<{
  defaultMenu: MenuOption
}>()
let DefalutMenuItem: Ref<string> = ref('')
let DragNodeItem = ref()
watch(
  () => props.defaultMenu,
  (val) => {
    DragNodeItem.value = (val.childrens as MenuOption[])[0]
    DefalutMenuItem.value = (val.childrens as MenuOption[])[0].key as string
  },
  {
    immediate: true
  }
)
const hanldeClick = (key: string, menu: MenuOption) => {
  DragNodeItem.value = menu
}
</script>
<style lang="scss" scoped>
.DesignDom {
  flex: 1;
  display: flex;
  .DomType {
    width: 65px;
    user-select: none;
    background: #1e1e1f;
    -webkit-app-region: no-drag;
    :deep(.n-menu-item) {
      // height: 65px;
      .n-menu-item-content {
        padding: 0;
        text-align: center;
        padding-left: 0px !important;
        font-size: 12px;
        margin-top: 10px;
        &::before {
          left: 0;
          right: 0;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  .DomPack {
    flex: 1;
    user-select: none;
    -webkit-app-region: no-drag;
    // background: rgb(35, 35, 36);
  }
}
</style>
