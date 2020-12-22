<template>
<div id="prosearchresult">
     <div class="searchinput">
      <el-row style="color:white;">
          <i class="el-icon-d-arrow-left" @click="$router.back(-1)"></i>
          <span @click="back()">返回</span>
        </el-row>
      <div class="profile_search_head">企业分类</div>
      <div class="profile_search_input">
          <el-input placeholder="查一查" id="testTxt" class="input-with-select "  prefix-icon="el-icon-search" v-model="value0"  >
              <el-button  slot="append"   id="TabSearch"  class="input-with-search " @click="goResultPage()">查企业</el-button>
           </el-input>
      </div>
      <div class="profile_select">
          <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="5">
                  <el-select v-model="value1"  placeholder="行业">
                      <el-option
                        v-for="item in selectListOne"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value2"  placeholder="资本">
                      <el-option
                        v-for="item in selectListTwo"
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value3"  placeholder="时间">
                      <el-option
                        v-for="item in selectListThree"
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value4"  placeholder="地区">
                      <el-option
                        v-for="item in selectListFour"
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                  </el-select>
              </el-col>
          </el-row>
      </div>
  </div>

<!--   //searchresult -->
    <div class="profile_result">

      <el-row class="profile_result_head"  >企明星为您找到<span style="color: red;">{{num}}</span>家符合条件的企业</el-row>
      
      <div class="profile_result_detailed" v-if="num>0">
        <el-row v-for="(n, index) in objectresult.length" :key="index" style="margin-bottom: 20px;" >
          <div class="profileResultCards" id="profileResultCards" >
          <div style="">
            <el-container style="width:100%;height: 90%;margin-bottom:0px;">
              <el-aside style="width: 20%;margin: 0px,padding:0px;"><img :src= "objectresult[n-1].url" style="width: 100%; height: 110px; background-size: cover;"></el-aside>
              <el-main style="width: 75%;">
                <el-row style="margin-bottom:0px;" >
                  <el-col :span="21" ><div class="bg-purple " id = "sortTags" style="font-size: 1em;" >{{objectresult[n-1].company_name}}</div></el-col>
                  <el-col :span="3"><div class="grid-content1" style="font-size: 12px;color: #484CBF;opacity: 0.62;" @click="goProDetailed(objectresult[n-1].stock_code,objectresult[n-1].company_name,objectresult[n-1].id)">查看更多<i class="el-icon-caret-right"></i></div></el-col>
                </el-row>
                <el-row style="font-size: 15px;height: 18px;color: #9A9A9A;margin-bottom: 15px;">{{objectresult[n-1].industry_type}}</el-row>
                <el-row  id="detailinfo">
                      <el-col :span="15">
                        <div style="font-size: 15px;">成立时间：{{objectresult[n-1].found_date}}</div>
                      </el-col>
                      <el-col :span="9">
                        <div style="font-size: 15px;">法人代表：{{objectresult[n-1].legal_representative}}</div>
                      </el-col>
                </el-row>
                 <el-row  id="detailinfo">
                     <el-col :span="15">
                        <div style="font-size: 15px;">注册地：{{objectresult[n-1].registered_address}}</div>
                      </el-col>
                     <el-col :span="9">
                        <div style="font-size: 15px;">注册资本：{{objectresult[n-1].registered_capital}}</div>
                      </el-col>
                 </el-row>
              </el-main>
            </el-container>
          </div>
          </div>
        </el-row>

        <div class="page" >
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="currentpage"
              layout="total,prev, pager, next, jumper"
              :total="num">
            </el-pagination>
        </div>
    </div>
    
    <br>
  </div> 
   
</div>
</template>

