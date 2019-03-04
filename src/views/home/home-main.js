import Vue from 'vue'
import home from './home.vue'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render(h) {
    return h('div', {
      attrs: {
        id: 'app'
      }
    }, [
      h('keep-alive', [
        this.$route.meta.keepAlive ? h('router-view', [h(home)]) : ''
      ]),
      !this.$route.meta.keepAlive && h('router-view', [h(home)])
    ])
  }
}).$mount("#app");