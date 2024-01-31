/*
 * @Author: SUN HENG
 * @Date: 2023-09-21 16:05:16
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-31 15:21:34
 * @FilePath: \Electronvite\src\stores\modules\editPageStore\editPageStore.ts
 * @Description:
 */
import { defineStore } from 'pinia'

import { type EditPageType, ActionBar, ActionBarName, type ActionBarType } from './editPageStore.d'
import { renderIcon } from '@/utils/utils'
import { LogoGooglePlaystore, Navigate } from '@vicons/ionicons5'

export const useEditPageStore = defineStore({
  id: 'useEditPageStore',
  state: (): EditPageType => ({
    Tools: [],
    ActionBtn: [
      {
        id: ActionBar['PREVIEW'],
        name: ActionBarName['PREVIEW'],
        icon: renderIcon(LogoGooglePlaystore)
      },
      {
        id: ActionBar['PUBLISH'],
        name: ActionBarName['PUBLISH'],
        icon: renderIcon(Navigate)
      },
      {
        id: ActionBar['SAVE'],
        name: ActionBarName['SAVE'],
        icon: renderIcon(Navigate)
      },
      {
        id: ActionBar['HOME'],
        name: ActionBarName['HOME'],
        icon: renderIcon(Navigate)
      }
    ]
  }),
  getters: {
    getActionBar(): ActionBarType[] {
      return this.ActionBtn
    }
  }
})
