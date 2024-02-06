/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 17:35:36
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 14:28:58
 * @FilePath: \Electronvite\types\global.d.ts
 * @Description:
 */
import { Graph } from '@antv/x6'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import type { LoadingBarApiInjection } from 'naive-ui/lib/loading-bar/src/LoadingBarProvider.d'
declare global {
  interface Window {
    GraphInstance: Graph
    $message: MessageApiInjection
    $loading: LoadingBarApiInjection
  }
  const GraphInstance: Graph
}
