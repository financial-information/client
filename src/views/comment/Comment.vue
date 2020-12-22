<template>
  <div id="comment">
    <welcomeinfo ></welcomeinfo>
	
    <el-tabs tab-position=left >
    <el-tab-pane label="个人信息" >
    	<personinfo ></personinfo>
    </el-tab-pane>
    <el-tab-pane label="消息通知">
    	<noticeinfo></noticeinfo>
    </el-tab-pane>
    <el-tab-pane label="浏览记录">
		<browseinfo></browseinfo>
	</el-tab-pane>
    <el-tab-pane label="我的收藏">
     <collectinfo></collectinfo>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import Personinfo from "./childCops/PersonInfo"
import Noticeinfo from "./childCops/NoticeInfo"
import Browseinfo from "./childCops/BrowseInfo"
import Welcomeinfo from "./childCops/WelcomeInfo"
import Welchangeinfo from "./childCops/WelchangeInfo"
import Collectinfo from "./childCops/CollectInfo"
export default {
    name: 'News',
  	components:{
  	    Personinfo,
  	    Noticeinfo,
  	    Browseinfo,
  	    Welcomeinfo,
  	    Welchangeinfo,
        Collectinfo
    },
    data () {
      return {
      }
    }
}
</script>


<style lang="css" scoped>
#comment{
	width: 80%;
	margin-left: 10%;
  min-width: 1260px;
}
#comment >>>.el-tabs__header.is-left{

  width: 150px;
  margin-top: 20px;
   
}
</style>
