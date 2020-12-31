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
                <img :src= " companyinfo.url" style="width: 210px;height: 200px; background-size: cover;">
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
                                 <div>总资本：{{info.total_share_capital}}</div>
                            </el-col>
                        </el-row>
                        <el-row id="stock_info_total_21">
                           	 <el-col :span="12">
                                 <div>股票简称：{{info.stock_name}}    </div>
                             </el-col>
                             <el-col :span="12">
                                  <div>流通资本：{{info.total_share_capital}}</div>
                             </el-col>
                        </el-row>
                        <el-row id="stock_info_total_22">
                           	 <el-col :span="19">
                                 <div>股票类型：{{showtype(companyinfo.stock_type)}}</div>
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
    					  	<el-collapse v-model="activeNames" @change="handleChange" accordion>
    							  <el-collapse-item title="财务分析" name="1" class="collapseItem1">
    							    <div @click="detailed = 11" v-bind:class="[errorClass ,detailed===11 ? activeClass : '']">盈利能力</div>
    							    <div @click="detailed = 12" v-bind:class="[errorClass ,detailed===12 ? activeClass : '']">偿还能力</div>
    							    <div @click="detailed = 13" v-bind:class="[errorClass ,detailed===13 ? activeClass : '']">运营能力</div>
    							    <div @click="detailed = 14" v-bind:class="[errorClass ,detailed===14 ? activeClass : '']">发展能力</div>
    							  </el-collapse-item>
    							  <el-collapse-item title="风险分析" name="2" class="collapseItem2" @click="detailed = 14" >
    							   
    							  </el-collapse-item>
    							  <el-collapse-item title="企业价值" name="3" class="collapseItem3">
                      <div style="margin-left: 20px;">
                        企业价值由各方面因素综合计算所得
                      </div>
    							  </el-collapse-item>
    							  <el-collapse-item title="发展前景" name="4" class="collapseItem4">
    							    <div style="margin-left: 20px;">我们将通过一些预测值来反映公司的发展前景</div>
    							  </el-collapse-item>
    							</el-collapse>
    					  </el-aside>
					  <el-main class="stock_found_data">
                <el-row>
                    <div style="float: right;margin-right: 20px;margin-top: 10px;">
                        <el-button plain icon="el-icon-star-off" v-if="!show2" @click="addCollectionData(companyinfo.id,2)">点击收藏</el-button>
                        <el-button v-if="show2" style="background-color:#494DC2; " plain icon="el-icon-star-off" disabled>已收藏</el-button>
                    </div>
                </el-row>
    					  <el-row v-if=" todatas === false &&this.showname==1" style="border-bottom: 1px solid #E4E4E4;">
    					  		<el-col :span="20"><div><span style="font-size: 35px;color: #737373;opacity: 1;">详细图表</span></div></el-col> 
                    <el-col  :span="4" >
                        <div class="grid-content bg-purple-light" style="font-size: 15px;color: #484CBF;position: absolute;bottom: 0;" @click="todatas = true"><span>查看详细数据<i class="el-icon-arrow-right"></i></span></div>
                    </el-col>	
                </el-row>
                <el-row v-if=" todatas === true &&this.showname==1" style="border-bottom: 1px solid #E4E4E4;">
            	  		<el-col :span="20"><div><span style="font-size: 35px;color: #737373;opacity: 1;">详细数据</span></div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-light" style="font-size: 15px;color: #484CBF;position: absolute;bottom: 0;" @click="todatas = false"><span>查看详细图表<i class="el-icon-arrow-right"></i></span></div></el-col>		
                </el-row>
                <el-row v-if=" this.showname==2||this.showname==3||this.showname==4" style="border-bottom: 1px solid #E4E4E4;">
                    <el-col :span="20" v-if="this.showname==2"><div><span style="font-size: 35px;color: #737373;opacity: 1;">风险分析</span></div></el-col>
                    <el-col :span="20" v-if="this.showname==3"><div><span style="font-size: 35px;color: #737373;opacity: 1;">企业价值</span></div></el-col>
                    <el-col :span="20" v-if="this.showname==4"><div><span style="font-size: 35px;color: #737373;opacity: 1;">发展前景</span></div></el-col>
                </el-row>

                <div id="detaild_data_echarts" style="">
                     	<div id="detalied0"  v-if="this.detailed===0">
                     		<img src="~@/assets/img/home/nodata.png" style="height: 100%;">
                     	</div>
                     	<div id="detalied110"  v-show="this.detailed===11 &&this.todatas===false" style="width: 500px;">{{ProfitabilityTableData[0].data.slice(1, 6).map(Number) }} 
                        <div id="mychart10" ref="mychart10" v-show="this.detailed===11 &&this.todatas===false" style="width: 500px;height: 500px;">sss</div>
                     		盈利能力图表  		
                     	</div>
                     	<div id="detalied111"  v-if="this.detailed===11 &&this.todatas===true">
                     		盈利能力数据 
                        <el-table :data="ProfitabilityTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="2015" prop=data[1]> </el-table-column>
                            <el-table-column label="2016" prop="data[2]"> </el-table-column>
                            <el-table-column  label="2017" prop="data[3]"> </el-table-column>
                            <el-table-column label="2018"  prop="data[4]">  </el-table-column>
                            <el-table-column label="2019" prop="data[5]"> </el-table-column>
                           
                        </el-table>   		
                     	</div>
                     	<div id="detalied120"  v-if="this.detailed===12 &&this.todatas===false">
                     		偿还能力图表    		
                     	</div>
                     	<div id="detalied121"  v-if="this.detailed===12 &&this.todatas===true">
                        
                     		偿还能力数据   
                        <el-table :data="SolwencyTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="2015" prop=data[1]> </el-table-column>
                            <el-table-column label="2016" prop="data[2]"> </el-table-column>
                            <el-table-column  label="2017" prop="data[3]"> </el-table-column>
                            <el-table-column label="2018"  prop="data[4]">  </el-table-column>
                            <el-table-column label="2019" prop="data[5]"> </el-table-column>
                           
                        </el-table>        		
                     	</div>
                     	<div id="detalied130"  v-show="this.detailed===13 &&this.todatas===false">
                     		运营能力图表    		
                     	</div>
                     	<div id="detalied131"  v-if="this.detailed===13 &&this.todatas===true">
                     		运营能力数据  
                        <el-table :data="OperateTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="2015" prop=data[1]> </el-table-column>
                            <el-table-column label="2016" prop="data[2]"> </el-table-column>
                            <el-table-column  label="2017" prop="data[3]"> </el-table-column>
                            <el-table-column label="2018"  prop="data[4]">  </el-table-column>
                            <el-table-column label="2019" prop="data[5]"> </el-table-column>
                           
                        </el-table>       		
                     	</div>
                     	<div id="detalied140"  v-if="this.detailed===14 &&this.todatas===false">
                     		发展能力图表    		
                     	</div>
                     	<div id="detalied141"  v-if="this.detailed===14 &&this.todatas===true">
                     		发展能力数据  
                        <el-table :data="DevelopTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="2015" prop=data[0]> </el-table-column>
                            <el-table-column label="2016" prop="data[1]"> </el-table-column>
                            <el-table-column  label="2017" prop="data[2]"> </el-table-column>
                            <el-table-column label="2018"  prop="data[3]">  </el-table-column>
                            <el-table-column label="2019" prop="data[4]"> </el-table-column>
                           
                        </el-table>       		
                     	</div>
                      <div id="detalied2"  v-if="this.detailed==2">
                        风险分析 
                        <el-table :data="RiskTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="数值" prop=data> </el-table-column>
                           
                        </el-table>           
                      </div>
                      <div id="detalied3"  v-if="this.detailed==3">
                        企业价值
                        <el-table :data="EnterpriseTableData" border>
                          
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="数值（单位：元）" prop=data> 
                            </el-table-column>
                           
                        </el-table>           
                      </div>
                      <!-- this.detailed==4 -->
                      <div id="detalied4"  v-show="this.detailed==4" style="">
                        <!-- <div id="mychart4" ref="mychart4" v-show="this.detailed==4"></div> -->
                        <el-table v-if="this.detailed==4":data="DevelopForestTableData" border>
                            <el-table-column label="指标名称"prop="name"></el-table-column>
                            <el-table-column label="数值（单位：元）" prop=data> 
                            </el-table-column>
                        </el-table>           
                      </div>
                         	
               </div>
					  </el-main>
					</el-container>
  		</div>
