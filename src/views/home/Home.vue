
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
      <div class="search">
         <div class="search-contain">

         
           <div class="search-input">
               <div class="search-input-text" ><span>启明星，一搜就明白</span></div>
               <el-input placeholder="查一查" class="input-with-select "  prefix-icon="el-icon-search"id="TabSearch" v-model="SearchInput">
                   <el-button   slot="append"   id="TabSearch"  class="input-with-search "  >查一查</el-button>
               </el-input>
               <div class="search2" style="">
                    <el-row>
                           <el-col :offset="1"  :span="3" align="center">
                              <div class="grid-content bg-purple"  v-bind:class="classObject1" style="border-radius: 5px 5px  10px 10px;padding: 2px;"><!-- <img src="@/assets/查.jpg" alt="企明星" style="width:35%;"> -->
                                    <label class="search2-item" for="TabSearch" @click="change1" ><img src="@/assets/img/home/股票.png" style="width: 20px;">查股票</label>
                              </div>
                            </el-col> 
                           <el-col :span="3">
                               <div class="grid-content bg-purple-light" width="35px"  v-bind:class="classObject2" style="border-radius: 5px 5px  10px 10px;padding: 2px;"><!-- <img src="@/assets/查.jpg" alt="企明星" width="35%"> -->
                                      <label class="search2-item" for="TabSearch" @click="change2" ><img src="@/assets/img/home/股票.png" style="width: 20px;">查年报</label>
                              </div>
                            </el-col> 
                     </el-row>
                </div>
           </div>
         </div>
       </div>

    <div class="new" >
    <el-container  style="width: 80%;text-align: center;margin-left: 10%;margin-bottom: 50px;">
  <el-aside style="width:55%" >
    <el-carousel trigger="click" height="170px">
      <el-carousel-item v-for="(i,item) in imgList" :key="item">
        <img :src="i.url">
      </el-carousel-item>
    </el-carousel>

  </el-aside>
  <el-main  style="width:45%;padding: 0px;border: 2px solid purple;">
      <el-row style="background-color: #414498;padding: 5px;">
          <el-col :span="12"><div class="grid-content bg-purple"style="font-size: 20px;text-align: center;"><i class="el-icon-bell"></i>时事热点</div></el-col>
          <el-col :span="12"><a href="" style=""><div class="grid-content bg-purple" style="margin-top: 8px;font-size: 12px;line-height: 25%;float: right;">更多讯息<i class="el-icon-arrow-right"></i></div></a></el-col>
      </el-row>
      <el-row >{{col.name}}</el-row>
      <el-row >{{col.name}}</el-row>
<!--       <el-row v-for="(i , index) in col" :key="index">{{index[0]}}</el-row> -->
      <el-row >{{col.name}}</el-row>
      <el-row >{{col.name}}</el-row>
      <el-row >{{col.name}}</el-row>


  </el-main>
</el-container>
   </div>




     <div class="users">
       
       <div class="mainbar-user"   style="width:80%;margin-left: 10%;"> 
          <el-container  style="width:60%;height: 0;border-top: 200px solid #414498;border-right: 70px solid transparent;opacity:0.6;filter: alpha(opacity = 60 );" >
             
                <el-row ><el-col><h5>用户入口 User entrance</h5></el-col></el-row>
                
            
          </el-container>
      </div>

     </div>
    



  </div>
</template>

<script>
export default {

  name: 'Home',
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
      searchShares: true,
      searchReport: false,
      SearchInput: '',
      col: {
           name: "网站"
      },
      imgList:[
      {
        url:require('@/assets/img/home/查.jpg')

      },
      {
        url:require('@/assets/img/home/糖油粑粑.jpg')

      },
      {
        url:require('@/assets/img/home/豆腐的.jpg')

      },
      {
        url:require('@/assets/img/home/龙虾.jpg')

      }
      ]
    }
  },
  computed:{
     classObject1:function(){
      return{
             active1: this.searchShares && !this.searchReport,
             active2: this.searchReport && !this.searchShares
      }
      },     
     classObject2:function(){
      return{
             active1: !this.searchShares && this.searchReport,
              active2: !this.searchReport && this.searchShares
        
      }
      }
  },
  methods: {
    change1(){
      this.searchShares = true,
      this.searchReport = false
    },
    change2(){
      this.searchShares = false,
      this.searchReport = true
    }
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




.search{
  background-image: url("~@/assets/img/home/搜索背景.jpg");
  background-repeat: no-repeat;
  background-size:cover;
}
.search-input{
    width:  70%;
    margin: 0 auto;
    text-align: center;
    padding-top: 150px;
    margin-bottom: 100px;
     padding-bottom: 150px;

}
.search-input-text{
  font-size: 38px;
  color: white;
  margin:20px 150px  50px;
}
.input-with-select{/*
  border-radius: 20px;
  border:2px solid purple;*/
}
.search-input  /deep/  .el-input__inner{
   border-radius: 20px;
  
}
.search-input  /deep/  .el-button{
   border-radius: 20px;
  
}
.active1{
  background-color: white;
}
.active2{
  background-color: purple;
  color: white;
}
.container2{
  width: 100%;
}
.el-aside{
  border: 2px solid purple;

}
.mainbar-user{
  height: 200px;
  background-image: url("~@/assets/img/home/搜索背景.jpg");
}
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
  </div>
  

     </div>
  </div> 
</template>

<script>
export default {

  name: 'Home',
  mounted() {
    // this.draw()
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