<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    
    <div @click="tapPrint">打印</div>

    <div ref="page1" style="page-break-after: always">
      <div style="border: 1px solid #ccc;">第一页打印内容</div>
      <div>第一页打印内容</div>
      <div>第一页打印内容</div>
      <div>第一页打印内容</div>
      <div>第一页打印内容</div>
      <div>第一页打印内容</div>
      <div>第一页打印内容</div>
      <div>第一页打印内容</div>
      <div>第一页打印内容</div>
    </div>
    <div ref="page2" style="page-break-after: always">
      <div>第二页打印内容</div>
    </div>
    <div ref="page3" style="page-break-after: always">
      <div>第三页打印内容</div>
    </div>

    <Navigator></Navigator>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import API from '@/services/api'
import print from '@/utils/print'

import Navigator from '@/components/navigator.vue'

export default Vue.extend({
  name: "home",
  components: {
    Navigator,
  },

  created() {
    console.log('home created')
    
    return API.querySome()
      .then(res => {
        console.log(res);
      })
      .catch(e => console.error(e)
      )
  },

  methods: {
    tapPrint() {
      let body = Object.keys(this.$refs)
        .map(k => this.$refs[k].outerHTML)
        .join('');

      print(body)
    }
  }
})

</script>

<style lang="scss">

</style>
