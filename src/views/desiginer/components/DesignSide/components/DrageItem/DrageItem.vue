<!--
 * @Author: SUN HENG
 * @Date: 2023-09-28 16:13:08
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 17:05:15
 * @FilePath: \Electronvite\src\views\desiginer\components\DesignSide\components\DrageItem\DrageItem.vue
 * @Description: 
-->
<template>
  <div class="drag-item">
    <n-card
      class="weigetItem"
      draggable="true"
      v-for="item in props.dragList"
      :key="item.id"
      @mousedown="ondragStart($event, item.node)"
    >
      <template #header>
        <MacBtn></MacBtn>
      </template>
      <template #header-extra>
        <div style="color: #767c82">{{ item.label }}</div>
      </template>
      <div
        style="
          width: 120px;
          height: 90px;
          background-color: #232324;
          text-align: center;
          line-height: 50px;
          font-size: 20px;
        "
      >
        <!-- <ChartBackImg :option="item"></ChartBackImg> -->
      </div>
    </n-card>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import EventEmit from '@/views/desiginer/hooks/useEventMitt'
import MacBtn from '@/components/ThumBar/ThumBar.vue'
let props = defineProps({
  dragList: {
    default: () => {},
    type: Object
  }
})

const ondragStart = (event: DragEvent, node: any) => {
  console.log(node, props.dragList, 'node')

  EventEmit.emit('drag', { event, node })
}
</script>
<style lang="scss" scoped>
.weigetItem {
  width: 170px;
  height: 130px;
  margin: 0 auto;
  margin-top: 30px;
  // @include bgcard('card-background');
}
.n-card :deep(.n-card-header) {
  padding-top: 3px !important;
  padding-left: 3px;
  padding-right: 5px;
  padding-bottom: 5px;
}
</style>
