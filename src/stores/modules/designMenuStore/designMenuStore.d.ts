/*
 * @Author: SUN HENG
 * @Date: 2023-09-22 15:50:30
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 15:44:54
 * @FilePath: \Electronvite\src\stores\modules\designMenuStore\designMenuStore.d.ts
 * @Description:
 */
import { type MenuOption } from 'naive-ui'
// import { NodeConfig } from '@/node-config/index.d'
export interface DesignMenuStoreType {
  packageList: MenuOption[]
  // NodeConfigList: NodeConfig[]
}
