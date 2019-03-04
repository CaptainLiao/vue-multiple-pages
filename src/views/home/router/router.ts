import Vue from "vue"
import Router from "vue-router"
import {reloadIfNotFound} from './hooks'
import NotFoundComponent from '@/components/notFoundComponent.vue'
import Home from '@/views/home/home.vue'

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    { path: '*', component: NotFoundComponent },
    {
      path: "/home/home",
      name: "home",
      component: Home
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
});

router.beforeEach(reloadIfNotFound);

export default router;

function scrollBehavior(to:any, from:any,savedPosition:any) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      x: 0,
      y: 0
    };
  }
}
