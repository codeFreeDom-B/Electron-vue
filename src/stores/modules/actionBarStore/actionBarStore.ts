import { defineStore } from "pinia"
import type { ActironBarStateType } from "./actionBarStore.d"
import { getUUID,renderIcon } from "@/utils/utils"
import { EditBarTypeEnum } from "@/components/Layout/components/LayoutMain/index.d"
import type { ActionBarType } from "@/components/Layout/index.d"
import { Power,RemoveSharp } from '@vicons/ionicons5'

export const useActionBarStore = defineStore({
  id: "useActionBarStore",
  state: (): ActironBarStateType => ({
    ActionBarList: [
      {
        id: getUUID(),
        name: "缩小",
        type: EditBarTypeEnum["WINDOW_MIN"],
        icon: renderIcon(RemoveSharp)
      },
      {
        id: getUUID(),
        name: "关闭",
        type: EditBarTypeEnum["WINDOW_CLOSE"],
        icon: renderIcon(Power)
      }
    ],
  
  }),
  getters:{
    getActionBarList():ActionBarType[] {
      return this.ActionBarList
    }
  }
    
})