<script>
    import Searchinput from "./childCops/SearchInput.vue"
    import Searchresult from "./childCops/SearchResult.vue"


    import { searchCompanyData ,addHistoryCompanyBasicData} from "@/network/tyy"

     export default {

      name: 'ProsearchResult',
	components:{
	    Searchinput,
	    Searchresult
  },
  data () {
    return {
      // searchinput
      selectListOne: [
         {
           label: '全部----',
           value: '全部----'
         },
         {
           label: '金融业',
           value: '金融业'
         },{
           label: '制造业',
           value: '制造业'
         },{
           label: '农、林、牧、渔业',
           value: '农、林、牧、渔业'
         },{
           label: '教育',
           value: '教育'
         },{
           label: '房地产业',
           value: '房地产业'
         },{
           label: '电力、热力、燃气及水生产和供应业',
           value: '电力、热力、燃气及水生产和供应业'
         },{
           label: '采矿业',
           value: '采矿业'
         },{
           label: '建筑业',
           value: '建筑业'
         },{
           label: '交通运输、仓储和邮政业',
           value: '交通运输、仓储和邮政业'
         },{
           label: '居民服务、修理和其他服务业',
           value: '居民服务、修理和其他服务业'
         },{
           label: '科学研究和技术服务业',
           value: '科学研究和技术服务业'
         },{
           label: '批发和零售业',
           value: '批发和零售业'
         },{
           label: '水利、环境和公共设施管理业',
           value: '水利、环境和公共设施管理业'
         },{
           label: '卫生和社会工作',
           value: '卫生和社会工作'
         },{
           label: '文化、体育和娱乐业',
           value: '文化、体育和娱乐业'
         },{
           label: '信息传输、软件和信息技术服务业',
           value: '信息传输、软件和信息技术服务业'
         },{
           label: '住宿和餐饮业',
           value: '住宿和餐饮业'
         },{
           label: '租赁和商务服务业',
           value: '租赁和商务服务业'
         }
       ],selectListTwo: [
         {
           name: '5千万-5亿',
           type: '5千万-5亿'
         },
         {
           name: '5亿-50亿',
           type: '5亿-50亿'
         },
         {
           name: '50亿-150亿',
           type: '50亿-150亿'
         },
         {
           name: '150亿以上',
           type: '150亿以上'
         },
         {
           name: '全部----',
           type: '全部----'
         }
       ],selectListThree: [
         {
           name: '1949年-1965年',
           type: '1949年-1965年'
         },
         {
           name: '1966年-1980年',
           type: '1966年-1980年'
         },
         {
           name: '1981年-2000年',
           type: '1981年-2000年'
         },
         {
           name: '2001年至今',
           type: '2001年至今'
         },
         {
           name: '全部----',
           type: '全部----'
         }
       ],selectListFour: [
         {
           name: '东北地区',
           type: 'Sz'
         },
         {
           name: '华北地区',
           type: 'Sh'
         },
         {
           name: '西北地区',
           type: 'Startup'
         },
         {
           name: '东南地区',
           type: 'Smes'
         },
         {
           name: '华南地区',
           type: 'Star'
         },
         {
           name: '西南地区',
           type: 'Stars'
         }
       ],
       value0:'',
       value1:'全部----',
       value2:'全部----',
       value3:'全部----',
       value4:[],
       num:0,
      //searchresult
      objectresult:[
        {
          }
        ] ,
	    	// searchvalue
	    	searchvalue0:'',
	    	searchvalue1:[],
            searchvalue2:[],
            searchvalue3:[],
            searchvalue4:[],
            showout: false,
            searchrequire:[],
            searchlist:[
            {
                   value0:'',
                   value1:'',
                   value2:'',
                   value3:'',
                   value4:'',
            }
            ],
        currentpage:1

    }
  },
  created(){
      this.value0 = this.$route.query.value0
      this.value1 = this.$route.query.value1
      this.value2 = this.$route.query.value2
      this.value3 = this.$route.query.value3
      this.value4 = this.$route.query.value4
      this.page =  this.$route.query.page
  },
  mounted(){
    this.searchCompanyData(this.currentpage)
  },
  methods:{
       searchCompanyData(page) {
           let data={
              "name":this.value0,
              "type": this.value1,
              "min_price":'',
              "max_price": '',
              "min_time":'',
              "max_time": '',
              "offset": 0
           }
           data.offset=(page-1)*10
            if(this.value2=="5千万-5亿"){data.min_price=500000000 ; data.max_price=500000000}
            if(this.value2=="5亿-50亿"){data.min_price=500000000  ; data.max_price=5000000000}
            if(this.value2=="50亿-150亿"){data.min_price=5000000000  ; data.max_price=15000000000}
            if(this.value2=="150亿以上"){data.min_price=15000000000 }
            if(this.value3=="1949年-1965年"){data.min_time=1949  ; data.max_time=1965}
            if(this.value3=="1966年-1980年"){data.min_time=1966 ; data.max_time=1980}
            if(this.value3=="1981年-2000年"){data.min_time=1981  ; data.max_time=2000}
            if(this.value3=="2001年至今"){data.min_time=2001}
               if(this.value1=="全部----"){data.type=""}
            if(this.value2=="全部----"){data.min_price=10000}
            if(this.value3=="全部----"){data.min_time=1948}
           this.searchpage=data
          searchCompanyData(data).then(res => {
              if(res.count==0) {
                this.$message.error('抱歉,没有找到您想要的企业');
                this.objectresult = []
                this.num=0
              } 
              else 
              {
                console.log(res)
                if(page==1)
                     this.$message.success("搜索成功")
              for(let i = 0; i < res.results.length; i++) {
                res.results[i].url = require('@/assets/img/home/查.jpg')
              }
              console.log(res.results)
              this.objectresult = res.results
              this.num=res.count
              }
         })
       },
      goResultPage(){
          if(this.value0.length+this.value1.length+this.value2.length+this.value3.length+this.value4.length<=0)
            this.$message('请确定查询条件')
          else{
              this.searchCompanyData(this.page)
            this.$router.push({path:"/prosearch",query:{ value0:this.value0,value1:this.value1,value2
            :this.value2,value3:this.value3,value4:this.value4}})
          }
      },
      handleCurrentChange(val) {
      this.searchCompanyData(val)
      },
      goProDetailed(data1,data2,data3){
          let data={
            'user_phone': "19975372577",
            'history_id': data3,
            'history_type': 1 
          }
          addHistoryCompanyBasicData(data).then(res=>{
              if(res!=null&&res != undefined)
                 console.log('成功过')
          })
          this.$router.push({path:"/stock",query:{ code: data1,name:data2,value0:this.value0,value1:this.value1,value2:this.value2,value3:this.value3,value4:this.value4,find:0}})
       },
       back(){
        this.$router.push({path:"/profile"})
       }
   }
}
</script>

