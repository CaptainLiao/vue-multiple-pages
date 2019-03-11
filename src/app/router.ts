import Vue from "vue"
import Router from "vue-router"
import NotFoundComponent from '@/components/notFoundComponent.vue'

Vue.use(Router);

export default new Router({
  //mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [{
    path: '*',
    component: NotFoundComponent
  }]
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
