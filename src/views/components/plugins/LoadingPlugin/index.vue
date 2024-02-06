<!--
 * @Author: SUN HENG
 * @Date: 2024-02-06 14:25:23
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 14:25:26
 * @FilePath: \Electronvite\src\views\components\plugins\LoadingPlugin\index.vue
 * @Description: 
-->
<template></template>

<script lang="ts" setup>
import { useLoadingBar } from 'naive-ui'
//挂载在 window 方便与在js中使用
window['$loading'] = useLoadingBar()
</script>
