/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 14:36:45
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 15:32:26
 * @FilePath: \Electronvite\src\node-config\index.d.ts
 * @Description:
 */
import type { Cell } from '@antv/x6'

export enum NodeConfigType {
  'GRAPHIC' = 'graphics',
  'IMAGE' = 'images',
  'COMPONENT' = 'components'
}
export enum NodeConfigTypeName {
  'GRAPHIC' = '图形',
  'IMAGE' = '图片',
  'COMPONENT' = '组件'
}
export interface NodeConfig {
  id: string
  name: string
  cateType: string
  cateTypeName: string
  Image: string
  node: any
}

