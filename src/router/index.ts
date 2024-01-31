/*
 * @Author: SUN HENG
 * @Date: 2023-09-08 11:00:55
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-11-13 10:47:09
 * @FilePath: \Electronvite\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { LayOut } from '@/components'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayOut,
      redirect: '/workbenches',
      children: [
        {
          path: '/workbenches',
          name: 'workbenches',
          component: () => import('@/views/WorkBenches/WorkBenches.vue')
        },
        {
          path: '/X6Design',
          name: 'X6Design',
          component: () => import('@/views/desiginer/X6/X6Desigin.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },

    // {
    //   path: '/main',
    //   name: 'Main',
    //   component: () => import('@/components/Layout/LayOut.vue'),
    //   redirect: '/main/workbenches'
    // }
  ]
})

export default router
