<template>
<sidebar>
  <el-menu
    :default-active="$route.path"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    mode="vertical"
  >
    <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/>
  </el-menu>
</sidebar>
</template>

<script>
import vue from 'vue'
import routes from '@/views/home/routes/index'

import SidebarItem from './sidebar-item.vue'
import variables from '@/scss/_vars.scss'

export default vue.extend({
  data() {
    return {
      variables,
      permission_routes: routes
    }
  },
  components: {
    SidebarItem
  },

  computed: {

  }
})
</script>

<style lang="scss" scoped>

</style>
