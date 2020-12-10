<template>
  
    <div class="information" >
    <el-container  style="width: 80%;text-align: center;margin-left: 10%;margin-bottom: 50px;">
  <el-aside style="width:65%;" >
    <!-- 日期选择器 -->
        <div class="block">
            <el-cascader
            placeholder="上海市场指数列表/上证指数"
            :options="mainType"
            v-model="choose_type"
            class="select"
            @change="changeType"
            filterable>
            </el-cascader>

            <el-date-picker
              v-model="choose_date"
              type="daterange"
              align="left"
              class="date_edit"
              unlink-panels
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              value-format="yyyy-MM-dd"
              @change="dateChange">
            </el-date-picker>

            <el-button type="primary" class="change_btn" @click="sendData">切换</el-button>
        </div>

    


   <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
    <el-tab-pane label="开盘价"  name="one" :key="'one'">
      <div>
        <div id="open" ref="one" class="main_charts">

        </div>
      </div>
      
    </el-tab-pane>
    <el-tab-pane label="收盘价"  name="two" :key="'two'">
      <div>
        <div id="close" ref="two" class="main_charts">

        </div>
      </div>
      
    </el-tab-pane>
    <el-tab-pane label="最高价"  name="three" :key="'three'">
      <div>
        <div id="high" ref="three" class="main_charts">

        </div>
      </div>
      
    </el-tab-pane>
    <el-tab-pane label="最低价"  name="four" :key="'four'">
      <div>
        <div id="low" ref="four" class="main_charts">

        </div>
      </div>
      
    </el-tab-pane>
    <el-tab-pane label="行情指数(总-K线图)" name="five" :key="'five'">

      <div>
        <div id="exponent_charts" ref="five" class="main_charts">

        </div>
      </div>

      

    </el-tab-pane>


    
  </el-tabs>
    



  </el-aside>
  <el-main  style="width:35%;">
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

import { 
    getXSHGExponentType, 
    getXSHEExponentType, 
    getExponentData 
} from "@/network/yz"

