/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 15:28:37
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 16:00:21
 * @FilePath: \Electronvite\src\node-config\graphics\combine\index.ts
 * @Description: 
 */
import { getUUID } from '@/utils/utils'
import { GraphicItemType, GraphicItemTypeName } from '../index.d'
import type { MenuOption } from 'naive-ui'

export const CombinenConfig:MenuOption = {
  id: getUUID(),
  key:GraphicItemType.COMBINE,
  label:GraphicItemTypeName.COMBINE,
  cateType: GraphicItemType.COMBINE,
  cateTypeName: GraphicItemTypeName.COMBINE,
  childrens: []
}