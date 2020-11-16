
 <!--  <div id="home">
   <search></search>
    <recommend></recommend>
    <news></news><template>
    homehomehome -->
    <!-- <div id="myChart" :style="{width: '300px', height: '300px'}"> -->
     <!--  <el-button type="primary">123</el-button> -->

  
  <template>
  <div id="home">
    <!-- homehomehome -->
    <!-- <div id="myChart" :style="{width: '300px', height: '300px'}"> -->
      <!-- <el-button type="primary">123</el-button> -->
      <search></search>
     
  <New></New>




   <!--   <div class="users">
       
       <div class="mainbar-user"   style="width:80%;margin-left: 10%;"> 
          <el-container  style="width:60%;height: 0;border-top: 200px solid #414498;border-right: 70px solid transparent;opacity:0.6;filter: alpha(opacity = 60 );" >
             
                <el-row ><el-col><h5>用户入口 User entrance</h5></el-col></el-row>
                <el-row>
                  <el-col><i class="el-icon-delete"></i></el-col>
                  <el-col></el-col>
                  <el-col></el-col>
                </el-row>
                <el-row>
                  <el-col></el-col>
                  <el-col></el-col>
                </el-row>
                
            
          </el-container>
      </div>

     </div> -->
    

<userbar></userbar>
<information></information>

<hr>
<footers></footers>
  </div>
</template>

<script>
  import Search from "./childCops/Search.vue"
  import New  from "./childCops/New.vue"
  import Userbar  from "./childCops/UserBar.vue"
  import  Information from "./childCops/Information.vue"
  import Footers from "./childCops/Footer.vue"
export default {
  name: 'Home',
  components:{
    Search,
    New,
    Userbar,
    Information,
    Footers
  },
   mounted() {
  // import {getTestData} from '@/network/get'
   //    getTestData().then(response => (this.col = response.data))
  //     .catch(function (error) { // 请求失败处理
  //       console.log(error);
  //     })
    // this.draw()
  },
  data () {
    return {
    }
  },
  computed:{
  },
  methods: {
    // draw(){
    //     // 基于准备好的dom，初始化echarts实例
    //     let myChart = this.$echarts.init(document.getElementById('myChart'))
    //     // 绘制图表
    //     myChart.setOption({
    //         title: { text: '在Vue中使用echarts' },
    //         tooltip: {},
    //         xAxis: {
      
    //             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //         },
    //         yAxis: {},
    //         series: [{
    //             name: '销量',
    //             type: 'bar',
    //             data: [5, 20, 36, 10, 10, 20]
    //         }]
    //     });
    // }
  }
}
</script>

<style lang="css" scoped>
</style> 





 <!-- 



  <div class="block">

    <div class="search">
       <div class="search-contain">

         
          <div class="search-input">
    <div class="search-input-text"><span>启明星，一搜就明白</span></div>
    <el-input placeholder="查一查" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
     <div class="search2" style="margin-top: 50px;">
    <el-row>
  <el-col :span="4" align="center"><div class="grid-content bg-purple" width="50px"><img src="@/assets/查.jpg" alt="企明星" style="width:35%;">
      <router-link to="/" >查企业</router-link>
    </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"><img src="@/assets/查.jpg" alt="企明星" width="35%">
    <span>
      <router-link to="/" >查年报</router-link></span></div></el-col>
</el-row>

       </div>
        </div>
 

           
       </div>
    </div>

    <div class="new">
    <el-container  style="width: 80%;text-align: center;margin-left: 10%;">
  <el-aside width="300px" >
    <h3>时事热点</h3>
    <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
    </ul>

  </el-aside>
  <el-main>Main</el-main>
</el-container>
   </div>
=======
    <h1>首页</h1>
>>>>>>> 47db4bfb35ed5201380c939d984a3aefda3db9b1
  </div>
  

     </div>
  </div> 
</template>

<script>
export default {

  name: 'Home',
  mounted() {

  },
  data () {
    return {
      imgList:[
      {
        url:require('@/assets/查.jpg')

      },
      {
        url:require('@/assets/糖油粑粑.jpg')

      },
      {
        url:require('@/assets/豆腐的.jpg')

      },
      {
        url:require('@/assets/龙虾.jpg')

      }
      ]

    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.block{
  margin-top: 62px;
  width: 100%;
}
.search-input{
    width:800px;
    margin: 0 auto;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 100px;

}
.search-input-text{
  font-size: 50px;
  margin:20px 150px;
}
.container2{
  width: 100%;
}
.el-aside{
  border: 2px solid purple;

}
.el-main{
   border: 2px solid purple;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style> --> --> -->