<style lang="css" scoped>
#prosearchresult{
	background: url("~@/assets/img/home/company_info_background.png") #F3F8FF no-repeat center top;
   min-width: 1260px;
   min-height: 800px;
}
/*searchinput*/
.searchinput{
  width: 80%;
  height: 289px;
  margin-left: 10%;
    padding-top: 36px;

}
.profile_search_head{
   font-size: 68px;
   color: #FFFFFF;
   text-align: center;
   margin-bottom: 51px;
}
.profile_search_input{
  width: 60%;
  margin:  0px auto;
  margin-bottom: 51px;
}
.profile_search_input  /deep/  .el-input__inner{
   border-radius: 10px 0px 0px 10px;
  
}
.profile_search_input  /deep/ .el-input-group__append {
  border: 0;
     background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
  color: white;
}
.profile_search_input  /deep/  .el-button{
  bottom: 0;
   border:none;
   outline: none;
}
.profile_select{

    background: #FFFFFF;
    padding: 5px;
}
.profile_selecct /deep/ el-selecct{
  display: flex;
    position: relative;
}

.profile_search_input  /deep/ .el-input-group__append :hover{
  border: 0;
   background-color: #CBBEE9;
  border-radius: 0px 10px 10px 0px;
  color:  white;
}
/*searchresult*/
.profile_result{
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
 
}
.profile_result_head{
  
height: 52px;
font-size: 32px;
font-weight: 400;
line-height: 42px;
color: #000000;
padding-left: 50px;
background: #F8F8F8;

border-bottom: 2px solid #707070;
}
.profile_result_detailed{
  
    padding: 30px 60px 30px 60px;
    background: #FFFFFF;
     box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.31);
    opacity: 1;
}
.profileResultCards{
background: #FFFFFF;
padding: 15px 20px 0px 20px;
border-width:2px  2px 2px 8px;
 box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.31);
border-color:#494DC2;
border-style: solid;
border-radius: 10px;

/*box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27)*/
}
.profileResultCards:hover {
  /*border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
  color: #FFFFFF;*/
  border-width:2px  2px 2px 8px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.31);
border-color:#FFB700;
border-style: solid;
    border-radius: 10px;
}

 
.el-main{
  padding-top: 3px;
  padding-left: 10px;
}

.el-main div{

height: 28px;
font-size: 25px;
line-height: 20px;
color: #6D6D6D;
}
.page {
  margin-top: 20px;
  width: 50%;
    margin:auto;
}
</style>