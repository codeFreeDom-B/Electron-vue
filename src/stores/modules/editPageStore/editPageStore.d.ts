import {type Component } from 'vue'
export enum ActionBarName {
  'PREVIEW' = '预览',
  'PUBLISH' = '预览'
}
export enum ActionBar {
  'PREVIEW',
  'PUBLISH'
}
export interface ActionBarType {
  id: ActionBar
  name: string
  icon: Component
}
export interface EditPageType{
  Tools: [],
  ActionBtn:ActionBarType[]
}