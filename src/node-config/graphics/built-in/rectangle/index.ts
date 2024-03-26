/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 14:16:31
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-26 13:59:25
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\rectangle\index.ts
 * @Description:
 */
import { getUUID } from '@/utils/utils'
import { RectangleConfig } from './config'
import { BuiltInNodeName } from '../index.d'
import { NodeConfigType, NodeConfigTypeName, type NodeConfig } from '@/node-config/index.d'
const RectangNode: NodeConfig = {
  id: getUUID(),
  node: RectangleConfig,
  name: BuiltInNodeName['Rect'],
  cateType: NodeConfigType.GRAPHIC,
  cateTypeName: NodeConfigTypeName.GRAPHIC,
  Image: 'rect.png'
}
export { RectangNode }
