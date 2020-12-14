<template>
	<el-container style="width:100%;">
		<el-aside style="width: 220px;">
			<img  src="~@/assets/img/home/查.jpg" style="width: 200px;height: 200px; background-size: cover;margin-left: 20px;border-radius: 50%;">
		</el-aside>
		<el-main style="">
			<el-row >
				<span>启明星</span>
			</el-row>
			<el-row >
				<span>欢迎回来</span>
             </el-row>
		</el-main>
	</el-container>
</template>
<script >
	export default{
		name:'Welcomeinfo',
		data(){
			return{

			}
		}
	}
</script>

<style scoped>

.el-main{

font-size: 59px;
font-family: Microsoft YaHei;
font-weight: bold;
line-height: 77px;
color: #000000;
opacity: 1;
}
	
</style>