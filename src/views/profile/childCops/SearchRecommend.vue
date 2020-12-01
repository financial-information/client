<template>
<div class="profile_cards" >
    	<div class="profile_cards_head">
            <el-row >
			  <el-col :span="6" ><div class="bg-purple"><i class="el-icon-sunny"></i>热门企业</div></el-col>
			  <el-col :span="14"><div class="grid-content1" >以下排名按浏览热度先后</div></el-col>
			  <el-col :span="4"><div class="grid-content1" >查看更多<i class="el-icon-caret-right"></i></div></el-col>
			</el-row>
    	</div>
    	<div class="profile_cards_body">
    		<el-row :gutter="80" style="margin-bottom: 20px;">
    			<el-col :span="8" v-for="(i,item) in objecttop" :key="item" style="">
    				<div class="bg-purple"style="text-align: center;background: #FFFFFF;box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.27);">
	    				<img :src= "i.url" style="width: 288px;height: 250px; background-size: cover;margin-bottom: 15px;">
						 <div style="font-size: 31px;text-align: center;margin-bottom: 15px;"><span>{{i.stock_name}}</span></div>
	                     <el-button style="margin-bottom: 10px;"  @click="goProDetailed(i.stock_name)">查看详情</el-button>
    			    </div>
    			</el-col>
    		</el-row>

			<el-row v-for="n in 2" :gutter="80" style="margin-bottom: 20px;">
    			<el-col :span="12" v-for="j in 2">
    				<div class="profileCards" id="profileCards" >
						<div style="margin-bottom: 15px;">
							<el-container style="width:100%;height:95px;">
								<el-aside style="width: 30%"><img :src= "objectmain[(n-1)*2+(j-1)].url" style="width: 120px;height: 80px; background-size: cover;"></el-aside>
								<el-main style="width: 55%;">
									<el-row style="font-size: 27px;height: 27px;margin-bottom:5px;">{{objectmain[(n-1)*2+(j-1)].stock_name}}</el-row>
									<el-row style="font-size: 15px;height: 18px;
								color: #9A9A9A;">{{objectmain[(n-1)*2+(j-1)].stock_name}}</el-row>
								</el-main>
							</el-container>
							<el-container width="100%">
								<el-main style="width: 100%;height:81px;font-size:15px;color: #9A9A9A;word-break: break-all;text-overflow: ellipsis; overflow: hidden;display: -webkit-box;
								    -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
									上海浦东发展银行股份有限公司是一家全国性股份制商业银行,主营业务是提供银行及相关金融服务；主要产品为大客户经营业务、对公存贷款业务、投资银行业务、交易银行业务、国际业务平台业务、个人客户与存款业务、消费及小微金融业务、个人理财业务、借记卡及支付结算业务、信用卡业务、私人银行业务、投资交易业务、金融机构业务、资产管理业务、资产托管业务；公司荣誉有美国《福布斯》杂志被评为“全球企业2000强”排名榜单第70位，居上榜中资企业第13位、中资银行第9位；被英国《银行家》杂志评为“全球银行1000强”排名榜单第25位，居上榜中资银行第8位，成本收入比全球第一，2019年度中国网金融扶贫先锋榜评选“金融扶贫先锋机构”。
							    </el-main>
							</el-container>
						</div>
						<div style="margin-left: 320px;">
							<el-button style="margin-bottom: 10px;" @click="goProDetailed(objectmain[(n-1)*2+(j-1)].stock_name)">查看详情</el-button>
						</div>
    			    </div>
    			</el-col>
    		</el-row>
    	</div>
    </div>


</template>

<script >
	export default{
		name:'Searchrecommend',
		data(){
			return{
				showout:'',
               objecttop:[
    	{
    		url: require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	},
    	{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	},{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	}],
    	objectmain:[
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
	.profile_cards{
	width: 80%;
	margin-left: 10%;
	margin-right: 10%;
	background: white
	;
	padding-top: 44px ;
	

}
.profile_cards_head{
	margin-right: 75px;
	margin-left: 75px;
	margin-bottom: 20px;
	border-bottom: 1px solid #F8F8F8;


}
.profile_cards_head .bg-purple{
    font-size: 45px;
    color: #6D6B6B;
}
.profile_cards_head .grid-content1{
   font-size: 25px;
   color: #6D6B6B;
   margin-top:21px;
   opacity: 0.62;
}
.profile_cards_head .grid-content2{
   font-size: 25px;
   color: #6D6B6B;
   margin-top:21px;
}
.profile_cards_head /deep/ el-row{
	height: 60px;
	display: flex;
	align-items: bottom;
	bottom: 0;
}

.profile_cards_body{
	margin-right: 75px;
	margin-left: 75px;
}
.profileCards{
background: #FFFFFF;padding-left: 30px;padding-top: 22px;padding-right: 15px;
border-width:2px  2px 2px 8px;
border-color:#494DC2;
border-style: solid;
border-radius: 10px;

box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27)
}
.profileCards:hover {
	/*border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
	color: #FFFFFF;*/
	border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;
    border-radius: 10px;
}
.profile_cards_body /deep/ .el-button{
	/*border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
	color: #FFFFFF;*/
	width: 95px;
height: 42px;
color:white;
background: #494DC2;
border-radius: 8px;
 
}
.profile_cards_body /deep/ .el-button:hover{
	/*border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
	color: #FFFFFF;*/
	background-color: #FFB700;
}
</style>