/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 17:35:36
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 20:28:54
 * @FilePath: \Electronvite\types\global.d.ts
 * @Description:
 */
import { Graph } from '@antv/x6'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
declare global {
  interface Window {
    GraphInstance: Graph
    $message: MessageApiInjection
  }
  const GraphInstance: Graph
}
