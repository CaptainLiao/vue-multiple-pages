<template>
<sidebar>
  <el-menu
    :default-active="$route.path"
    :collapse="isCollapse"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    mode="vertical"
  >
    <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
  </el-menu>
</sidebar>
</template>

<script>
import vue from 'vue'
import SidebarItem from './sidebar-item.vue'
import variables from '@/scss/_vars.scss'

export default vue.extend({
  components: {
    SidebarItem
  },
  computed: {
    variables() {
      return variables
    },
  }
})
</script>

<style lang="scss" scoped>

</style>
