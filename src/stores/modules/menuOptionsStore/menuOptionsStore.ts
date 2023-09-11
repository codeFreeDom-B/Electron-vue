import { defineStore } from 'pinia'
import type { MenuOptionType } from './menuOptionsStore.d'
import { RouterLink } from 'vue-router'
import { h } from 'vue'
import { renderIcon } from "@/utils/utils"
import { SwapHorizontal } from '@vicons/ionicons5'
import type { MenuOption } from 'naive-ui'

export const useMenuOptionStore = defineStore({
  id: 'useMenuOptionStore',
  state: (): MenuOptionType => ({
    MenuOption: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'home',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '文件传输' }
          ),
        key: 'go-back-home',
        icon: renderIcon(SwapHorizontal)
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'about',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '协同画布' }
          ),
        key: 'go-back-canvas',
        icon: renderIcon(SwapHorizontal)
      }
    ]
  }),
  getters: {
    getMenuOptions():MenuOption[] {
    return this.MenuOption
    }
  }
})
