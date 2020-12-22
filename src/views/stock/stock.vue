<template>
  <div id="stock">
  	<div class="stock_box">
  		<div class="stock_box_head">
  			企业信息-{{names}}
  		</div>
  		<div class="stock_box_router">
  			<el-row>
  				<i class="el-icon-location" @click="$router.back(-1)"></i>
  			  <span @click="back()">返回</span>
  				<i class="el-icon-d-arrow-right"></i>
  				<span>{{names}}</span>
  			</el-row>
  		</div>
  		<div class="stock_box_banner" >
  			<div class="stock_box_main" >
  				<el-container>
              <el-aside width="210px">
                <img src="~@/assets/img/common/logo.png" style="width: 210px;">
              </el-aside>
              <el-container>
                  <el-header >
                       <el-row>
                          <span class="stock_info_name">{{companyinfo.stock_name}}</span>
                          <i class="el-icon-phone"></i>
                          <span >电话：{{companyinfo.phone}}</span>
                       </el-row>
                       <el-row>
                        <el-col><a v-bind:href="'http://'+companyinfo.website">{{companyinfo.website}}</a></el-col>
                       </el-row>
                  </el-header>
                  <el-main>
                  	 <el-row>
                       	<el-col :span="12"><div>成立时间：{{companyinfo.found_date}}</div></el-col>
                           <el-col :span="12"><div>法人代表：{{companyinfo.legal_representative}}</div></el-col>
                       </el-row>
                       <el-row>
                       	 <el-col :span="12"><div >注册地：{{companyinfo.registered_address}}</div></el-col>
                           <el-col :span="12"><div >主营业务：{{companyinfo.business_scope}}</div></el-col>
                       </el-row>
                        <el-row>
                       	 <el-col :span="12"><div>所属行业：{{companyinfo.industry_type}}</div></el-col>
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
        					  <el-main class="stock_info_total_2">
      					        <el-row  id="stock_info_total_21"  style="margin-top: 8px;">
                           	<el-col :span="12">
                                <div>股票代码：{{info.stock_code}}</div>
                            </el-col>
                            <el-col :span="12">
                                 <div>A股总资本：{{info.total_share_capital}}</div>
                            </el-col>
                        </el-row>
                        <el-row id="stock_info_total_21">
                           	 <el-col :span="12">
                                 <div>A股简称：{{info.stock_name}}    </div>
                             </el-col>
                             <el-col :span="12">
                                  <div>A股流通资本：{{info.total_share_capital}}</div>
                             </el-col>
                        </el-row>
                        <el-row id="stock_info_total_22">
                           	 <el-col :span="19">
                                 <div>A股上市日期：{{companyinfo.found_date}}</div>
                             </el-col>
                             <el-col :span="5" >
                                <div style="font-size: 15px;color: #484CBF;position: absolute;bottom: 0;">查看更多详情<i class="el-icon-arrow-right"></i></div>
                              </el-col>
                        </el-row>
                    </el-main>
  					    </el-container>
  		    	</div>
  		    	<div class="stock_info_today">
  		    		  <el-container>
      					  <el-aside class="stock_info_today_1">
      					  	<div class="stock_info_today_11"><span >17.89</span></div>
      					  </el-aside>
      					  <el-main class="stock_info_today_2">
      					  	<div style="margin-top: 9px;">
      					  	     <el-row  id="stock_info_today_21" style="margin-top: 5px;">
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
					  		<el-col :span="3" >
                  <span @click="selectType = 'minute'" v-bind:class="[beforeClass ,selectType==='minute' ? affterClass : '']" >分时</span>
                </el-col>
                <el-col :span="3" >
                  <span  @click="selectType = 'day'" v-bind:class="[beforeClass ,selectType==='day' ? affterClass : '']" >日线</span>
                </el-col>
                <el-col :span="3" >
                  <span  @click="selectType = 'week'" v-bind:class="[beforeClass ,selectType==='week' ? affterClass : '']" >周线</span>
                </el-col>
                <el-col :span="3" >
                  <span  @click="selectType = 'month'" v-bind:class="[beforeClass ,selectType==='month' ? affterClass : '']" >月线</span>
                </el-col>	
                <el-col :offset="9" :span="3" >
                    <el-button plain icon="el-icon-star-off" v-if="!show1" @click="addCollectionData(companyinfo.id,3)">点击收藏</el-button>
                    <el-button v-if="show1" style="background-color:#494DC2; " plain icon="el-icon-star-off" disabled>已收藏</el-button>
                </el-col>   		  	
              </el-row>
              <div class="stock_detailed_echarts">
                	<div id="detaliedMinEcharts" v-if="this.selectType==='minute'">
                 		<img src="http://image.sinajs.cn/newchart/min/n/sh000001.gif" style="height: 100%;">
                 	</div>
                 	<div id="detaliedDayEcharts" v-if="this.selectType==='day'">
                 		<!-- <dayecharts></dayecharts> -->
                 		日线图
                 	</div>
                 	<div id="detaliedWeekEcharts" v-if="this.selectType==='week'">
                 		仙仙表	
                 	</div>
                 	<div id="detaliedMonthEcharts" v-if="this.selectType==='month'">
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
                <el-row><div style="float: right;margin-right: 20px;margin-top: 10px;">
                <el-button plain icon="el-icon-star-off" v-if="!show2" @click="addCollectionData(companyinfo.id,2)">点击收藏</el-button>
                    <el-button v-if="show2" style="background-color:#494DC2; " plain icon="el-icon-star-off" disabled>已收藏</el-button></div></el-row>
    					  <el-row v-if=" todatas === false" style="border-bottom: 1px solid #E4E4E4;">
    					  		<el-col :span="20"><div><span style="font-size: 35px;color: #737373;opacity: 1;">详细图表</span></div></el-col> 
                    <el-col  :span="4" ><div class="grid-content bg-purple-light" style="font-size: 15px;color: #484CBF;position: absolute;bottom: 0;" @click="todatas = true"><span>查看详细数据<i class="el-icon-arrow-right"></i></span></div></el-col>	
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
                        <el-table :data="ProfitabilityTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="2016" prop=data[0]> </el-table-column>
                            <el-table-column label="2017" prop="data[1]"> </el-table-column>
                            <el-table-column  label="2018" prop="data[2]"> </el-table-column>
                            <el-table-column label="2019"  prop="data[3]">  </el-table-column>
                            <el-table-column label="2020" prop="data[4]"> </el-table-column>
                           
                        </el-table>   		
                     	</div>
                     	<div id="detalied120"  v-if="this.detailed===12 &&this.todatas===false">
                     		偿还能力图表    		
                     	</div>
                     	<div id="detalied121"  v-if="this.detailed===12 &&this.todatas===true">
                        
                     		偿还能力数据   
                        <el-table :data="SolwencyTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="2016" prop=data[0]> </el-table-column>
                            <el-table-column label="2017" prop="data[1]"> </el-table-column>
                            <el-table-column  label="2018" prop="data[2]"> </el-table-column>
                            <el-table-column label="2019"  prop="data[3]">  </el-table-column>
                            <el-table-column label="2020" prop="data[4]"> </el-table-column>
                           
                        </el-table>        		
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
import { searchCompanyFinanceData,addCollectData } from "@/network/tyy"
import { searchCompanyOneData,isCollected} from "@/network/tyy"
export default {
  name: 'Stock',
  components:{
          Footers,
  },
  data () {
    return {
    	stock:'',
    	info:[],
      companyinfo:[],
      code:'',
      names:'',
    	activeNames: ['0'],
    	detailed: 0,
    	activeClass: 'classAffter',
        errorClass: 'classBefore',
        beforeClass:'classFirst',
        affterClass:'classFinall',
    	todatas: false,
    	selectType: 'day',
      ProfitabilityTableData: [{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]}],
      SolwencyTableData: [{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]}],
      show1:false,
      show2:false
        }
  },
  created(){
    
  },
  mounted() {
    this.code=this.$route.query.code
    this.names=this.$route.query.name
    this.getCompanyFinanceData()
    this.searchCompanyData()
    
  },
  methods:{
  	  handleChange(val) {
      },
      handleClick(tab, event) {
      },
      back(){
          if(this.$route.query.find==0)
          this.$router.push({path:"/prosearch",query:{value0:this.$route.query.value0,value1:this.$route.query.value1,value2
              :this.$route.query.value2,value3:this.$route.query.value3,value4:this.$route.query.value4}})
          else if(this.$route.query.find==10)
            this.$router.go(-1)
          else{
          this.$router.back({path:"/profile"})
        }
      },
      getCompanyFinanceData(){
          let data = this.code
          console.log(data)
          searchCompanyFinanceData(data).then(res => {
             if(res.results == null || res.results == undefined) {
             } 
             else  
             {
            this.info = res.results[0]
            // 盈利能力
              this.ProfitabilityTableData[0].name="净资产收益率（%）"
              this.ProfitabilityTableData[0].data=this.info.roe.split(';')
              this.ProfitabilityTableData[1].name="总资产净利率ROA(%)"
              this.ProfitabilityTableData[1].data=this.info.roa.split(';')
              this.ProfitabilityTableData[2].name="销售净利率(%)"
              this.ProfitabilityTableData[2].data=this.info.sale_net_profit.split(';')
            // 流动比率
              this.SolwencyTableData[0].name="流动比率（%）"
              this.SolwencyTableData[0].data=this.info.current_ratio.split(';')
              this.SolwencyTableData[1].name="速动比率(%)"
              this.SolwencyTableData[1].data=this.info.quick_ratio.split(';')
              this.SolwencyTableData[2].name="资产负债率(%)"
              this.SolwencyTableData[2].data=this.info.asset_liability_ratio.split(';')
            }
          
        })
      },
      searchCompanyData() {
          let data=this.names
          searchCompanyOneData(data).then(res => {
            if(res.results == null || res.results == undefined) {

            } else  {
            for(let i = 0; i < res.results.length; i++) {
              res.results[i].url = require('@/assets/img/home/豆腐的.jpg')
            }
            this.companyinfo = res.results[0]
            console.log(res.results[0].id)
            console.log('成功啦')
            this.isCollection(res.results[0].id,2)
            this.isCollection(res.results[0].id,3)
            }
          })
      },
      isCollection(data1,data2){
         let data={
            'phone': this.$store.getters.getUserName,
            'collection_module_id': data1,
            'collection_module_type': data2,
            'deleted': '0'
          }
          console.log(data)
          isCollected(data).then(res=>{
               if(res.count>0){
                  if(data2==2)
                      this.show2=true
                  else
                      this.show1=true
               }
              //        console.log('成功啦')
          })
      },
      addCollectionData(data1,data2){
          let data={
            'user_phone': this.$store.getters.getUserName,
            'collection_id': data1,
            'collection_type':data2
          }
          addCollectData(data).then(res=>{
               if(res.status==true){
                if(data2==2)
                    this.show2=true
                else
                    this.show1=true
                this.$notify({
                title: "成功",
                message: "收藏成功",
                type: "success"
              })
               }
               else{
                this.$notify({
                title: "失败",
                message: "收藏失败",
                type: "danger"
              })
               }
              //        console.log('成功啦')
          })

      }
    }
}
</script>

