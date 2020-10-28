<template>
  <div id="app">
    <!-- 导航栏 做成组件 -->
    <nav-bar></nav-bar>
    
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/content/NavBar"
export default {
  name: 'App',
  components: {
    NavBar,
  },
  
}
</script>

<style>
</style>
