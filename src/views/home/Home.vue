<template>
  <div id="home">
      <!-- 搜索框 -->
      <search></search>
      
      <!-- 指标信息 -->
      <information></information>
      <!-- 用户入口 -->
      <userbar></userbar>
      <!-- 热点 -->
      <New></New>
      
      <hr>
      <footers></footers> 
  </div>
</template>
<script>

import Search from "./childCops/Search.vue"
import New  from "./childCops/New.vue"
import Userbar  from "./childCops/UserBar.vue"
import  Information from "./childCops/Information.vue"
import Footers from "./childCops/Footer.vue"
export default {
  name: 'Home',
  components:{
    Search,
    New,
    Userbar,
    Information,
     Footers
  },
   mounted() {

  },
  data () {
    return {
    }
  },
  computed:{
  },
  methods: {
  
  }
}
</script>

<style lang="css" scoped>
#home{
  background-color: #FDFDFD;
  min-width: 960px;
}
</style>