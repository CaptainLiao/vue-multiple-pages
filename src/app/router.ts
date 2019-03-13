import Vue from "vue"
import Router from "vue-router"
import {getToken} from '@/services/request/token'
import NotFoundComponent from '@/components/notFoundComponent.vue'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [{
    path: '*',
    component: NotFoundComponent
  }]
});

export default router

const whiteList:Array<string> = ['']

router.beforeEach((to, from, next) => {
  console.log(getToken());
  
  if (!getToken()) {
    if (to.path === '/login') return next();
    
    return whiteList.indexOf(to.path) !== -1 
      ? next() 
      : next(`/login?redirect=${to.path}`)
  }

  /* has token*/
  if (to.path === '/login') {
    return next({ path: '/home' })
  }

  return next()
})



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
