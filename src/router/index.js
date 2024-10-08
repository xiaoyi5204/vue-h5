import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './router.config.js'
import { getDeviceType } from '@/utils'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const deviceType = getDeviceType()
  if (deviceType === 'Mobile') {
    if (to.path.indexOf('_pc') > -1) {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path.indexOf('_pc') > -1) {
      next()
    } else {
      next('/pc')
    }
  }
})

export default router