export default {

    name: 'Information',
    data () {
        return {
      	    col: {
                name: "网站"
            },
            activeName: 'one', 
            mainType: [
            {
                label: '上海市场指数列表',
                value: 'SZ',
                children: []
            },
            {
                label: '深圳市场指数列表',
                value: 'SH',
                children: []
            },
           
            ],
            detailType: [
            ],
            mainTypeItem: '上海市场指数列表',            // 默认上海
            detailTypeItem: '上证指数',
            // 上海
            XSHG_list: [],
            // 深圳
            XSHE_list: [],
            // 图表数据
            echarts_data: [
            ],
            // 各类数据数组
            open_arr: [],
            close_arr: [],
            hight_arr: [],
            low_arr: [],
            time_arr: [],
            // 给时期选择器做好一些快捷选项
            pickerOptions: {
                shortcuts: [{
                  text: '最近一周',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                  }
                }, {
                  text: '最近一个月',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                  }
                }, {
                  text: '最近三个月',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                  }
                }, {
                  text: "最近一年",
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                    picker.$emit('pick', [start, end]);
                  }
                }]
            },
            // 对应的选择日期后的值
            choose_date: [],
            // 对应的选择类型后的值
            choose_type: [],
        }
    },
    mounted(){
        // 获取上海指数列表
        this.getXSHGExponentType()
        // 获取深圳指数列表
        this.getXSHEExponentType()
        // 获取初始化数据
        this.initExponentData()
        
    },
    methods: {
        handleClick(tab) {
            let name = ""
            let fun_data = [] 
            switch(tab.name) {
                case "one":
                    name = "open"
                    fun_data = this.open_arr
                    break;
                case "two":
                    name = "close"
                    fun_data = this.close_arr
                    break;
                case "three":
                    name = "high"
                    fun_data = this.hight_arr
                    break;
                case "four":
                    name = "low"
                    fun_data = this.low_arr
                    break;
                case "five":
                    let temp1 = this.initChartsKGraph
                    let mydata = []
                    for(let i = 0; i < this.echarts_data.length; i++) {
                        let temp_data = []
                        for(let j = 0; j < this.echarts_data[i].length; j++) {
                            temp_data[j] = this.echarts_data[i][j]
                        }
                        mydata.push(temp_data)
                    }
                    setTimeout(function() {
                        temp1(mydata)
                    }, 100)
                    return;
                default:
                    break;
            }
            let fun = this.initLineChart
            let fun_time = this.time_arr
            setTimeout(function() {
                fun(name, fun_data, fun_time)
            }, 0)
        },
        /******
            获取数据
        ******/
        // 获取上海指数列表
        getXSHGExponentType() {
            getXSHGExponentType().then(res => {
                this.XSHG_list = res.result
                // 初始默认值为上证指数列表
                this.mainType[0].children = this.XSHG_list
            }).catch(err => {
                this.$message.error("网络状态不好")
            })
        },
        // 获取深圳指数列表
        getXSHEExponentType() {
            getXSHEExponentType().then(res => {
                this.XSHE_list = res.result
                this.mainType[1].children = this.XSHE_list
            }).catch(err => {
                this.$message.error("网络状态不好")
            })
        },
        // 获取对应的指数信息
        getExponentData(mydata) {
            getExponentData(mydata).then(res => {
                // 获取对象的长度
                length = Object.getOwnPropertyNames(res.result.open).length
                // 定义临时数据
                let temp_all_data = []
                let temp_open_data = []
                let temp_close_data = []
                let temp_high_data = []
                let temp_low_data = []
                let temp_time_data = []
                for(let i = 0; i < length; i++) {
                    temp_open_data.push(res.result.open['data_' + i])
                    temp_close_data.push(res.result.close['data_' + i])
                    temp_high_data.push(res.result.high['data_' + i])
                    temp_low_data.push(res.result.low['data_' + i])
                    temp_time_data.push(res.result.time['data_' + i])
                    // 临时子数组数据
                    let temp_all_item = []
                    temp_all_item.push(res.result.time['data_' + i])
                    temp_all_item.push(res.result.open['data_' + i])
                    temp_all_item.push(res.result.close['data_' + i])
                    temp_all_item.push(res.result.high['data_' + i])
                    temp_all_item.push(res.result.low['data_' + i])
                    // 加入到临时总数据
                    temp_all_data.push(temp_all_item)
                }
                // 赋值
                this.echarts_data = temp_all_data
                this.open_arr = temp_open_data
                this.close_arr = temp_close_data
                this.hight_arr = temp_high_data
                this.low_arr = temp_low_data
                this.time_arr = temp_time_data
                
                // 数据处理完之后
                // 初始化图形,开盘价
                let myName = {
                    "name": this.activeName
                }
                this.handleClick(myName)
            }).catch(err => {
                this.$message.error("网络异常")
            })
        },
        // 初始化对应的指数信息
        initExponentData() {
            let data = {
                "stock_code": "000001.XSHG",
                "start_time": "2017-12-25",
                "end_time": "2017-12-30" 
            }
            // 将参数带入
            this.getExponentData(data)

            // 初始化时间选择器上的数据
            this.choose_date.push("2017-12-25")
            this.choose_date.push("2017-12-30")
            // 初始化种类上的数据
            this.choose_type.push("SZ")
            this.choose_type.push("000001.XSHG")
        },
        /*
            触发改变
        */
        // 日期改变
        dateChange() {
            
        },
        // 类型改变
        changeType() {
            
        },
        /*
            点击按钮触发事件
        */
        sendData() {
            let start_time = this.choose_date[0], end_time = this.choose_date[1], stock_code = this.choose_type[1]
            let data = {
                "start_time": start_time,
                "end_time": end_time,
                "stock_code": stock_code
            }
            this.getExponentData(data)

        },

        /////////////////////////////////////////////////
        // 普通折线图
        initLineChart(name, base_data, time_data) {

            let mycharts = this.$echarts.init(document.getElementById(name))

            let option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '大数据量面积图',
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: time_data
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    series: [
                        {
                            name: '模拟数据',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',
                            sampling: 'average',
                            itemStyle: {
                                color: 'rgb(132,174,240)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(176,204,247)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(226,238,254)'
                                }])
                            },
                            data: base_data
                        }
                    ]
                };
                mycharts.setOption(option)
                return mycharts

        },
        //////////////////////////////////////////////////
        // K线图
        initChartsKGraph(mydata) {
            let mycharts = this.$echarts.init(document.getElementById("exponent_charts"))
            // 定义颜色
            var upColor = '#ec0000';
            var upBorderColor = '#8A0000';
            var downColor = '#00da3c';
            var downBorderColor = '#008F28';
            // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
            let data0 = splitData(mydata);
            // 定义一个切割数据的函数
            function splitData(rawData) {
                var categoryData = [];
                var values = []
                for (var i = 0; i < rawData.length; i++) {
                    // 目录数据
                    categoryData.push(rawData[i].splice(0, 1)[0]);
                    // value
                    values.push(rawData[i])
                }
                // 返回一个对象，包含下面两个数据
                return {
                    categoryData: categoryData,
                    values: values
                };
            }
            // 计算MA的值
            function calculateMA(dayCount) {
                var result = [];
                for (var i = 0, len = data0.values.length; i < len; i++) {
                    if (i < dayCount) {
                        result.push('-');
                        continue;
                    }
                    var sum = 0;
                    for (var j = 0; j < dayCount; j++) {
                        sum += data0.values[i - j][1];
                    }
                    result.push(sum / dayCount);
                }
                return result;
            }



            let option = {
                title: {
                    text: '上证指数',
                    left: 0
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
                },
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '15%'
                },
                xAxis: {
                    type: 'category',
                    data: data0.categoryData,
                    scale: true,
                    boundaryGap: false,
                    axisLine: {onZero: false},
                    splitLine: {show: false},
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax'
                },
                yAxis: {
                    scale: true,
                    splitArea: {
                        show: true
                    }
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 50,
                        end: 100
                    },
                    {
                        show: true,
                        type: 'slider',
                        top: '90%',
                        start: 50,
                        end: 100
                    }
                ],
                series: [
                    {
                        name: '日K',
                        type: 'candlestick',
                        data: data0.values,
                        itemStyle: {
                            color: upColor,
                            color0: downColor,
                            borderColor: upBorderColor,
                            borderColor0: downBorderColor
                        },
                        markPoint: {
                            label: {
                                normal: {
                                    formatter: function (param) {
                                        return param != null ? Math.round(param.value) : '';
                                    }
                                }
                            },
                            data: [
                                {
                                    name: 'XX标点',
                                    coord: ['2013/5/31', 2300],
                                    value: 2300,
                                    itemStyle: {
                                        color: 'rgb(41,60,85)'
                                    }
                                },
                                {
                                    name: 'highest value',
                                    type: 'max',
                                    valueDim: 'highest'
                                },
                                {
                                    name: 'lowest value',
                                    type: 'min',
                                    valueDim: 'lowest'
                                },
                                {
                                    name: 'average value on close',
                                    type: 'average',
                                    valueDim: 'close'
                                }
                            ],
                            tooltip: {
                                formatter: function (param) {
                                    return param.name + '<br>' + (param.data.coord || '');
                                }
                            }
                        },
                        markLine: {
                            symbol: ['none', 'none'],
                            data: [
                                [
                                    {
                                        name: 'from lowest to highest',
                                        type: 'min',
                                        valueDim: 'lowest',
                                        symbol: 'circle',
                                        symbolSize: 10,
                                        label: {
                                            show: false
                                        },
                                        emphasis: {
                                            label: {
                                                show: false
                                            }
                                        }
                                    },
                                    {
                                        type: 'max',
                                        valueDim: 'highest',
                                        symbol: 'circle',
                                        symbolSize: 10,
                                        label: {
                                            show: false
                                        },
                                        emphasis: {
                                            label: {
                                                show: false
                                            }
                                        }
                                    }
                                ],
                                {
                                    name: 'min line on close',
                                    type: 'min',
                                    valueDim: 'close'
                                },
                                {
                                    name: 'max line on close',
                                    type: 'max',
                                    valueDim: 'close'
                                }
                            ]
                        }
                    },
                    {
                        name: 'MA5',
                        type: 'line',
                        data: calculateMA(5),
                        smooth: true,
                        lineStyle: {
                            opacity: 0.5
                        }
                    },
                    {
                        name: 'MA10',
                        type: 'line',
                        data: calculateMA(10),
                        smooth: true,
                        lineStyle: {
                            opacity: 0.5
                        }
                    },
                    {
                        name: 'MA20',
                        type: 'line',
                        data: calculateMA(20),
                        smooth: true,
                        lineStyle: {
                            opacity: 0.5
                        }
                    },
                    {
                        name: 'MA30',
                        type: 'line',
                        data: calculateMA(30),
                        smooth: true,
                        lineStyle: {
                            opacity: 0.5
                        }
                    },
            
                ]
            };
            mycharts.setOption(option)
            return mycharts
        },
        ////////////////////////////////////////////////////////
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

.select {
  width: 45%;
  margin-bottom:10px;
}
.main_charts {
    width:100%;
    height:350px;
}
.change_btn {
    background-color: rgb(73, 77, 194, 1);
    border:none;
}
.change_btn:hover {
    background-color: rgba(73, 77, 194, 0.8);

}
.date_edit {
    margin-bottom:10px;
    width: 40%;
}
.data_choose {
    /*display: inline-block;*/
}
</style>