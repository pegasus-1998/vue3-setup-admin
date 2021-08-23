import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ElMessage } from 'element-plus'
import store from '@/store'

import layout from '@/layout/index.vue'
import homeRoute from './modules/home'
import chartRoute from './modules/chart'
import messageRoute from './modules/message'
import errorRoute from './modules/error'
import vipRoute from './modules/vip'
import userRoute from './modules/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: layout,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/about',
        component: () => import('@/pages/about/index.vue'),
        meta: {
          title: '关于',
          bar: 'about/index'
        }
      },
      homeRoute,
      chartRoute,
      messageRoute,
      errorRoute,
      vipRoute,
      userRoute
    ],
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登陆',
      bar: 'login'
    }
  },
  {
    path: '/:path(.*)',
    redirect: '/error/404'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to: any) => {
  if (to.path === '/login') {
    return true
  } else {
    const token = sessionStorage.getItem('token')
    const flag = store.state.users.some((item: any) => token == item.account)
    if (flag) {
      return true
    } else {
      ElMessage({
        type: 'warning',
        message: '请先登陆！'
      })
      router.replace('/login')
    }
  }
})

router.afterEach((to: any) => document.title = to.meta.title)

export default router
