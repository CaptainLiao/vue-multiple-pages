
import router from "@/app/router"

import NotFoundComponent from '@/components/notFoundComponent.vue'
import Home from '@/views/home/home.vue'

let routes = [
  { path: '*', component: NotFoundComponent },
  {
    path: "/home/home",
    name: "home",
    component: Home,
    meta: {
      keepAlive: true,
    },
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
    path: "/about",
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


