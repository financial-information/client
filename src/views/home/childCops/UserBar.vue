<template>
	<div class="home_banner">
		<div class="home_banner_box">
		<el-row class="banner_text">
				<el-col class="banner_title"><span>用户入口 User entrance</span></el-col>
		</el-row>
		<el-row class="banner_content">
			<el-col :span="2">
				<i class="el-icon-user"></i>
				<el-button type="text">投资者</el-button>
			</el-col>
			<el-col :span="2">
				<i class="el-icon-s-custom"></i>
				<el-button type="text">会员机构</el-button>
			</el-col>
			<el-col :span="2">
				<i class="el-icon-document-copy"></i>
				<el-button type="text">更多内容</el-button>
			</el-col>
		</el-row>
		<el-row class="banner_content">
			<el-col :span="2">
				<i class="el-icon-office-building"></i>
				<el-button type="text">政府机构</el-button>
			</el-col>
			<el-col :span="2">
				<i class="el-icon-mic"></i>
				<el-button type="text">媒体单位</el-button>
			</el-col>
		</el-row>
          </div>
	</div>
</template>

<script>
export default {

  name: 'Userbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.home_banner{
	height: 300px;
	background: url("~@/assets/img/home/home_user_enter.png") no-repeat top/150% auto;
	width: 80%;
	margin-left:10%;
	margin-bottom: 0px;
	min-width: 960px;
}
.home_banner_box{


}
.banner_text{
	color: #fff;
	margin-left:30px;
	font-size: 20px;
}
.banner_title{
	margin-top:30px;
}
.banner_content{
	margin-top:20px;
	margin-left:30px;
}
.el-button{
	color:#fff;
}
i{
	color: #fff;
	font-size: 20px;
}
</style>