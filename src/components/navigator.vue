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
      this.$router.push({path: '/home/home'})
    },
    toAbc() {
      this.$router.push({path: '/home/abc'})
    },
    toAbout() {
      this.$router.push({path: '/about'})
    },
  }
})
</script>
<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
