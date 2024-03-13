/*
 * @Author: SUN HENG
 * @Date: 2023-10-13 14:51:43
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-13 14:20:25
 * @FilePath: \Electronvite\src\views\desiginer\hooks\useGraphInit\defaultOption.ts
 * @Description:
 */
import type { Graph } from '@antv/x6'
export default <Partial<Graph.Options>>{
  autoResize: true,
  async: true,
  width: 1920,
  height: 1080,
  panning: {
    enabled: true,
    modifiers: ['alt']
  },
  mousewheel: {
    enabled: true,
    modifiers: ['ctrl', 'meta'],
    factor: 1.2,
    maxScale: 3.6,
    minScale: 0.27
  },
  embedding: true
  // interacting: false
}
