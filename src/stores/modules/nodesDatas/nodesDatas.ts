/*
 * @Author: SUN HENG
 * @Date: 2024-01-05 11:52:15
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-05 13:37:45
 * @FilePath: \Electronvite\src\stores\modules\nodesDatas\nodesDatas.ts
 * @Description: 
 */
import { defineStore } from "pinia"
export const useNodesDatas = defineStore({
  id: "useNodesDatas",
  state: () => ({
    data:[]
  }),
  actions: {
    setData(data: [{
      id: string
      value:string
    }]) {
      this.data=data
    }
  }
})