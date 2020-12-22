<template>
	<el-container style="width:100%;">
		<el-aside style="width: 220px;">
			<img  src="~@/assets/img/home/查.jpg" style="width: 200px;height: 200px; background-size: cover;margin-left: 20px;border-radius: 50%;">
		</el-aside>
		<el-main style="">
			<el-row >
				<span>{{ruleForm.username}}</span>
			</el-row>
			<el-row >
				<span>欢迎回来</span>
            </el-row>
		</el-main>
	</el-container>
</template>
<script >
import {getUserInfoData} from "@/network/tyy"
export default{
	name:'Welcomeinfo',
	data(){
		return{
        ruleForm:[]
		}
	},
    mounted(){
      this.getUserInfo()
    },
	methods:{
		getUserInfo(){
		    let data={
		     "phone" : this.$store.getters.getUserName,
		    }
	        getUserInfoData(data).then(res=>{
		        if(res!=null&&res != undefined)
		        {
		          console.log('成功成功成功') 
		          console.log(res)
		          this.ruleForm=res.results[0]
		        }      
		    })
        }
	}
}
</script>

<style scoped>

.el-main{
font-size: 50px;
font-family: Microsoft YaHei;
font-weight: bold;
line-height: 77px;
color: #000000;
opacity: 1;
}
</style>