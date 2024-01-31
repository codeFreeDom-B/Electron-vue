/*
 * @Author: SUN HENG
 * @Date: 2023-09-21 16:14:08
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-31 15:20:55
 * @FilePath: \Electronvite\src\stores\modules\editPageStore\editPageStore.d.ts
 * @Description:
 */
import { type Component } from 'vue'
export enum ActionBarName {
  'PREVIEW' = '预览',
  'PUBLISH' = '发布',
  'SAVE' = '保存',
  'HOME' = '返回'
}
export enum ActionBar {
  'PREVIEW',
  'PUBLISH',
  'SAVE',
  'HOME'
}
export interface ActionBarType {
  id: ActionBar
  name: string
  icon: Component
}
export interface EditPageType {
  Tools: []
  ActionBtn: ActionBarType[]
}
