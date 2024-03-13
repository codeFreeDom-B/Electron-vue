/*
 * @Author: SUN HENG
 * @Date: 2024-02-27 17:24:08
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-13 14:49:07
 * @FilePath: \Electronvite\src\views\desiginer\hooks\enrollTemplateVue.ts
 * @Description:
 */

import { register, getTeleport } from '@antv/x6-vue-shape'

const modulesFiles = import.meta.glob('../../../node-config/graphics/built-in/*/config.ts', {
  eager: true
})

// 渲染节点
export async function loadAndRegisterComponents(Graph, Nodes) {
  const modules = await Promise.all(Object.values(modulesFiles))

  Nodes.map((node) => {
    if (node.component?.name) {
      // modulesFiles.file(ite)
      for (const module of modules) {
        // 暂时先写死,明天在搞
        // @ts-ignore
        const config = module[node?.nodeSign] || null // 假设每个模块都导出了config属性
        console.log(config, 'config2131')

        if (config) {
          register(config)
        }
      }
    }
  })
}
// 渲染画布配置
export async function loadAndGraphOptions(Graph, config) {
  console.log(config, 'config')

  //目前先直接渲染吧,等有空在搞
  Graph.drawBackground(config.background)
}
