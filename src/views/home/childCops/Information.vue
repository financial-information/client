<template>
  
    <div class="information"  style="min-width: 960px;">
    <el-container  style="width: 80%;text-align: center;margin-left: 10%;margin-bottom: 50px;">
  <el-aside style="width:45%;margin-right: 5%;" >
    <el-select v-model="period"
              placeholder="请选择活动区域"
              style="min-width:100%;">
              <el-option v-for="item in attributeList"
                :key="item.type"
                :label="item.name"
                :value="item.type">
              </el-option>
</el-select>
   <el-tabs v-model="activename" @tab-click="handleClick" type="border-card">
    <el-tab-pane label="行情指数"  for="Quotation" name="one">
      <div id="Quotation" v-show="period === 'Sz'" >
        <div id="charts10" style="width:350px;height:300px;">
        </div>
      </div>

      <div id="Quotation" v-show="period === 'Sh'">
        <div id="charts20" style="width:350px;height:300px;">
        </div>
      </div>
      <div id="Quotation" v-show="period === 'Startup'">
        <div id="charts30" style="width:350px;height:300px;">
        </div>
      </div>
      <div id="Quotation" v-show="period === 'Smes'">
        <div id="charts40" style="width:350px;height:300px;">
        </div>
      </div>
      <div id="Quotation" v-show="period === 'Star'">
        <div id="charts50" style="width:350px;height:300px;">
        </div>
      </div>
    </el-tab-pane>


    <el-tab-pane label="上市股票趋势"  for="Trend" name="two">
      <div id="Trend" v-show="period === 'Sz'">
        <div id="charts11" style="width:350px;height:300px;">
        </div>
      </div>
      <div id="Trend" v-show="period === 'Sh'">
           <div id="charts21" style="width:350px;height:300px;">
        </div>
      </div>
      <div id="Trend" v-show="period === 'Startup'">
            <div id="charts31" style="width:350px;height:300px;">
        </div>
      </div>
      <div id="Trend" v-show="period === 'Smes'">
           <div id="charts41" style="width:350px;height:300px;">
        </div>
      </div>
       <div id="Trend" v-show="period === 'Star'">
            <div id="charts51" style="width:350px;height:300px;">
        </div>
       </div>
    </el-tab-pane>
    
  </el-tabs>
    

   <!--  <el-row>
      <el-col :span="4"><label for="Quotation">行情指数</label> </el-col>
      <el-col :span="8">  <label for="Trend">上市股票趋势</label> </el-col>
      <el-col  :offset="6" :span="6">  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col> --><!-- 
  <el-tabs type="border-card">
  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
</el-tabs>
<el-col  :offset="6" :span="6">  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col> -->
    <!-- </el-row> -->


  </el-aside>
  <el-main  style="width:50%;padding: 0px;">
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="市场总览" name="first">
      <div>
        <p>截止到：</p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="中小企业版" name="second">中小企业版</el-tab-pane>
    <el-tab-pane label="创业板" name="third">创业板</el-tab-pane>
  </el-tabs>

  </el-main>
</el-container>
   </div>
</template>

