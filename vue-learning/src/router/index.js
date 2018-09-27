import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/tr/:id',
      component: () =>
        import('../components/tr'),
      props: true,
      meta: { requiresAuth: false },
      children: [
        {
          path: '',
          component: () =>
            import('../components/trc'),
          props: { trc: '1', id: '1' }
        },
        {
          path: 'trc2',
          component: () =>
            import('../components/trc2'),
          props: { trc: '2' }
        }
      ]
    },
    {
      path: '/tf',
      component: () =>
        import('../components/tf')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   next()
// })
router.beforeEach((to, from, next) => {
  if (to.matched.some(function (item) { return item.meta.requiresAuth })) {
    next('/')// 路由元，是否需要验证--true-跳转登录页面
  } else {
    next()
  }
})
export default router
