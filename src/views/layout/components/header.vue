<template>
<header class="header fx-row fx-m-between">
  <a class="logo" href="/">
    <img src="../../assets/logo.png" alt="vue logo">
    <span>Vue.js</span>
  </a>
  <div>
    <div class="logo2">
      <img src="../../assets/logo.png" alt="vue logo">
      <span>Vue.js</span>
    </div>
    <div>吃了吗</div>
  </div>
</header>
</template>

<script>
import vue from 'vue'
export default vue.extend({
  components: {

  }
})
</script>

<style lang="scss" scoped>
.header {
  padding: 60px 0 0 0;
  height: 40px;
}

.logo img {
  vertical-align: text-bottom;
  margin-right: 6px;
  width: 40px;
  height: 40px;
}
.logo2 img {
  vertical-align: text-bottom;
  margin-right: 6px;
  width: 20px;
  height: 20px;
}
</style>
