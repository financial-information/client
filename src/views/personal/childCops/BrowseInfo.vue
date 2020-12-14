<template>
	<div class="notice_body">
		<el-row>
			<el-button style="float: right;margin-bottom: 20px;">111删除所有浏览记录{{}}</el-button>
		</el-row>
		<el-row v-for="(item,index) in objectresult" :key="index" style="margin-bottom: 20px;" >
    			<div class="noticeCards" id="noticeCards" >
						
							<el-row class="date_head">今天 2020-11-25 星期三</el-row>
							
							<div class="noticeCards_body">
								<el-row v-for='(items,index) in item' :key="index"style="margin-bottom:8px;color: #A5A5A5;">
									<el-col :span="5" >
										<div class="bg-purple">
										{{items.id}}</div>
									</el-col>
									<el-col :span="18">
										<div class="grid-content1">
										{{items.history_module_id}}{{items.user_phone}}</div>
									</el-col>
									<el-col :span="1">
										<i class="el-icon-more" style="transform:rotate(90deg)"></i>
									</el-col>
									
								</el-row>							
							</div>
						
    			</div>
    	</el-row>
	</div>
</template>

<script >
	import {getUserHistory} from "@/network/tyy"
	export default{
		name:'Browseinfo',
		data(){
			return{
    	objectresult:[
    	
    	],
    	  phone: '19975372577'
			}
		},
		created(){
       

		},
		mounted(){
            this.getHistoryData()
		},
		methods:{
       getHistoryData(){
       	console.log(120)
	       	let data={
	           "phone": this.phone
	       	}
	       	console.log(120)
	        console.log(data)
	       	getUserHistory(data).then(res=>{
	       		console.log(res)
	       		this.objectresult=res.results
	            })
       }
		}
	}
</script>

<style lang="css" scoped>
.notice_body{
	width: 90%;
	margin-left: 5%;
}
.noticeCards{
	background: white;
	padding-top: 10px ;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
	opacity: 1;
	border-radius: 14px;
}
.date_head{
	padding-left: 18px;
	font-size: 32px;
	color: #6F6F6F;
	opacity: 1;
	border-bottom: 1px solid #9F9F9F;
}
.noticeCards_body{
	padding-left: 25px;
	padding-right: 25px;
	padding-top: 10px;
	padding-bottom:10px;
}
</style>