</div>  </div>
</template>

<script>
import Footers from "@/components/content/Footer"
import { searchCompanyFinanceData,addCollectData } from "@/network/tyy"
import { searchCompanyOneData,isCollected} from "@/network/tyy"
import echarts from 'echarts'
export default {
  name: 'Stock',
  components:{
          Footers,
  },
  mounted() {
    this.code=this.$route.query.code
    this.names=this.$route.query.name
    this.getCompanyFinanceData()
    this.searchCompanyData()
   // this.draw()
    this.draw10()
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
      OperateTableData:[{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]}],
      DevelopTableData:[{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]}],
      DevelopForestTableData: [{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]},{name:'',data:[]}],
      EnterpriseTableData: [{name:'',data:[]}],
      RiskTableData:[{name:'',data:[]},{name:'',data:[]},{name:'',data:[]}],
      show1:false,
      show2:false,
      showname: 0 ,
      detailed4:false,
      chartsData4:[0,0,0,0,0,0,0],
      imgList:[],
      type:["全部A股 ","上证A股 ","深证A股 ","中小企业板 ","创业板 ","科创板 ","深证主板A股 ","全部B股 ","上证B股 ","深证B股 ","全部AB股","上证AB股 ","深证AB股 "]
      }
  },
  created(){
    
  },

  methods:{
  //     draw(){
  //       console.log(this.detailed)
  //         console.log('sygunba')
  //         // 基于准备好的dom，初始化echarts实例
  //       let myChart = this.$echarts.init(document.getElementById("mychart4"))
  //       // 绘制图表
  //       let option={
  //         title: { text: '深圳指数' },
  //           tooltip: {},
  //           xAxis: {
  //               data: ["每股收益","每股净利润","主营业务收入","息税前利润","每股现金流","利润总额","营业利润"]
  //           },
  //           yAxis: {
  //           },
  //           series: [{
  //               name: '销量',
  //               type: 'bar',
  //               data: this.chartsData4.slice(0, 6)
  //           }]
  //       }
  //       myChart.setOption(option)
  //     return myChart
        
  // }
  //   ,
  	  handleChange(val) {
        console.log("gun")
        if(val==1||val==0)
          this.detailed=0
        console.log(val)
        this.showname=val
        if(val==2||val==3||val==4){
          this.detailed=val
        }
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
              //console.log(this.ProfitabilityTableData[2].data.slice(1, 6).map(Number))
            // 偿还能力
              this.SolwencyTableData[0].name="现金比率（%）"
              this.SolwencyTableData[0].data=this.info.cash_ratio.split(';')
              this.SolwencyTableData[1].name="现金流量比率(%)"
              this.SolwencyTableData[1].data=this.info.cash_flow.split(';')
              this.SolwencyTableData[2].name="资产负债率(%)"
              this.SolwencyTableData[2].data=this.info.asset_liability_ratio.split(';')
            // 运营能力
              this.OperateTableData[0].name="存货周转天数"
              this.OperateTableData[0].data=this.info.inventory_turnover_days.split(';')
              this.OperateTableData[1].name="流动资产周转天数"
              this.OperateTableData[1].data=this.info.current_assets_turnover_days.split(';')
              this.OperateTableData[2].name="应收账款周转天数"
              this.OperateTableData[2].data=this.info.sales_outstanding_turnover_days.split(';')
            // 发展能力
              this.DevelopTableData[0].name="股东权益增长率（%）"
              let aa=[]
              aa=this.info.shareholders_equity_ratio.split(';')
              for(let i=0;i<=4;i++)
                aa[i]=(aa[i+1]-aa[i]).toFixed(4)
              this.DevelopTableData[0].data=aa
              this.DevelopTableData[1].name="资产增长率（%）"
              let bb=[]
              bb=this.info.total_assets.split(';')
              for(let i=0;i<=4;i++)
                bb[i]=(bb[i+1]-bb[i]).toFixed(4)
              this.DevelopTableData[1].data=bb
              this.DevelopTableData[2].name="营业利润增长率（%）"
              let cc=[]
              cc=this.info.operating_profit_total.split(';')
              for(let i=0;i<=4;i++)
                cc[i]=((cc[i+1]-cc[i])*100/cc[i]).toFixed(4)
              this.DevelopTableData[2].data=cc
               // 发展前景
              this.DevelopForestTableData[0].name="预测每股收益（未来12个月）"
              this.DevelopForestTableData[0].data=this.info.forecast_earnings
              this.DevelopForestTableData[1].name="预测净利润（未来12个月）"
              this.DevelopForestTableData[1].data=this.info.forecast_net_profit
              this.DevelopForestTableData[2].name="预测主营业务收入（未来12个月）"
              this.DevelopForestTableData[2].data=this.info.forecast_main_business_income
              this.DevelopForestTableData[3].name="预测息税前利润（未来12个月）"
              this.DevelopForestTableData[3].data=this.info.forecast_earnings_before_tax
              this.DevelopForestTableData[4].name="预测每股现金流（未来12个月）"
              this.DevelopForestTableData[4].data=this.info.forecast_cash_flow
              this.DevelopForestTableData[5].name="预测利润总额（未来12个月））"
              this.DevelopForestTableData[5].data=this.info.forecast_total_profit
              this.DevelopForestTableData[6].name="预测营业利润（未来12个月）"
              this.DevelopForestTableData[6].data=this.info.forecast_operating_profit
              this.chartsData4[0]=parseFloat(this.info.forecast_earnings)
              this.chartsData4[1]=parseFloat(this.info.forecast_net_profit)
              this.chartsData4[2]=parseFloat(this.info.forecast_main_business_income)
              this.chartsData4[3]=parseFloat(this.info.forecast_earnings_before_tax)
              this.chartsData4[4]=parseFloat(this.info.forecast_cash_flow)
              this.chartsData4[5]=parseFloat(this.info.forecast_total_profit)
              this.chartsData4[6]=parseFloat(this.info.forecast_operating_profit)
              this.chartsData4=this.chartsData4.slice(0, 6)
               // 企业价值
              this.EnterpriseTableData[0].name="企业价值（剔除货币资金）"
              this.EnterpriseTableData[0].data=this.info.enterprise_value
              // 风险分析
              this.RiskTableData[0].name="BETA值(24周)"
              this.RiskTableData[0].data=this.info.beta
               this.RiskTableData[1].name="年化收益率（24周，单位：%）"
              this.RiskTableData[1].data=this.info.annualized_rate_return
               this.RiskTableData[2].name="年化波动率(24周，单位：%）"
              this.RiskTableData[2].data=this.info.annualized_volatility

            }
        })
      },
      searchCompanyData() {
         for(let i=0;i<60;i++)
         { 
          this.imgList.push(require('@/assets/img/profilephoto/'+i+'.jpg'))}
          let data=this.names
          searchCompanyOneData(data).then(res => {
            if(res.results == null || res.results == undefined) {

            } else  {
            for(let i = 0; i < res.results.length; i++) {
              res.results[i].url = this.imgList[(res.results[i].id)%60]
            }
            this.companyinfo = res.results[0]
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

      },
      showtype(data){
        let str=""
        for(let i=0;i<13;i++){
          if(data[i]==1&&i!=0&&i!=7&&i!=10)
            str+=this.type[i]
        }
        return str
      },
      draw10() {

      // 获取随机数据
      // this.getRandomData()
      let mycharts = this.$echarts.init(document.getElementById("mychart10"))
      let a1= this.ProfitabilityTableData[0].data.slice(1, 6).map(Number)

      let option = {
          xAxis: {
              boundaryGap: false,
              data: ['2015年', '2016年', '2017年', '2018年', '2019年',]
          },
          yAxis: {
              min:0,
              max:100,
              show: true
          },
          series: [
              {
                  name: '净资产收益率',
                  type: 'line',
                  data: a1
              },
              {
                  name: '总资产净利率ROA',
                  type: 'line',
                  data: this.ProfitabilityTableData[1].data.slice(1, 6).map(Number)
              },
              {
                  name: '销售净利率',
                  type: 'line',
                  data: this.ProfitabilityTableData[2].data.slice(1, 6).map(Number)

              }
          ]
      };
      console.log(option)
      mycharts.setOption(option)
      console.log(this.ProfitabilityTableData[0].data.slice(1,6))
      return mycharts
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
#mychart4 {
  width: 800px;
  height: 500px;
}
</style>