/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 15:29:38
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 15:41:40
 * @FilePath: \Electronvite\src\node-config\graphics\index.ts
 * @Description:
 */
import { getUUID, renderIcon } from '@/utils/utils'
import { NodeConfigType, NodeConfigTypeName } from '../index.d'
import { InfiniteSharp } from '@vicons/ionicons5'
import { BuiltInConfig } from './built-in'
import { CombinenConfig } from './combine'
import type { MenuOption } from 'naive-ui'
export const GraphicsConfig: MenuOption = {
  id: getUUID(),
  label: NodeConfigTypeName.GRAPHIC,
  key: NodeConfigType.GRAPHIC,
  children: [BuiltInConfig, CombinenConfig],
  icon: renderIcon(InfiniteSharp)
}
