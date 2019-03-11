<template>
  <div id="app">
    <div id="nav">
      <span @click="toHome">Home</span>
      <span> | </span>
      <span @click="toAbc">toAbc</span>
      <span> | </span>
      <span @click="toAbout">toAbout</span>
    </div>
  </div>
</template>
<script lang="ts">
import vue from 'vue'
export default vue.extend({
  methods: {
    toHome() {
      console.log(111)
      this.$router.push({name: '/home/home'})
    },
    toAbc() {
      this.$router.push({name: '/home/abc'})
    },
    toAbout() {
      this.$router.push({name: '/home/about'})
      //window.location.href ='../about'
    },
  }
})
</script>
<style lang="scss">

</style>
