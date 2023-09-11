import {NIcon} from "naive-ui";
import type { Component } from 'vue'
import { h } from "vue"
/**
 * * 生成一个不重复的ID
 * @param { Number } randomLength
 */
export const getUUID = (randomLength = 10) => {
  return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}
/**
 * * Icon
 * @param { Number } randomLength
 */
export const renderIcon = (item: Component) => {
  return () => h(NIcon,  { size: 24}, { default: () => h(item) })
}