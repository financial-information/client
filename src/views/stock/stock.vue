<template>
  <div id="stock">
  	<div class="stock_box">
  		<div class="stock_box_head">
  			企业信息-{{stock}}
  		</div>
  		<div class="stock_box_router">
  			<el-row>
  				<i class="el-icon-location" @click="$router.back(-1)"></i>
  				<span @click="$router.back(-1)">首页</span>
  				<i class="el-icon-d-arrow-right"></i>
  				<span>{{stock}}</span>
  			</el-row>
  		</div>
  		<div class="stock_box_banner" >
  			<div class="stock_box_main">
  				<el-container>
                    <el-aside width="210px"><img src="~@/assets/img/common/logo.png" style="width: 210px;"></el-aside>
                    <el-container>
                        <el-header >
                             <el-row>
                             	<span class="stock_info_name">{{stock}}</span>
                             	<i class="el-icon-phone"></i>
  				                 <span>电话</span>
  				                 <i class="el-icon-message"></i>
  				                 <span>邮箱</span>
                             </el-row>
                             <el-row>
                             	 <a v-bind:href="'http://'+info[0].website">{{info[0].website}}</a>
                             </el-row>
                        </el-header>
                        <el-main>
                        	 <el-row>
                             	<el-col :span="12"><div>成立时间：{{info[0].found_date}}</div></el-col>
                                 <el-col :span="12"><div>法人代表：{{info[0].legal_representative}}</div></el-col>
                             </el-row>
                             <el-row>
                             	 <el-col :span="12"><div >注册地：{{info[0].registered_address}}</div></el-col>
                                 <el-col :span="12"><div >主营业务：{{info[0].business_scope}}</div></el-col>
                             </el-row>
                              <el-row>
                             	 <el-col :span="12"><div>所属行业：{{info[0].found_date}}</div></el-col>
                             </el-row>

                        </el-main>
                    </el-container>
                </el-container>
  			</div>
  		    <div class="stock_info">
  		    	<div class="stock_info_total">
  		    		<el-container>
					  <el-aside class="stock_info_total_1">
					  	<div class="stock_info_total_11"><span >股票数据</span></div>
					  	
					  </el-aside>
					  <el-main>
					         <el-row  id="stock_info_total_21">
                             	<el-col :span="12"><div>股票代码：{{info[0].stock_code}}</div></el-col>
                                 <el-col :span="12"><div>A股总资本：{{info[0].legal_representative}}</div></el-col>
                             </el-row>
                             <el-row id="stock_info_total_21">
                             	 <el-col :span="12"><div>A股简称：{{info[0].registered_address}}</div></el-col>
                                 <el-col :span="12"><div>A股流通资本：{{info[0].business_scope}}</div></el-col>
                             </el-row>
                             <el-row id="stock_info_total_22">
                             	 <el-col :span="20"><div>A股上市日期：{{info[0].registered_address}}</div></el-col>
                                 <el-col :span="4" ><div style="font-size: 15px;color: #484CBF;position: absolute;bottom: 0;">查看更多详情<i class="el-icon-arrow-right"></i></div></el-col>
                             </el-row>
                       </el-main>
					</el-container>
  		    	</div>
  		    	<div class="stock_info_today">
  		    		<el-container>
					  <el-aside class="stock_info_today_1">
					  	<div class="stock_info_today_11"><span >17.89</span></div>
					  </el-aside>
					  <el-main>
					  	<div style="margin-top: 9px;">
					  	     <el-row  id="stock_info_today_21">
                             	<el-col :span="8"><div>成交量（万手）100.78</div></el-col>
                                 <el-col :span="5"><div>涨跌 -0.02</div></el-col>
                                 <el-col :span="5"><div>今开 17.75</div></el-col>
                                 <el-col :span="6"><div>最高价 18.36</div></el-col>
                             </el-row>
                             <el-row id="stock_info_today_21">
                             	 <el-col :span="8"><div>成交量（亿元）18.13</div></el-col>
                                 <el-col :span="5"><div>涨跌幅 -0.11%</div></el-col>
                                 <el-col :span="5"><div>昨收 17.77</div></el-col>
                                 <el-col :span="6"><div>最低价 17.60</div></el-col>
                             </el-row>
                         </div>
					  </el-main>
					</el-container>
  		    	</div>
  		    	<div class="stock_info_chart">
  		    		<el-row >
					  		<el-col :span="3" ><span @click="selectType = 'minute'" v-bind:class="[beforeClass ,selectType==='minute' ? affterClass : '']" >分时</span></el-col>
                            <el-col :span="3" ><span  @click="selectType = 'day'" v-bind:class="[beforeClass ,selectType==='day' ? affterClass : '']" >日线</span></el-col>
                            <el-col :span="3" ><span  @click="selectType = 'week'" v-bind:class="[beforeClass ,selectType==='week' ? affterClass : '']" >仙仙</span></el-col>
                            <el-col :span="3" ><span  @click="selectType = 'month'" v-bind:class="[beforeClass ,selectType==='month' ? affterClass : '']" >月线</span></el-col>				  	
                        </el-row>
                        <div class="stock_detailed_echarts">
                        	<div id="detaliedMinEcharts"  v-if="this.selectType==='minute'">
                         		<img src="http://image.sinajs.cn/newchart/min/n/sh000001.gif" style="height: 100%;">
                         	</div>
                         	<div id="detaliedDayEcharts"  v-if="this.selectType==='day'">
                         		<dayecharts></dayecharts>
                         		日线图
                         	</div>
                         	<div id="detaliedWeekEcharts"  v-if="this.selectType==='week'">
                         		仙仙表	
                         	</div>
                         	<div id="detaliedMonthEcharts"  v-if="this.selectType==='month'">
                         		月表表	
                         	</div>
                         	
                        </div>
  		    	</div>
  		    </div>
  	    </div>
  	    <div class="stock_found">
  		    	
  		    		<el-container>
					  <el-aside class="stock_found_select"  >
					  	<el-row style="border-bottom: 1px solid #E4E4E4;">
					  	<span style="font-size: 35px;color: #737373;opacity: 1;">关键信息</span>
					  </el-row>
					  	<el-collapse v-model="activeNames" @change="handleChange">
							  <el-collapse-item title="财务分析" name="1" class="collapseItem1">
							    <div @click="detailed = 11" v-bind:class="[errorClass ,detailed===11 ? activeClass : '']">盈利能力</div>
							    <div @click="detailed = 12" v-bind:class="[errorClass ,detailed===12 ? activeClass : '']">偿还能力</div>
							    <div @click="detailed = 13" v-bind:class="[errorClass ,detailed===13 ? activeClass : '']">运营能力</div>
							    <div @click="detailed = 14" v-bind:class="[errorClass ,detailed===14 ? activeClass : '']">发展能力</div>
							  </el-collapse-item>
							  <el-collapse-item title="风险分析" name="2" class="collapseItem2">
							    <div @click="detailed = 21" v-bind:class="[errorClass ,detailed===21 ? activeClass : '']">控制反馈</div>
							    <div @click="detailed = 22" v-bind:class="[errorClass ,detailed===21 ? activeClass : '']">页面反馈</div>
							  </el-collapse-item>
							  <el-collapse-item title="企业价值" name="3" class="collapseItem3">
							    <div @click="detailed = 31" v-bind:class="[errorClass ,detailed===31 ? activeClass : '']">简化流程</div>
							    <div @click="detailed = 32" v-bind:class="[errorClass ,detailed===32 ? activeClass : '']">清晰明确</div>
							    <div @click="detailed = 33" v-bind:class="[errorClass ,detailed===33 ? activeClass : '']">帮助用户识别</div>
							  </el-collapse-item>
							  <el-collapse-item title="发展前景" name="4" class="collapseItem4">
							    <div @click="detailed = 41" v-bind:class="[errorClass ,detailed===41 ? activeClass : '']">用户决策</div>
							    <div @click="detailed = 42" v-bind:class="[errorClass ,detailed===42 ? activeClass : '']">结果可控</div>
							  </el-collapse-item>
							</el-collapse>
					  </el-aside>
					  <el-main class="stock_found_data">
					  	<el-row v-if=" todatas === false" style="border-bottom: 1px solid #E4E4E4;">
					  		<el-col :span="20"><div><span style="font-size: 35px;color: #737373;opacity: 1;">详细图表</span></div></el-col>
                            <el-col :span="4" ><div class="grid-content bg-purple-light" style="font-size: 15px;color: #484CBF;position: absolute;bottom: 0;" @click="todatas = true"><span>查看详细数据<i class="el-icon-arrow-right"></i></span></div></el-col>				  	
                        </el-row>
                        <el-row v-if=" todatas === true" style="border-bottom: 1px solid #E4E4E4;">
					  		<el-col :span="20"><div><span style="font-size: 35px;color: #737373;opacity: 1;">详细数据</span></div></el-col>
                            <el-col :span="4" ><div class="grid-content bg-purple-light" style="font-size: 15px;color: #484CBF;position: absolute;bottom: 0;" @click="todatas = false"><span>查看详细图表<i class="el-icon-arrow-right"></i></span></div></el-col>				  	
                        </el-row>
                         <div id="detaild_data_echarts" style="">
                         	<div id="detalied0"  v-if="this.detailed===0">
                         		<img src="~@/assets/img/home/nodata.png" style="height: 100%;">
                         	</div>
                         	<div id="detalied110"  v-if="this.detailed===11 &&this.todatas===false">
                         		盈利能力图表    		
                         	</div>
                         	<div id="detalied111"  v-if="this.detailed===11 &&this.todatas===true">
                         		盈利能力数据    		
                         	</div>
                         	<div id="detalied120"  v-if="this.detailed===12 &&this.todatas===false">
                         		偿还能力图表    		
                         	</div>
                         	<div id="detalied121"  v-if="this.detailed===12 &&this.todatas===true">
                         		偿还能力数据    		
                         	</div>
                         	<div id="detalied130"  v-if="this.detailed===13 &&this.todatas===false">
                         		运营能力图表    		
                         	</div>
                         	<div id="detalied131"  v-if="this.detailed===13 &&this.todatas===true">
                         		运营能力数据    		
                         	</div>
                         	<div id="detalied140"  v-if="this.detailed===14 &&this.todatas===false">
                         		发展能力图表    		
                         	</div>
                         	<div id="detalied141"  v-if="this.detailed===14 &&this.todatas===true">
                         		发展能力数据    		
                         	</div>
                         	
                         </div>
					  </el-main>
					</el-container>
  		    	
  		</div>
