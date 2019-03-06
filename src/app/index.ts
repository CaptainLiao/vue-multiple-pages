import Vue from "vue";
import router from "./router";
import { Pagination, DatePicker, Timeline } from 'element-ui';

Vue.use(Pagination)
Vue.use(DatePicker)
Vue.use(Timeline)


Vue.config.productionTip = false;

export default {
  start
}

function start() {
  return new Vue({
    router,
    render(h) {
      return h('div', {
        attrs: {
          id: 'app'
        }
      }, [
        h('keep-alive', [
          this.$route.meta.keepAlive ? h('router-view') : ''
        ]),
        !this.$route.meta.keepAlive && h('router-view')
      ])
    }
  }).$mount("#app");
}


