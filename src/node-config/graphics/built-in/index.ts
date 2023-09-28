/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 13:29:41
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 16:52:26
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\index.ts
 * @Description: 
 */
import { getUUID } from '@/utils/utils'
import {RectangNode} from './rectangle'
import { GraphicItemType, GraphicItemTypeName } from '../index.d'
import type {MenuOption} from "naive-ui"
export const BuiltInConfig:MenuOption = {
  id: getUUID(),
  key:GraphicItemType.BUITIN,
  label: GraphicItemTypeName.BUITIN,
  cateType: GraphicItemType.BUITIN,
  cateTypeName: GraphicItemTypeName.BUITIN,
  childrens: [RectangNode]
}
