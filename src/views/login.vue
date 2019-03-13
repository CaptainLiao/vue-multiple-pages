<template>
  <div class="login">

    <h1>This is an login page</h1>
  </div>
</template>

<script lang="ts">
import vue from 'vue';
import {setToken} from '@/services/request/token'

export default vue.extend({
  created() {
    console.log('login created')
    let re = this.$route.query.redirect || '/home'
    setTimeout(() => {
      setToken('xxxxxdsfd')

      setTimeout(() => {
        this.$router.push({path: re.toString()})
      }, 5000);
      
    }, 2000);
  }
});
</script>
