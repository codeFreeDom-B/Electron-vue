/*
 * @Author: SUN HENG
 * @Date: 2023-09-21 16:05:16
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-11-15 12:11:52
 * @FilePath: \Electronvite\src\stores\modules\editPageStore\editPageStore.ts
 * @Description: 
 */
import { defineStore } from 'pinia'

import { type EditPageType,ActionBar,type ActionBarType } from './editPageStore.d'
import { renderIcon } from '@/utils/utils'
import { LogoGooglePlaystore, Navigate } from '@vicons/ionicons5'

export const useEditPageStore = defineStore({
  id: 'useEditPageStore',
  state: (): EditPageType => ({
    Tools: [],
    ActionBtn: [
      {
        id:ActionBar['PREVIEW'],
        name: '预览',
        icon: renderIcon(LogoGooglePlaystore)
      },
      {
        id:ActionBar['PUBLISH'],
        name: '发布',
        icon: renderIcon(Navigate)
      },
      {
        id:ActionBar['SAVE'],
        name: '保存',
        icon: renderIcon(Navigate)
      }
    ]
  }),
  getters: {
    getActionBar():ActionBarType[] {
     return this.ActionBtn
  }
}
})
