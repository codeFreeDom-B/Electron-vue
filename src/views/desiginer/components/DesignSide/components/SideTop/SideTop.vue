<template>
  <div class="side_top">
    <div style="min-width: 64px; text-align: center">组件</div>
    <div>
      <n-input round placeholder="搜索">
        <!-- <template #suffix>
          <n-icon :component="FlashOutline" />
        </template> -->
      </n-input>
    </div>
  </div>
</template>
<script lang="ts">
export default { name: 'SideTop' }
</script>
<script setup lang="ts"></script>
<style scoped lang="scss">
.side_top {
  width: 100%;
  height: 42px;
  line-height: 42px;
  display: flex;
  border-bottom: 1px solid #efeff5;
  div:nth-child(2) {
    flex: 1;
  }
}
</style>
