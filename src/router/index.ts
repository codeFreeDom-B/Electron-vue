/*
 * @Author: SUN HENG
 * @Date: 2023-09-08 11:00:55
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-07 16:07:46
 * @FilePath: \Electronvite\src\router\index.ts
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import("@/views/login/index.vue")
    },

    {
      path: '/main',
      name: 'Main',
      component: () => import("@/components/Layout/LayOut.vue"),
      children: [{
        path: '/',
        name: 'X6Design',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ()=>import("@/views/desiginer/X6/X6Desigin.vue")
      }]
    }
  ]
})

export default router
