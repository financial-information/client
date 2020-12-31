<template>
  <div id="Recommenddata">
      <div class="company_information_recommend">
          <el-row v-for="(n, index) in (recommendData.length/2)" :key="index" :gutter="80" style="margin-bottom: 20px;">
              <el-col :span="12" v-for="(j, index) in 2" :key="index">
                  <div class="profileCards" id="profileCards" >
                      <div style="margin-bottom: 15px;">
                          <el-container style="width:100%;height: 95px;">
                              <el-aside style="width: 30%"><img :src= "recommendData[(n-1)*2+j-1].url" style="width: 100%;height: 90%; background-size: cover;"></el-aside> 
                              <el-main style="width: 55%;">
                                  <el-row style="font-size: 27px;height: 27px;margin-bottom:5px;">{{recommendData[(n-1)*2+j-1].stock_name}}</el-row>
                                  <el-row style="font-size: 15px;height: 18px;
                                color: #9A9A9A;">{{recommendData[(n-1)*2+j-1].industry_type}}</el-row>
                              </el-main>
                          </el-container>
                          <el-container width="100%" style="padding: 0px;margin: 0px;">
                              <el-main style="width: 100%;height:60px;padding:0px;font-size:15px;color: #9A9A9A;word-break: break-all;text-overflow: ellipsis; overflow: hidden;display: -webkit-box;
                                  -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                                {{recommendData[(n-1)*2+j-1].profile}}
                                </el-main>
                          </el-container>
                          <div style="float: right;">
                              <el-button style="margin-top: 5px;" @click="goProDetailed(recommendData[(n-1)*2+j-1].stock_code,recommendData[(n-1)*2+j-1].company_name,recommendData[(n-1)*2+j-1].id)">查看详情</el-button>
                          </div>
                      </div>
                  </div>
              </el-col>
          </el-row>
      </div>

     <div class="page" >
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="currentpage"
              layout="total,prev, pager, next, jumper"
              :total="totalItem">
            </el-pagination>
      </div>
</div>
</template>

<script>
import {getCompanyBasicDataByPage,addHistoryCompanyBasicData} from "@/network/tyy"
export default {
  name: 'Recommenddatas',
  data () {
    return {
      recommendData:[],
      totalItem: 0,
      // 输入框中的页面
      tempPage: new Number,
      currentpage: 1,
      imgList:[]
    }
  },
  mounted() {
    this.getCompanyBasicDataList()
  },
  methods: {
    /*
      获取数据函数
    */
    // 初始化数据获取
    getCompanyBasicDataList() {
      for(let i=0;i<60;i++)
      { 
        this.imgList.push(require('@/assets/img/profilephoto/'+i+'.jpg'))
      }
      let data = {
        "page": 1
      }
      getCompanyBasicDataByPage(data).then(res => {
        if(res.results == null || res.results == undefined) {
        } 
        else 
        {
            for(let i = 0; i < res.results.length; i++) {
                  res.results[i].url = this.imgList[(res.results[i].id)%60]
            }
            this.recommendData = res.results
            // console.log(Math.ceil(res.count / 10))
            this.totalItem = res.count
        } 
      })
    },
    // 通过页数进行数据获取
    getDataFromPage(page) {
      let data = {
        "page": (page-1)*10
      }
      getCompanyBasicDataByPage(data).then(res => {
        for(let i = 0; i < res.results.length; i++) {
          res.results[i].url = this.imgList[(res.results[i].id)%60]
        }
        this.recommendData = res.results
      })
    },
    /*
      组件内置反馈函数
    */
    handleCurrentChange(val) {
      this.getDataFromPage(val)
    },
    goProDetailed(data1,data2,data3){
        let data={
          'user_phone': this.$store.getters.getUserName,
          'history_id': data3,
          'history_type':1
        }
        //console.log(data)
        addHistoryCompanyBasicData(data).then(res=>{
            //if(res!=null&&res != undefined)
              // console.log('成功过')
         })
        //console.log(data1)
        this.$router.push({path:"/stock",query:{ code: data1, name: data2}})
    }
  }
}
</script>

<style lang="css" scoped>
.Recommenddata{
  background-color: yellow;
}
.company_information_recommend{
  margin-right: 75px;
  margin-left: 75px;
}
.header {
  text-align: right;
  font-size: 12px;
}
.col_title {
  font-weight: bolder;
  color:rgb(73, 77, 194);
}
.company_information_table {
  overflow: auto;
  width: 100%; 
  height: 600px;
  margin-bottom: 10px;
}
.page {
  margin-top: 20px;
  width: 50%;
  margin:auto;
}
.add {
  text-align: right;
}
.profile_cards{
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  background: white;
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
    height: 215px;
    background: #FFFFFF;
    padding-left: 30px;
    padding-top: 22px;
    padding-right: 15px;
    border-width:2px  2px 2px 8px;
    border-color:#494DC2;
    border-style: solid;
    border-radius: 10px;
/*box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27)*/
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
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.31);
}
.profileCards /deep/ .el-button{
  width: 95px;
  height: 42px;
  color:white;
background: #494DC2;
border-radius: 8px;
 
}
.profileCards /deep/ .el-button:hover{
  background-color: #FFB700;
}
</style>

