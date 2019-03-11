import Vue from "vue";
import router from "./router";
import { Pagination, DatePicker, Timeline, Select,
  Option,
  OptionGroup,
  Input,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
} from 'element-ui';

Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(DatePicker)
Vue.use(Timeline)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)


import '@/scss/index.scss'


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


