<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-wrapper" />
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  }
}
</script>

<style lang="scss">
@import 'layout';
</style>
