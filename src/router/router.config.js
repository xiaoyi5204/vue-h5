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
  },
  {
    path: '/pc',
    component: () => import('@/views/layouts/index_pc'),
    redirect: '/salary_pc',
    meta: {
      title: 'pc_home',
      keepAlive: false
    },
    children: [
      {
        path: '/salary_pc',
        name: 'salary_pc',
        component: () => import('@/views/home/salary_pc'),
        meta: { title: '薪资计算', keepAlive: true }
      },
      {
        path: '/contract_pc',
        name: 'contract_pc',
        component: () => import('@/views/home/contract_pc'),
        meta: { title: '合同期限', keepAlive: true }
      }
    ]
  }
]
