import Vue from "vue";
import Router from "vue-router";
import NotFoundComponent from '@/components/notFoundComponent.vue'
import Home from '@/views/home/home.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    { path: '*', component: NotFoundComponent },
    {
      path: "/home",
      name: "home",
      meta: {
        keepAlive: true,
      },
      component: Home
    },
    {
      path: "/abc",
      name: "abc",
      meta: {
        keepAlive: true,
      },
      component: () =>
        import(/* webpackChunkName: "home-abc" */ "@/views/home/abc.vue")
    }
  ]
});

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
