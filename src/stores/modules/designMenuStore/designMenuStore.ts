import { defineStore } from 'pinia'
import { getUUID, renderIcon } from '@/utils/utils'
import { LogoVue } from '@vicons/ionicons5'
import { type DesignMenuStoreType } from './designMenuStore.d'
import type { MenuOption } from 'naive-ui'
export const useDesignMenuStore = defineStore({
  id: 'useDesignMenuStore',
  state: (): DesignMenuStoreType => ({
    packageList: []
  }),
  getters: {
    getPackageList(): MenuOption[] {
      return this.packageList
    }
  },
  actions: {
    getPackageListData() {
      this.packageList = [
        {
          id: getUUID(),
          label: '图形',
          children: [],
          icon: renderIcon(LogoVue)
        },
        {
          id: getUUID(),
          label: '组件',
          children: [],
          icon: renderIcon(LogoVue)
        },
        {
          id: getUUID(),
          label: '图片',
          children: [],
          icon: renderIcon(LogoVue)
        }
      ]
    }
  }
})
