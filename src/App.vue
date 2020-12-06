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
  created () {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      
      // if(this.$store.getters.getLogOut != 1)
        sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    }) 
  },
  components: {
    NavBar,
    Footers
  },
  
}
</script>

<style>
</style>
