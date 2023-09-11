<script setup lang="ts">
import { LayOutMain, LayOutSide } from './components'
</script>
<template>
  <div class="layout">
    <LayOutSide></LayOutSide>
    <LayOutMain>
      <template #routes>
        <div class="routes">
          <RouterView></RouterView>
        </div>
      </template>
    </LayOutMain>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  .routes {
    margin: 20px;
  }
}
</style>
