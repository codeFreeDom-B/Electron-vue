/*
 * @Author: SUN HENG
 * @Date: 2024-02-27 17:24:08
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-27 18:38:11
 * @FilePath: \Electronvite\src\views\desiginer\hooks\enrollTemplateVue.ts
 * @Description:
 */

import { register, getTeleport } from '@antv/x6-vue-shape'

const modulesFiles = import.meta.glob('../../../node-config/graphics/built-in/*/config.ts', {
  eager: true
})

export default async function loadAndRegisterComponents(Graph, Nodes) {
  console.log(modulesFiles, 'modulesFiles')
  const modules = await Promise.all(Object.values(modulesFiles))

  Nodes.map((node) => {
    if (node.component?.name) {
      // modulesFiles.file(ite)
      for (const module of modules) {
        // 暂时先写死,明天在搞
        // @ts-ignore
        const config = module?.vueCharts || null // 假设每个模块都导出了config属性
        console.log(config, 'config2131')

        if (config) {
          register(config)
        }
      }
    }
  })
}
