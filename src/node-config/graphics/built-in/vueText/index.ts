/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 14:16:31
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-26 13:59:45
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\vueText\index.ts
 * @Description:
 */
import { getUUID } from '@/utils/utils'
import { vueText } from './config'
import { BuiltInNodeName } from '../index.d'
import { NodeConfigType, NodeConfigTypeName, type NodeConfig } from '@/node-config/index.d'
const VueNode: NodeConfig = {
  id: getUUID(),
  node: vueText,
  name: BuiltInNodeName['Rect'],
  cateType: NodeConfigType.GRAPHIC,
  cateTypeName: NodeConfigTypeName.GRAPHIC,
  Image: 'pump.png'
}
export { VueNode }