<style scoped>
#stock{
	
	background: url("~@/assets/img/home/company_info_background.png") #F3F8FF no-repeat center top;
  min-width: 1260px;
   
}
.stock_box{
	width: 80%;
	margin-left: 10%;
	padding-bottom: 30px;
}
.stock_box_head{
	padding-top: 51px;
	height: 107px;
	font-size: 3em;
	color: white;
}
.stock_box_router{
	padding-top: 25px;
	font-size: 1em;
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
.stock_box_main div{
  padding: 1px;
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
.stock_info_total_2 {
  height: 100px !important;
  padding: 0px;
  padding-left: 10px;
}
.stock_info_total_2 div{
  padding: 1px;
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
.stock_info_today_2{
    height: 100px !important;
    padding: 0px;
    padding-left: 20px;
}
.stock_info_today_2 div{
    padding: 2px;
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
	/*border: 2px solid purple;
  */
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
	background-color: white;
	padding-top: 28px;
	padding-left: 33px;
	padding-right: 33px;
	margin-right: 2%;
}
.stock_found_data{
	height: 800px;
	padding-top: 5px;
	padding-left: 33px;
	padding-right: 33px;
	background-color: white;
	/*border: 2px solid purple;*/
}
#detaild_data_echarts{
	margin-top: 10px;
	width: 100%;
	height: 638px;
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