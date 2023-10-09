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
  Image: 'built-in-circle.png'
}
