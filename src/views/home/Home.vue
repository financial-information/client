<template>
  <div id="home">
      <!-- 搜索框 -->
      <search></search>
      
      <!-- 指标信息 -->
      <information></information>
      <!-- 热点企业 -->
      <hotcompany></hotcompany>
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
import Hotcompany from "./childCops/HotCompany.vue"
import Footers from "./childCops/Footer.vue"
import Searchrecommend from "../profile/childCops/SearchRecommend.vue"
export default {
  name: 'Home',
  components:{
    Search,
    New,
    Hotcompany,
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
  min-width: 1260px;
}
</style>