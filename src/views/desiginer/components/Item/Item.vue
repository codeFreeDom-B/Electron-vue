<!--
 * @Author: SUN HENG
 * @Date: 2023-10-08 22:01:48
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-28 15:18:31
 * @FilePath: \Electronvite\src\views\desiginer\components\Item\Item.vue
 * @Description: 
-->
<template>
  <div :class="['AttributeItem', isVertical && 'vertical']">
    <NText class="label" :style="labelStyle">
      {{ label }}

      <NPopover trigger="hover" v-if="slots.tips">
        <template #trigger>
          <NIcon size="18" style="margin-left: 6px">
            <AlertCircleSharp />
          </NIcon>
        </template>
        <slot name="tips" />
      </NPopover>
      <div v-if="slots.icons" class="icons">
        <slot name="icons" />
      </div>

      <div class="suffix"><slot v-if="isVertical" name="suffix" /></div>
    </NText>
    <div class="content">
      <slot />
    </div>
    <div class="suffix" v-if="!isVertical"><slot name="suffix" /></div>
  </div>
</template>

<script lang="ts">
import { useSlots } from 'vue'
export default { name: 'AttributeItem' }
</script>
<script lang="ts" setup>
import { AlertCircleSharp } from '@vicons/ionicons5'
defineProps<{ label: string; isVertical?: boolean; labelStyle?: any }>()

const slots = useSlots()
</script>

<style lang="scss">
.AttributeItem {
  .content {
    > *:not(.n-switch) {
      flex: 1;
    }
  }
}
</style>
<style lang="scss" scoped>
div.vertical {
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 6px;
  > .label {
    width: 100%;
  }
  > div.content {
    width: 100%;
  }
}
.AttributeItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  min-height: 36px;
  margin: 4px 0;
  .label {
    min-width: 78px;
    display: flex;
    align-items: center;
    position: relative;

    .icons {
      margin-left: 6px;
    }

    .suffix {
      position: absolute;
      right: 6px;
    }
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 9px;
    // > * {
    //     flex: 1;
    //     width: 100%;
    // }
  }

  .suffix {
    margin-right: 6px;
  }
}
</style>
