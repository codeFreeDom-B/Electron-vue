<!--
 * @Author: SUN HENG
 * @Date: 2023-09-28 17:22:06
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 17:47:57
 * @FilePath: \Electronvite\src\views\desiginer\components\DesignGraph\DesignGraph.vue
 * @Description: 
-->
<template>
  <div class="workspace">
    <slot name="graph"> </slot>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { SketchRule } from 'vue3-sketch-ruler'
import 'vue3-sketch-ruler/lib/style.css'
const state = reactive({
  scale: 0.5, //658813476562495, //1,
  startX: 0,
  startY: 9,
  thick: 20,
  isShowRuler: true, // 显示标尺
  isShowReferLine: false // 显示参考线
})
</script>
<style lang="scss" scoped>
.workspace {
  width: 100%;
  height: 100%;
  background: red;
}
</style>
