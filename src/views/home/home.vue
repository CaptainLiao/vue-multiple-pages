<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />

    <div @click="tapPrint">打印</div>

    <div ref="page1" style="page-break-after: always">
      <div class="border">第一页打印内容</div>
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

    <form id="myForm" ref="myForm" name="myForm" enctype="multipart/form-data">
      <div>
        <label for="username">Enter name:</label>
        <input type="text" id="username" name="username">
      </div>
      <div>
        <label for="useracc">Enter account number:</label>
        <input type="text" id="useracc" name="useracc">
      </div>
      <div>
        <label for="userfile">Upload file:</label>
        <input type="file" id="userfile" name="userfile">
      </div>
      <input @click="tapSubmit" value="Submit!">
    </form>

    <div>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        :prev-text="'上一页'"
        :next-text="'下一页'"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
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
  data() {
    return {
      value1: ''
    }
  },
  components: {
    Navigator,
  },

  watch: {
    value1(newV, oldV) {
      console.log(new Date(newV).getTime(), oldV)
    }
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
    handleCurrentChange(n:number) {
      console.log(n)
    },
    tapSubmit() {
      let formData = new FormData(this.$refs.myForm as HTMLFormElement);
      // let file = document.querySelector('[type=file]');
      // if (!file) return
      // formData.append('username', 'Chris');
      // formData.append('useracc', 'sdf584585');
      // formData.append('userfile', file.files[0]);
      API.querySome({
        data: formData
      })
    },
    tapPrint() {
      let body = Object.keys(this.$refs)
        .filter(k => k.indexOf('page') != -1)
        .map(k => (this.$refs[k] as HTMLElement).outerHTML)
        .join('');
      let style = `
            .border {
              border: 1px solid #ccc;
            }
          `
      print(body, style)
    }
  }
})

</script>

<style lang="scss">
.border {
  border: 1px solid #ccc;
}
</style>
