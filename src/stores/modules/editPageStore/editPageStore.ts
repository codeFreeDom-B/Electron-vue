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
      }
    ]
  }),
  getters: {
    getActionBar():ActionBarType[] {
     return this.ActionBtn
  }
}
})
