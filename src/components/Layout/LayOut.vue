<script setup lang="ts">
import { LayOutMain, LayOutSide } from './components'
</script>
<template>
  <div class="layout">
    <LayOutSide>
      <template #content>
        <RouterView></RouterView>
      </template>
    </LayOutSide>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  background: #101014;
  .routes {
    margin: 20px;
  }
}
</style>
