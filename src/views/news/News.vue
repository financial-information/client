<template>
<div id="new">
<welcomeinfo v-show="!changeshow"></welcomeinfo>
	
    <el-tabs tab-position=left >
    <el-tab-pane label="个人信息" >
    	<personinfo ></personinfo>
    </el-tab-pane>
    <el-tab-pane label="修改信息" >
    	<changeinfo ></changeinfo>
    </el-tab-pane>
    <el-tab-pane label="消息通知">
    	<noticeinfo></noticeinfo>
    </el-tab-pane>
    <el-tab-pane label="浏览记录">
		<browseinfo></browseinfo>
	</el-tab-pane>
    <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
  </el-tabs>
  
</div>
</template>

<script>
	import Personinfo from "./childCops/PersonInfo.vue"
	import Changeinfo from "./childCops/ChangeInfo.vue"
	import Noticeinfo from "./childCops/NoticeInfo.vue"
	import Browseinfo from "./childCops/BrowseInfo.vue"
	import Welcomeinfo from "./childCops/WelcomeInfo.vue"
	import Welchangeinfo from "./childCops/WelchangeInfo.vue"

export default {

  name: 'News',
	components:{
	    Personinfo,
	    Changeinfo,
	    Noticeinfo,
	    Browseinfo,
	    Welcomeinfo,
	    Welchangeinfo
	    
  },
  data () {
    return {
       changeshow:false
    }
  },
  methods:{
  	// getshow(data){
       	
   //      this.changeshow=data
        
   //     }
  }
}
</script>

<style lang="css" scoped>
#new{
	width: 80%;
	margin-left: 10%;
}
#new >>>.el-tabs__header.is-left{

  width: 150px;
  margin-top: 20px;
   
}
</style>
