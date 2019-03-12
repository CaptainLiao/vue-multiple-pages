
import Layout from '_c/layout/layout.vue'
import Home from '@/views/home/home.vue'

export default [
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    meta: {
      title: '第一栏'
    },
    children: [
      {
        path: "index",
        name: "/home/home",
        component: Home,
        meta: {
          title: '首页',

        },
      },
      {
        path: "abc",
        name: "/home/abc",
        meta: {
          title: 'abc',
          keepAlive: true,
        },
        component: () =>import(/* webpackChunkName: "home/abc" */ "@/views/home/abc.vue")
      },
      {
        path: "abcd",
        name: "/home/abc",
        meta: {
          title: 'abcd'
        },
        component: () =>import(/* webpackChunkName: "home/abc" */ "@/views/home/abc.vue")
      },
    ]
  },

  {
    path: "/about",
    component: Layout,
    redirect: '/about',
    meta: {
      title: '第三栏'
    },
    children: [
      {
        path: "",
        name: "/home/abc",
        meta: {
          title: 'about'
        },
        component: () => import(/* webpackChunkName: "home/about" */ "@/views/about.vue")
      }
    ]
  },
]