</div>
   <footers></footers>
  </div>
</template>

<script>
	import Footers from "@/components/content/Footer"
	import  Dayecharts from "./childCops/Dayecharts.vue"
  import { getCompanyBasicData } from '@/network/tyy'
export default {

  name: 'Stock',
  components:{
          Footers,
          Dayecharts
  },

  data () {
    return {
    	stock:'',
    	info:[
            {
             stock_code: "600000.SH",
			 stock_name: "浦发银行",
			credit_code: "9131000013221158XC",
			company_name: "上海浦东发展银行股份有限公司",
			found_date: "1992-10-19",
			business_code: "310000000013047",
			registered_capital: "29352134127.0",
			legal_representative: "郑杨",
			phone: "86-21-63611226",
			registered_address: "上海市黄浦区中山东一路12号",
			website: "www.spdb.com.cn",
			profile: "　　上海浦东发展银行股份有限公司是一家全国性股份制商业银行,主营业务是提供银行及相关金融服务；主要产品为大客户经营业务、对公存贷款业务、投资银行业务、交易银行业务、国际业务平台业务、个人客户与存款业务、消费及小微金融业务、个人理财业务、借记卡及支付结算业务、信用卡业务、私人银行业务、投资交易业务、金融机构业务、资产管理业务、资产托管业务；公司荣誉有美国《福布斯》杂志被评为“全球企业2000强”排名榜单第70位，居上榜中资企业第13位、中资银行第9位；被英国《银行家》杂志评为“全球银行1000强”排名榜单第25位，居上榜中资银行第8位，成本收入比全球第一，2019年度中国网金融扶贫先锋榜评选“金融扶贫先锋机构”。",
			stock_type: "11100000000000000001",
			business_scope: "提供银行及相关金融服务",
			listed: "0",
			deteled: "0"
            }
    	],
    	activeNames: ['0'],
    	detailed: 0,
    	activeClass: 'classAffter',
        errorClass: 'classBefore',
        beforeClass:'classFirst',
        affterClass:'classFinall',
    	todatas: false,
    	selectType: 'day'
        }
  },
  created(){
  	this.stock = this.$route.query.Shares
  },
  mounted() {
    let data = {
      "id": 1
    }
    getCompanyBasicData(data).then(res => {
      console.log(res)
    })
  },
  methods:{
  	handleChange(val) {
        console.log(val);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
#stock{
	
	background: url("~@/assets/img/home/company_info_background.png") #F3F8FF no-repeat center top;
   
}
.stock_box{
	width: 80%;
	margin-left: 10%;
	padding-bottom: 30px;
}
.stock_box_head{
	padding-top: 51px;
	height: 107px;
	font-size: 81px;
	color: white;
}
.stock_box_router{
	padding-top: 25px;
	font-size: 32px;
	color: white;
}
.stock_box_banner{
	/*
	border: 2px solid purple;*/
	margin-top: 25px;
	background-color: white; 
	padding: 39px;
	margin-bottom: 30px;
}
.stock_box_main{
	margin-bottom: 20px;
}
.el-header {
    height: 105px !important;
 }
.stock_info_name{
	width: 264px;
	height: 87px;
	font-size: 66px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	line-height: 87px;
	color: #303030;
	opacity: 1;
}
a{
	text-decoration: none;
	color:gray;
}
.stock_info{
	background: #FFFFFF;
	border: 1px solid #DEDEDE;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
	opacity: 1;
	padding-left: 20px;
	padding-right: 20px;

}
.stock_info_total{
	height: 100px;
	margin-bottom: 20px;
    border-bottom: 2px solid #E4E4E4;

}
.stock_info_total_1{
	
	height: 100px !important;
	width: 210px !important;
}
.stock_info_total_11{
	display: flex;
	height: 100px;
	font-size: 32px;
    color: #737373;
    line-height: inherit;
	opacity: 1;
	align-items: center;
	justify-content: center;
}
#stock_info_total_21{
	width: 80%;
    border-bottom: 1px solid #E4E4E4;
}
#stock_info_total_22{
	width: 100%;
}

