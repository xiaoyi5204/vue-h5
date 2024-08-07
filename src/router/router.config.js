/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/salary',
    meta: {
      title: 'home',
      keepAlive: false
    },
    children: [
      {
        path: '/salary',
        name: 'salary',
        component: () => import('@/views/home/salary'),
        meta: { title: '薪资计算', keepAlive: true }
      },
      {
        path: '/contract',
        name: 'contract',
        component: () => import('@/views/home/contract'),
        meta: { title: '合同期限', keepAlive: true }
      }
    ]
  }
]
