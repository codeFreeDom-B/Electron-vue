<script setup lang="ts">
import { LayOutMain, LayOutSide } from './components'
</script>
<template>
  <div class="layout">
    <LayOutSide></LayOutSide>
    <LayOutMain></LayOutMain>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
