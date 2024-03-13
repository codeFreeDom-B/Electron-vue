/*
 * @Author: SUN HENG
 * @Date: 2023-09-28 13:29:41
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-07 11:55:22
 * @FilePath: \Electronvite\src\node-config\graphics\built-in\index.ts
 * @Description:
 */
import { getUUID } from '@/utils/utils'
import { GraphicItemType, GraphicItemTypeName } from '../index.d'
import type { MenuOption } from 'naive-ui'
async function findExportedObjects() {
  const modules = import.meta.glob('./*/index.ts')
  for await (const modulePath of Object.values(modules)) {
    const module = await modulePath()
    //@ts-ignore
    BuiltInConfig.childrens?.push(...Object.values(module))
  }
}
findExportedObjects()
export const BuiltInConfig: MenuOption = {
  id: getUUID(),
  key: GraphicItemType.BUITIN,
  label: GraphicItemTypeName.BUITIN,
  cateType: GraphicItemType.BUITIN,
  cateTypeName: GraphicItemTypeName.BUITIN,
  childrens: []
}
