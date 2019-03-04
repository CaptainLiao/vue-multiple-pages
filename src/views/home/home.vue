<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <Navigator></Navigator>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigator from '@/components/navigator.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: "home",
  components: {
    Navigator,
    HelloWorld
  },

  created() {
    console.log('home created')
  }
})

</script>
