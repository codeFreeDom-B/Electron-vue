<template>
  <div class="DesignHead">
    <div>
      <slot name="tools"> </slot>
    </div>
    <div class="title">工作空间</div>
    <div class="actionBtn">
      <slot name="actionbtn"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default { name: 'DesignHeader' }
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.DesignHead {
  width: 100%;
  text-align: center;
  line-height: 68px;
  display: flex;
  justify-content: space-between;
  .actionBtn {
    margin-right: 100px;
  }
}
</style>
