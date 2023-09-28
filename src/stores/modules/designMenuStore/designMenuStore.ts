/*
 * @Author: SUN HENG
 * @Date: 2023-09-22 15:33:07
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-09-28 16:02:50
 * @FilePath: \Electronvite\src\stores\modules\designMenuStore\designMenuStore.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import { getUUID, renderIcon } from '@/utils/utils'
import { InfiniteSharp, LogoVue, Image } from '@vicons/ionicons5'
import { type DesignMenuStoreType } from './designMenuStore.d'
import { NodeConfigList } from "@/node-config"
import type { MenuOption } from 'naive-ui'
export const useDesignMenuStore = defineStore({
  id: 'useDesignMenuStore',
  state: (): DesignMenuStoreType => ({
    packageList: [],
    // NodeConfigList: []
  }),
  getters: {
    getPackageList(): MenuOption[] {
      // @ts-ignore
      return this.packageList
    }
  },
  actions: {
    getPackageListData() {
      
      
      this.packageList = [
      ...NodeConfigList,
        {
          id: getUUID(),
          label: '组件',
          key: 'component',
          children: [
            {
              id: getUUID(),
              key: 'capabilities',
              label: '功能组件'
            },
            {
              id: getUUID(),
              key: 'dialog',
              label: '弹窗组件'
            }
          ],
          icon: renderIcon(LogoVue)
        },
        {
          id: getUUID(),
          key: 'image',
          label: '图片',
          children: [
            {
              id: getUUID(),
              key: 'svg',
              label: '公共SVG'
            },
            {
              id: getUUID(),
              key: 'power-plant',
              label: '电厂模块'
            }
          ],
          icon: renderIcon(Image)
        }
      ]
    },
  }
})
