import { defineStore } from 'pinia'
import type { MenuOptionType } from './menuOptionsStore.d'
import { RouterLink } from 'vue-router'
import { h } from 'vue'
import { renderIcon, renderAvatar } from '@/utils/utils'
import {
  SwapHorizontal,
  LogoGithub,
  Power,
  LogoWechat,
  LogoAlipay,
  AlbumsSharp,
  CashSharp,
  EarthSharp,
  Easel
} from '@vicons/ionicons5'
import type { MenuOption } from 'naive-ui'

export const useMenuOptionStore = defineStore({
  id: 'useMenuOptionStore',
  state: (): MenuOptionType => ({
    MenuOption: [
      {
        label: 'SUN HENG',
        key: 'go-back-canvas',
        props: {
          style: {
            fontSize: '24px',
            fontWeight: 600
          }
        },
        icon: renderAvatar('layout', 'avatar.jpg')
      },
      {
        key: 'divider-1',
        type: 'divider',
        props: {
          style: {
            marginLeft: '32px'
          }
        }
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'X6Design',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '组态设计' }
          ),
        key: 'go-back-home',
        icon: renderIcon(CashSharp)
      },
      {
        label: '大屏设计',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(Easel)
      },
      {
        label: '3D设计',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(EarthSharp)
      },

      {
        label: '说明文档',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(AlbumsSharp)
      },
      {
        label: 'GITHUB',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(LogoGithub)
      },
      {
        label: '加入群聊',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(LogoWechat)
      },
      {
        label: '赞赏作者',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(LogoAlipay)
      },
      {
        label: '切换账号',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(SwapHorizontal)
      },

      {
        label: '退出软件',
        key: 'go-back-canvas',
        props: {
          style: {
            color: 'red',
            opacity: 1
          }
        },
        icon: renderIcon(Power)
      }
    ]
  }),
  getters: {
    getMenuOptions(): MenuOption[] {
      // @ts-ignore
      return this.MenuOption
    }
  }
})