.stock_info_today{
	height: 100px;
	margin-bottom: 20px;
    
	padding-top: 3px;
	padding-bottom:  3px;
background: #F9F9F8;
border: 2px solid #E4D8C0;
}
.stock_info_today_1{
	
	height: 100px !important;
	width: 210px !important;
}
.stock_info_today_11{
	display: flex;
	height: 100px;
	font-size: 32px;
    color: #737373;
    line-height: inherit;
	opacity: 1;
	align-items: center;
	justify-content: center;
	border-right: 1px solid #E3E3E3;
}
.stock_info_today_21{
	width: 100%;
}
.stock_info_chart{
	height: 967px;
	padding: 15px;
	margin-bottom: 0px;
}
.stock_detailed_echarts{
	height: 900px;
	margin-top: 15px;

	width: 100%;
	border: 2px solid purple;
}
/*
.el-collapse-item{
     margin-left: 30px;
     background: #E4E5FF;
}*/
.el-collapse-item>>>.el-collapse-item__header{
	margin-top: 5px;
	padding-left: 30px;
	background: #E4E5FF;

border-radius: 17px;

}
.el-collapse-item div{
	
}
.el-collapse-item div:hover {
  color: rgb(73, 77, 194);
}
.stock_found_select{
	height: 700px;
	background-color: white;/*
	border: 2px solid purple;*/
	padding-top: 28px;
	padding-left: 33px;
	padding-right: 33px;
	margin-right: 5%;
}
.stock_found_data{
	height: 800px;
	padding-top: 28px;
	padding-left: 33px;
	padding-right: 33px;
	background-color: white;
	/*border: 2px solid purple;*/
}
#detaild_data_echarts{
	margin-top: 10px;
	width: 100%;
	height: 688px;
	border: 2px solid black;
}
.classBefore{
    margin-left: 23px;
	color:black;
}
.classAffter{
	 margin-left: 23px;
	 color: rgb(73, 77, 194);
}
.classFirst{
	width: 56px;
height: 37px;
font-size: 28px;
font-family: Microsoft YaHei;
font-weight: 400;
line-height: 37px;
color: #7B7B7B;
opacity: 1;
}
.classFinall{
	width: 62px;
height: 41px;
font-size: 31px;
font-family: Microsoft YaHei;
font-weight: bold;
line-height: 41px;
color: #E4696D;
opacity: 1;
border-bottom: 2px solid #E4696D;
}
</style>