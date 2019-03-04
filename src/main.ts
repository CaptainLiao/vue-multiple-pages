import Vue from "vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
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
