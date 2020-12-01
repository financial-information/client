<template>
  <div id="app">
    <!-- 导航栏 做成组件 -->
    <nav-bar></nav-bar>
    <router-view/>
    

  </div>
</template>

<script>
import NavBar from "@/components/content/NavBar"
import Footers from "@/components/content/Footer"
export default {
  name: 'App',
  components: {
    NavBar,
    Footers
  },
  
}
</script>

<style>
</style>
