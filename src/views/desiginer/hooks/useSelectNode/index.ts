/*
 * @Author: SUN HENG
 * @Date: 2023-10-08 17:38:30
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-08 20:11:28
 * @FilePath: \Electronvite\src\views\desiginer\hooks\useSelectNode\index.ts
 * @Description: 
 */
import type { Cell } from "@antv/x6"
import {EventEmitterEnum} from "@/views/desiginer/utils/EventMitt"
import EventMitter from '@/views/desiginer/hooks/useEventMitt'
export const useSelectNode = (cell: Cell) => {
  EventMitter.emit(EventEmitterEnum.ACTIVE_CELL,cell)
}