<script> 
import echarts from 'echarts'
import getTestData from '@/network/get.js'
export default {

 name: 'Information',
  computed: {
time(){
switch (this.period) {
       case 'Sz':
         return '每年的:'
       case 'Sh':
         return '每月的:'
       case 'Startup':
         return '每日的:'
      case 'Smes':
         return '每日的:'
        case 'Star':
         return '每日的:'
        
       default:
         return ''
     }
}
},

  data () {
    return {
      
    	col: {
           name: "网站"
      },
      activeName: 'second', 
      activename:'one',
    attributeList: [
         {
           name: '深圳指数',
           type: 'Sz'
         },
         {
           name: '上证指数',
           type: 'Sh'
         },
         {
           name: '创业板',
           type: 'Startup'
         },
         {
           name: '中小企业板',
           type: 'Smes'
         },
         {
           name: '科创板',
           type: 'Star'
         }
       ],
     period: 'Sz',            // 默认深
     option:{
                    color:['rgb(8,252,7)','rgb(255,168,0)',],
                    title: {
                        text: ''
                    },
                    tooltip: { //提示框
                        trigger: 'axis',
                    },
                    legend: {//图例的类型
                        icon:'roundRect',//图例icon图标
                        data: [
                            {
                                name:"上年",
                                textStyle: {
                                    color: '#fff'
                                }
                                
                            },{
                                name:"本年",
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                        ],
                        
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        top:'17%',
                        containLabel: true //grid区域是否包含坐标轴的刻度标签
                    },
                    xAxis: {
                        type: 'category', //坐标轴类型。
                        boundaryGap: false, //坐标轴两边留白策略
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
                        axisLabel: {//坐标轴刻度标签的相关设置
                            interval:0,
                            textStyle: {
                            color: '#fff',
                            fontSize :10
                            },
                        },
                        axisLine:{//坐标轴轴线相关设置
                            show :true,
                            lineStyle:{
                                color:'rgb(2,121,253)'
                            }
                        },
                        axisTick:{ //坐标轴刻度相关设置。
                            show :false,
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: { //x轴的坐标文字
                            show: true,
                            textStyle: {
                                color: '#fff' //文字的颜色
                            },
                            
                        },
                        max:100,//最大值100
                        axisLine:{//坐标轴轴线相关设置
                            show :true,
                            lineStyle:{
                                color:'rgb(2,121,253)'
                            }
                        },
                        axisTick:{ //坐标轴刻度相关设置。
                            show :false,
                        },
                        splitLine:{  //坐标在grid区域的分割线
                        　 lineStyle: { //设置分割线的样式(图表横线颜色)
                                color: ['#153a8a']
                            }
                        }
                    },
                    series: [
                        {
                            name: '上年',
                            type: 'line',
                            data: [10,20,30,50,50,10,50,60,10,50,10,30],
                            lineStyle:{
                                color:'rgb(8,252,7)'  //线的颜色
                            }
                        },
                        {
                            name: '本年',
                            type: 'line',
                            data: [20,20,30,50,50,10,50,20,30,50,50,30],
                            lineStyle:{
                                color:'rgb(255,168,0)' //线的颜色
                            }
                        }
                    ]
                }
       }
  },
  mounted(){
    this.draw10();
    this.draw20();
    this.draw30();
    this.draw40();
    this.draw50();
    this.draw11();
    this.draw21();
    this.draw31();
    this.draw41();
    this.draw51();
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getTestData(){

      },
      draw10(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts10'))
        // 绘制图表
        myChart.setOption({
            title: { text: '深圳指数' },
            tooltip: {},
            xAxis: {
      
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    ,
    draw20(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts20'))
        // 绘制图表
        myChart.setOption({
            title: { text: '上证指数' },
            tooltip: {},
            xAxis: {
      
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 5, 33, 21, 11, 19]
            }]
        });
    }, 
    draw30(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts30'))
        // 绘制图表
        myChart.setOption({
            title: { text: '创业板' },
            tooltip: {},
            xAxis: {
      
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 5, 33, 21, 11, 19]
            }]
        });
    }, 
    draw40(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts40'))
        // 绘制图表
        myChart.setOption({
            title: { text: '中小企业板' },
            tooltip: {},
            xAxis: {
      
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 5, 33, 21, 11, 19]
            }]
        });
    }, 
    draw50(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts50'))
        // 绘制图表
        myChart.setOption({
            title: { text: '科创板' },
            tooltip: {},
            xAxis: {
      
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 5, 33, 21, 11, 19]
            }]
        });
    },
    draw11(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts11'))
        // 绘制图表
        myChart.setOption(this.option);
         window.addEventListener("resize",function(){
                myChart.resize()  // myChart 是实例对象
            })
    },
    draw21(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts21'))
        // 绘制图表
        myChart.setOption(this.option);
         window.addEventListener("resize",function(){
                myChart.resize()  // myChart 是实例对象
            })
    },
    draw31(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts31'))
        // 绘制图表
        myChart.setOption(this.option);
         window.addEventListener("resize",function(){
                myChart.resize()  // myChart 是实例对象
            })
    },
    draw41(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts41'))
        // 绘制图表
        myChart.setOption(this.option);
         window.addEventListener("resize",function(){
                myChart.resize()  // myChart 是实例对象
            })
    },
    draw51(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('charts51'))
        // 绘制图表
        myChart.setOption(this.option);
         window.addEventListener("resize",function(){
                myChart.resize()  // myChart 是实例对象
            })
    }
    
}
}
</script>

<style lang="css" scoped>

.container2{
  width: 100%;
}
.el-aside{

}
.mainbar-user{
  height: 200px;
  background-image: url("~@/assets/img/home/search_background.jpg");
}
.el-select{
 /* height: 250px;*/
}
</style>