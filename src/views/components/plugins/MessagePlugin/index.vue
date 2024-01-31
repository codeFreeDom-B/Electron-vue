<!--
 * @Author: SUN HENG
 * @Date: 2024-01-26 11:19:20
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-26 11:19:22
 * @FilePath: \Electronvite\src\views\components\plugins\MessagePlugin\index.vue
 * @Description: 
-->

<template></template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'
//挂载在 window 方便与在js中使用
window['$message'] = useMessage()
</script>
