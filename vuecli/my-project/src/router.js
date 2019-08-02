import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')

    },
    {
      path: '/connect',
      name: 'connect',
      component: () => import('./views/Connect.vue'),
      children: [
        {
          path: '/connect/test11',
          name: 'test1',
          component: () => import('./views/Test1.vue'),
        },
        {
          path: '/connect/test2/:username/:userage',
          name: 'test2',
          components: {
            default: () => import('./views/Test2.vue'),
            view1: () => import('./views/Test1.vue'),
          }
        },
        {
          path: '/connect/retest2/:username/:userage',
          redirect: '/connect/test2/:username/:userage'
        }
      ]
    },
    {
      path: '/cool',
      name: 'cool',
      component: () => import('./views/Cool.vue'),
      alias: '/recool'

    },
    {
      path: '/count',
      name: 'count',
      component: () => import('./views/Count.vue')
    },
    {
      path: '/re',
      redirect: '/'
    },
    {
      path: '*',
      component: () => import('./views/Error404.vue')
    }

  ]
})
