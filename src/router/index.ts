import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      children: [ {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HomeView
      },{
        path: '/design',
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
