<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    
    <div @click="tapPrint">打印</div>
    <div id="page1" ref="page1">
      <table width="100%"  border="0" cellpadding="0" cellspacing="0" style="page-break-after: always;">
        <tr><td>第一页打印内容</td></tr>
        <tr><td>第一页打印内容</td></tr>
        <tr><td>第一页打印内容</td></tr>
        <tr><td>第一页打印内容</td></tr>
      </table>
    </div>
    <div id="page2" ref="page2">
      <table width="100%"  border="0" cellpadding="0" cellspacing="0" id="content" >
        <tr><td>第二页打印内容</td></tr>
      </table>
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
      let body =`${this.$refs.page1.innerHTML} ${this.$refs.page2.innerHTML}`
      print(body)
    }
  }
})

</script>

<style lang="scss">

</style>
