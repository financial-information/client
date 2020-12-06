<template>
	<div class="notice_body">
		<el-row>
			<el-button style="float: right;margin-bottom: 20px;">删除所有浏览记录</el-button>
		</el-row>
		<el-row v-for="(item,index) in objectresult" :key="index" style="margin-bottom: 20px;" >
    			<div class="noticeCards" id="noticeCards" >
						
							<el-row class="date_head">今天2020-11-25 星期三</el-row>
							
							<div class="noticeCards_body">
								<el-row v-for='(items,index) in item' :key="index"style="margin-bottom:8px;color: #A5A5A5;">
									<el-col :span="5" >
										<div class="bg-purple">
										{{items.stock_name}}</div>
									</el-col>
									<el-col :span="18">
										<div class="grid-content1">
										{{items.stock_name}}</div>
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
	export default{
		name:'Browseinfo',
		data(){
			return{
    	objectresult:[
    	[
    		{
	    		url: require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'浦发银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'平安银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'平安银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'平安银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'平安银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'平安银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'平安银行'
	    	}
        ],
    	[
    		{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'建设银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'农业银行'
	    	},
	    	{
	    		url:require('@/assets/img/home/豆腐的.jpg'),
	    		stock_name:'平安银行'
	    	}
	    ]
    	]
			}
		},
		methods:{
			goProDetailed(data){
       	this.$router.push({path:"/stock",query:{ Shares: data}})
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