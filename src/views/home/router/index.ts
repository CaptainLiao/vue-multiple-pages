
import router from "@/app/router"
import Home from '@/views/home/home.vue'

let routes = [
  {
    path: "/home/home",
    name: "home",
    component: Home,
  },
  {
    path: "/",
    redirect: '/home/home'
  },
  {
    path: "/home/abc",
    name: "abc",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: "home/abc" */ "@/views/home/abc.vue")
  },
  {
    path: "/home/about",
    name: "about",
    meta: {
      keepAlive: true,
    },
    component: () =>
      import(/* webpackChunkName: "home/about" */ "@/views/about.vue")
  }
]

router.addRoutes(routes)

export default router


