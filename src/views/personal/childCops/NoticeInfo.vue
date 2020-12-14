<template>
	<div class="notice_body">
		<el-row>
			<el-button style="float: right;">删除所有信息</el-button>
		</el-row>
		<el-row style="margin-bottom: 20px;font-size: 22px;color: #000000;">
			您总共收到 <span style="color: red;">{{objectresult.length}}</span> 条信息
		</el-row>
		<el-row v-for="(item, index) in objectresult" :key="index" style="margin-bottom: 20px;">
    			<div class="noticeCards" id="noticeCards" >
						<el-container style="width:100%;">
							<el-aside style="width: 20%"><img :src= "item.url" style="width: 115px;height: 118px; background-size: cover;margin-left: 20px;"></el-aside>
							<el-main style="width: 80%;">
								<el-row style="margin-bottom:8px;">
									<el-col :span="22" ><div class="bg-purple">企查查向您发来一条信息</div></el-col>
									<el-col :span="2"><div class="grid-content1" style="font-size: 15px;color: #6D6B6B;opacity: 0.62;" >12:23</div></el-col>
								</el-row>
								<el-row >
									<div style="width: 100%;height:38px;font-size:15px;
									color: #9A9A9A;word-break: break-all;text-overflow: ellipsis; display: -webkit-box;
								    -webkit-line-clamp: 2; -webkit-box-orient: vertical;overflow: hidden;">
								    上海浦东发展银行股份有限公司是一家全国性股份制商业银行,主营业务是提供银行及相关金融服务；主要产品为大客户经营业务、对公存贷款业务、投资银行业务、交易银行业务、国际业务平台业务、个人客户与存款业务、消费及小微金融业务、个人理财业务、借记卡及支付结算业务、信用卡业务、私人银行业务、投资交易业务、金融机构业务、资产管理业务、资产托管业务；公司荣誉有美国《福布斯》杂志被评为“全球企业2000强”排名榜单第70位，居上榜中资企业第13位、中资银行第9位；被英国《银行家》杂志评为“全球银行1000强”排名榜单第25位，居上榜中资银行第8位，成本收入比全球第一，2019年度中国网金融扶贫先锋榜评选“金融扶贫先锋机构”。>
								    </div>
	                             </el-row>
	                             <el-row>
	                             	 <div class="grid-content1" style="font-size: 15px;color: #6D6B6B;opacity: 1; margin-top:5px;float: right;" @click="goProDetailed(item[n-1].company_name) ">查看详情<i class="el-icon-caret-right"></i></div>
	                             </el-row>
							</el-main>
						</el-container>
    			</div>
    	</el-row>
	</div>
</template>

<script >
	export default{
		name:'Noticeinfo',
		data(){
			return{
    	objectresult:[
    	{
    		url: require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	},
    	{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'平安银行'
    	},{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'建设银行'
    	},{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'农业银行'
    	}
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
height: 134px;
	background: white;
	padding-top: 10px ;

box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
opacity: 1;
border-radius: 14px;
}
.el-container{
	padding: 0px;
}

</style>