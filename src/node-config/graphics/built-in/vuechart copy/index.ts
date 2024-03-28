/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 14:16:31
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-26 14:02:23
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\vuechart\index.ts
 * @Description:
 */
import { getUUID } from '@/utils/utils'
import { vueCharts } from './config'
import { BuiltInNodeName } from '../index.d'
import { NodeConfigType, NodeConfigTypeName, type NodeConfig } from '@/node-config/index.d'
const VueNode: NodeConfig = {
  id: getUUID(),
  node: vueCharts,
  name: BuiltInNodeName['Rect'],
  cateType: NodeConfigType.GRAPHIC,
  cateTypeName: NodeConfigTypeName.GRAPHIC,
  Image: 'button.png'
}
export { VueNode }
