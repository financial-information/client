<template>
  <div class="Contribution">
    <h1>工作贡献图</h1>
    <h2>曲线图</h2>
    <div id="total_line">
    
    </div>
    <hr>
    <h2>饼状图</h2>
    <div id="total_circle">
      
    </div>
    <hr>
    <h2>打分比例图</h2>
    <el-row class="detail_content">
      <el-col :span="8" :offset="2">
        <div id="detail_circle_1" class="element_chart">
          
        </div>
        <h3>评分最高的为:{{everyoneScore.sy.max1 + '和' + everyoneScore.sy.max2}}</h3>
      </el-col>
      <el-col :span="8" :offset="4">
        <div id="detail_circle_2" class="element_chart">
          
        </div>
        <h3>评分最高的为:{{everyoneScore.yz.max1 + '和' + everyoneScore.yz.max2}}</h3>
      </el-col>
    </el-row>
    <hr>
    <el-row>
      <el-col :span="8">
        <div id="detail_circle_3" class="element_chart">
          
        </div>
        <h3>评分最高的为:{{everyoneScore.wz.max1 + '和' + everyoneScore.wz.max2}}</h3>
      </el-col>
      <el-col :span="8">
        <div id="detail_circle_4" class="element_chart">
          
        </div>
        <h3>评分最高的为:{{everyoneScore.tyy.max1 + '和' + everyoneScore.tyy.max2}}</h3>
      </el-col>
      <el-col :span="8">
        <div id="detail_circle_5" class="element_chart">
          
        </div>
        <h3>评分最高的为:{{everyoneScore.yal.max1 + '和' + everyoneScore.yal.max2}}</h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

  name: 'Contribution',
  mounted() {
    // 展示折线图
    this.showTotalLineChart()
    // 展示饼状图
    this.showTotalCircleChart()
    // 展示每个人给别人打分的比例
    this.showEveryoneScore()
  },
  data () {
    return {
      randomData: {
        "yz":[0.26, 0.21, 0.23, 0.15, 0.32, 0.25, 0.22, 0.14, 0.16, 0.25, 0.234, 0.3, 0.16, 0.17, 0.24, 0.15],
        "sy":[0.22, 0.21, 0.218, 0.18, 0.15, 0.15, 0.15, 0.23, 0.14, 0.15, 0.13, 0.13, 0.23, 0.14, 0.258, 0.28],
        "wz":[0.18, 0.2, 0.204, 0.35, 0.15, 0.19, 0.16, 0.24, 0.23, 0.15, 0.14, 0.13, 0.2, 0.15, 0.174, 0.24],
        "tyy":[0.16, 0.17, 0.164, 0.15, 0.14, 0.14, 0.26, 0.23, 0.24, 0.23, 0.266, 0.22, 0.26, 0.39, 0.164, 0.17],
        "yal":[0.18, 0.21, 0.184, 0.17, 0.24, 0.27, 0.21, 0.16, 0.23, 0.22, 0.23, 0.22, 0.15, 0.15, 0.164, 0.16]
      },
      ourName: ["游政", "施媛", "王镇", "谭韵仪", "严安龙"],
      allAvgData: [
        {value: 0.2153, name: "游政"},
        {value: 0.1854, name: "施媛"},
        {value: 0.1930, name: "王镇"},
        {value: 0.2096, name: "谭韵仪"},
        {value: 0.1968, name: "严安龙"}
      ],
      everyoneScore: {
        "sy": {
                "data":[
                  {value: 0.2438 , name: "游政"},
                  {value: 0.1000, name: "施媛"},
                  {value: 0.2000, name: "王镇"},
                  {value: 0.2250 , name: "谭韵仪"},
                  {value: 0.2313 , name: "严安龙"},
                ],
                "max1": "游政",
                "max2": "严安龙"
              },
        "yz": {
                "data":[
                  {value: 0.1000 , name: "游政"},
                  {value: 0.1988 , name: "施媛"},
                  {value: 0.2213, name: "王镇"},
                  {value: 0.2556 , name: "谭韵仪"},
                  {value: 0.2244 , name: "严安龙"},
                ],
                "max1": "谭韵仪",
                "max2": "严安龙"
              },
        "wz": {
                "data":[
                  {value: 0.2513 , name: "游政"},
                  {value: 0.2094, name: "施媛"},
                  {value: 0.1000, name: "王镇"},
                  {value: 0.2300 , name: "谭韵仪"},
                  {value: 0.2094 , name: "严安龙"},
                ],
                "max1": "游政",
                "max2": "谭韵仪"
              },
        "tyy": {
                "data":[
                  {value: 0.2125 , name: "游政"},
                  {value: 0.2313 , name: "施媛"},
                  {value: 0.2375 , name: "王镇"},
                  {value: 0.1000 , name: "谭韵仪"},
                  {value: 0.2188 , name: "严安龙"},
                ],
                "max1": "王镇",
                "max2": "施媛"
              },
        "yal": {
                "data":[
                  {value: 0.2688 , name: "游政"},
                  {value: 0.1875 , name: "施媛"},
                  {value: 0.2063 , name: "王镇"},
                  {value: 0.2375 , name: "谭韵仪"},
                  {value: 0.1000 , name: "严安龙"},
                ],
                "max1": "游政",
                "max2": "谭韵仪"
              },

      },
    }
  },
  methods: {
    // 展示折线图
    showTotalLineChart() {
      // 为了进行百分比的展示，将数值扩大一百倍
      for(let item in this.randomData) {
        for(let i = 0; i < 16; i++) {
          this.randomData[item][i] *= 100
          this.randomData[item][i] = parseInt(this.randomData[item][i])
        }
      }
      // 获取随机数据
      // this.getRandomData()
      let mycharts = this.$echarts.init(document.getElementById("total_line"))
      let option = {
          title: {
              text: '16周贡献折线图'
          },
          tooltip: {
              trigger: 'axis',
              formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%'
          },
          legend: {
              data: this.ourName
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              boundaryGap: false,
              data: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周', '第8周', '第9周', '第10周', '第11周', '第12周', '第13周', '第14周', '第15周', '第16周', ]
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value}%'
              },
              show: true
          },
          series: [
              {
                  name: '游政',
                  type: 'line',
                  data: this.randomData.yz
              },
              {
                  name: '施媛',
                  type: 'line',
                  data: this.randomData.sy
              },
              {
                  name: '王镇',
                  type: 'line',
                  data: this.randomData.wz,

              },
              {
                  name: '谭韵仪',
                  type: 'line',
                  data: this.randomData.tyy
              },
              {
                  name: '严安龙',
                  type: 'line',
                  data: this.randomData.yal
              }
          ]
      };
      mycharts.setOption(option)
      return mycharts
    },
    // 展示饼状图
    showTotalCircleChart() {
      let mycharts = this.$echarts.init(document.getElementById("total_circle"))
      let option = {
          title: {
              text: '整体平均贡献率',
              left: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: this.ourName
          },
          series: [
              {
                  name: '整体贡献',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: this.allAvgData,
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
      mycharts.setOption(option)
      return mycharts
    },
    // 展示每个人给别人打分的详细的饼状图比例
    showDeatilCircleChart(name, item_data, user, flag) {
      let mycharts = this.$echarts.init(document.getElementById(name))
      let left_right = ""
      if(flag == 1) {
        left_right = "left"
      } else {
        left_right = "right"
      }
      let option = {
          title: {
              text: user,
              left: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
              {
                  name: '评分比例',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: item_data,
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
      mycharts.setOption(option)
      return mycharts
    },
    showEveryoneScore() {
      this.showDeatilCircleChart("detail_circle_1", this.everyoneScore.sy.data, "施媛", 0)
      this.showDeatilCircleChart("detail_circle_2", this.everyoneScore.yz.data, "游政", 1)
      this.showDeatilCircleChart("detail_circle_3", this.everyoneScore.wz.data, "王镇", 0)
      this.showDeatilCircleChart("detail_circle_4", this.everyoneScore.tyy.data, "谭韵仪", 1)
      this.showDeatilCircleChart("detail_circle_5", this.everyoneScore.yal.data, "严安龙", 1)
    }
  }
}
</script>

<style lang="css" scoped>
#total_line {
  margin-left: 5%;
  width: 90%;
  height: 500px;
}
#total_circle {
  margin-left: 5%;
  width: 90%;
  height: 500px;
}
.detail_content {
  margin-bottom: 50px;
}
.element_chart {
  width: 100%;
  height:350px;
}
</style>