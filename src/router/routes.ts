export const constantRoute = [
  // 登陆
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true
    }
  },
  // 一级路由
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    meta: {
      title: '主页',
      hidden: true,
      icon: 'House'
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'House'
        }
      }
    ]
  },
  // 权限管理
  {
    path: '/authority',
    component: () => import('@/layout/index.vue'),
    name: 'authority',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock'
    },
    children: [
      {
        path: '/authority/user',
        component: () => import('@/views/authority/user/index.vue'),
        name: 'user',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User'
        }
      },
      {
        path: '/authority/role',
        component: () => import('@/views/authority/role/index.vue'),
        name: 'role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled'
        }
      },
      {
        path: '/authority/menu',
        component: () => import('@/views/authority/menu/index.vue'),
        name: 'menu',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Menu'
        }
      },
    ]
  },
  // 404页面
  {
    path: '/404',
    component: () => import('@/views/unfound/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true
    }
  },
]