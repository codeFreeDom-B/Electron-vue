/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 10:53:10
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-26 13:59:02
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\circle\index.ts
 * @Description:
 */
import { CircleConfig } from './config'
import { getUUID } from '@/utils/utils'
import { NodeConfigType, NodeConfigTypeName, type NodeConfig } from '@/node-config/index.d'
import { BuiltInNodeName } from '../index.d'
export const CircleNode: NodeConfig = {
  id: getUUID(),
  node: CircleConfig,
  cateType: NodeConfigType.GRAPHIC,
  cateTypeName: NodeConfigTypeName.GRAPHIC,
  name: BuiltInNodeName.Circle,
  Image: 'cicle.png'
}
