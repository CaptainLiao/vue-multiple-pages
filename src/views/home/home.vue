<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png" /> -->
    
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

    <div>
      <div class="a-input-block">
        <div class="a-title">吃了吗</div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>

      <div class="a-input-block">
        <div class="a-title">吃了吗</div>
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>

      <div class="a-input-block">
        <div class="a-title">吃了吗</div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in myoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      <div class="a-input-block">
        <div class="a-title">吃了吗</div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in myoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="a-input-block">
        <div class="a-title">吃了吗</div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in myoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="a-input-block">
        <div class="a-title">吃了吗</div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in myoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>



      <div class="a-input-block">
        <div class="a-title">吃了吗</div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in myoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <div @click="tapPrint">打印</div>
    <i style="color: red" class="el-icon-location"></i>

    <div ref="page1" class="fx-row" style="page-break-after: always;display:none">
      <div class="border a-text-20">第一页打印内容</div>
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
import {removeToken} from '@/services/request/token'
import print from '@/utils/print'
import Navigator from '@/components/navigator.vue'

export default Vue.extend({
  name: "home",
  data() {
    return {
      value1: '',
      myoptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  components: {
    Navigator
  },

  watch: {
    value1(newV, oldV) {
      console.log(new Date(newV).getTime(), oldV)
    }
  },

  created() {
    removeToken()
    console.warn('remove token in home.vue');
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
  border: 1*$px solid #ccc;
}



  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }


  .el-col {
    min-height: 36px;
    border:1px solid #ccc;
    border-left: none;
    &:first-of-type {
      border-left: 1px solid #ccc;
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
