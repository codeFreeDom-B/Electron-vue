import {NIcon,NAvatar} from "naive-ui";
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
 * @param { Component } Component
 */
export const renderIcon = (item: Component) => {
  return () => h(NIcon,  { size: 24}, { default: () => h(item) })
}
/**
 *  头像
 * @param  {string} URL
 * @returns 
 */
export const renderAvatar = (path:string,name:string) => {
  return () => h(NAvatar,  { size: 40 ,src:getAssetsFile(path,name)} )
}
/**
 * 
 * @param 获取图片
 * @param name 
 * @returns 
 */
export const getAssetsFile = (path: string, name: string) => {
  return new URL(`../assets/view/${path}/${name}`, import.meta.url).href;
};