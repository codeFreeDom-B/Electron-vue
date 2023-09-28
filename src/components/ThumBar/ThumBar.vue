<!--
 * @Author: SUN HENG
 * @Date: 2023-09-28 16:16:40
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 16:16:42
 * @FilePath: \Electronvite\src\views\components\ThumBar\index.vue
 * @Description: 
-->
<template>
  <div class="mac-btn">
    <template v-for="item in btnList" :key="item.key">
      <div class="btn mini"></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const btnList: {
  title: string
  key: 'close' | 'remove' | 'resize' | 'fullResize'
  icon: any
}[] = [
  {
    title: '关闭',
    key: 'close',
    icon: 'CloseIcon'
  },
  {
    title: '缩小',
    key: 'remove',
    icon: 'RemoveIcon'
  },
  {
    title: '缩小',
    key: 'remove',
    icon: 'RemoveIcon'
  }
]
</script>
<style lang="scss" scoped>
.mac-btn {
  display: flex;

  .mini {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fc625d;
    margin-left: 3px;
    &:nth-child(2) {
      background: #fcbc40;
    }
    &:nth-child(3) {
      background: #34c749;
    }
  }
}
</style>
