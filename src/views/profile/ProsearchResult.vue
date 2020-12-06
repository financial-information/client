<template>
<div id="prosearchresult">
     <div class="searchinput">
      <div class="profile_search_head">企业分类</div>
      <div class="profile_search_input">
          <el-input placeholder="查一查" class="input-with-select "  prefix-icon="el-icon-search"id="TabSearch" v-model="value0"  >
              <el-button   slot="append"   id="TabSearch"  class="input-with-search " @click="goResultPage()">查企业</el-button>
           </el-input>
      </div>
      <div class="profile_select">
          <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="5">
                  <el-select v-model="value1" multiple  placeholder="行业">
                      <el-option
                        v-for="item in selectListOne"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value2" multiple placeholder="资本">
                      <el-option
                        v-for="item in selectListTwo"
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value3" multiple placeholder="时间">
                      <el-option
                        v-for="item in selectListThree"
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value4" multiple placeholder="地区">
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

      <el-row class="profile_result_head"  >企明星为您找到<span style="color: red;">5</span>家符合条件的企业</el-row>
      
      <div class="profile_result_detailed">
        <el-row v-for="(n, index) in objectresult.length" :key="index" style="margin-bottom: 20px;">
          <div class="profileResultCards" id="profileResultCards" >
          <div style="
          margin-bottom: 15px;">
            <el-container style="width:100%;">
              <el-aside style="width: 30%"><img :src= "objectresult[n-1].url" style="width: 250px;height: 190px; background-size: cover;"></el-aside>
              <el-main style="width: 70%;">
                <el-row style="margin-bottom:8px;">
                  <el-col :span="21" ><div class="bg-purple"style="font-size: 32px;">{{objectresult[n-1].company_name}}</div></el-col>
                  <el-col :span="3"><div class="grid-content1" style="font-size: 15px;color: #6D6B6B;opacity: 0.62;" @click="goProDetailed(objectresult[n-1].company_name)">查看更多<i class="el-icon-caret-right"></i></div></el-col>
                </el-row>
                <el-row style="font-size: 15px;height: 18px;color: #9A9A9A;margin-bottom: 25px;">{{objectresult[n-1].company_name}}</el-row>
                <el-row>
                              <el-col :span="12"><div>成立时间：{{objectresult[n-1].found_date}}</div></el-col>
                                 <el-col :span="12"><div>法人代表：{{objectresult[n-1].legal_representative}}</div></el-col>
                             </el-row>
                             <el-row>
                               <el-col :span="12"><div >注册地：{{objectresult[n-1].registered_address}}</div></el-col>
                                 <el-col :span="12"><div >注册资本：{{objectresult[n-1].registered_capital}}</div></el-col>
                             </el-row>
              </el-main>
            </el-container>
          </div>
          </div>
        </el-row>
      </div>
    </div>

   
</div>
</template>

<script>
    import Searchinput from "./childCops/SearchInput.vue"
    import Searchresult from "./childCops/SearchResult.vue"


    import { searchCompanyData } from "@/network/tyy"

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
           label: '深圳指数',
           value: 'Sz'
         },
         {
           label: '上证指数',
           value: 'Sh'
         },
         {
           label: '创业板',
           value: 'Startup'
         },
         {
           label: '中小企业板',
           value: 'Smes'
         },
         {
           label: '科创板',
           value: 'Star'
         }
       ],selectListTwo: [
         {
           name: '1000万以下',
           type: 'Sz'
         },
         {
           name: '1000万-2000万',
           type: 'Sh'
         },
         {
           name: '2000万-3000万',
           type: 'Startup'
         },
         {
           name: '3000万-4000万',
           type: 'Smes'
         },
         {
           name: '4000万以上',
           type: 'Star'
         }
       ],selectListThree: [
         {
           name: '2000年以前',
           type: 'Sz'
         },
         {
           name: '2001年-2005年',
           type: 'Sh'
         },
         {
           name: '2006-2010年',
           type: 'Startup'
         },
         {
           name: '2011年-2015年',
           type: 'Smes'
         },
         {
           name: '2016年至今',
           type: 'Star'
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
       value1:['中小企业板'],
       value2:[],
       value3:['2000年以前'],
       value4:[],
      
      //searchresult
      objectresult:[
        {
          url: require('@/assets/img/home/豆腐的.jpg'),
        company_name: "上海浦东发展银行股份有限公司",
        found_date: "1992-10-19",
        registered_capital: "29352134127.0",
        legal_representative: "郑杨",
        registered_address: "上海市黄浦区中山东一路12号",
          },
        {
          url: require('@/assets/img/home/豆腐的.jpg'),
        company_name: "上海浦东发展银行股份有限公司",
        found_date: "1992-10-19",
        registered_capital: "29352134127.0",
        legal_representative: "郑杨",
        registered_address: "上海市黄浦区中山东一路12号",
          },
          {
            url: require('@/assets/img/home/豆腐的.jpg'),
        company_name: "上海浦东发展银行股份有限公司",
        found_date: "1992-10-19",
        registered_capital: "29352134127.0",
        legal_representative: "郑杨",
        registered_address: "上海市黄浦区中山东一路12号",
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
            ]

    }
  }
  ,
  created(){

      this.value0 = this.$route.query.value0
      this.value1 = this.$route.query.value1
      this.value2 = this.$route.query.value2
      this.value3 = this.$route.query.value3
      this.value4 = this.$route.query.value4
      console.log(12313)
  },
  mounted(){
      this.searchCompanyData()
  },
  methods:{
       searchCompanyData() {
           let data = this.value0
      console.log(data)
      searchCompanyData(data).then(res => {
        console.log(res)
        for(let i = 0; i < res.results.length; i++) {
          res.results[i].url = require('@/assets/img/home/豆腐的.jpg')
        }
        console.log(res.results)
        this.objectresult = res.results
      })
       },
         goResultPage(){
         
         if(this.value0.length+this.value1.length+this.value2.length+this.value3.length+this.value4.length<=0)
            this.$message('请确定查询条件')
        else{
          this.$emit('searchvalue',{value0:this.value0,value1:this.value1,value2
          :this.value2,value3:this.value3,value4:this.value4})

            this.$router.push({path:"/prosearch",query:{ value0:this.value0,value1:this.value1,value2
            :this.value2,value3:this.value3,value4:this.value4}})
        }
       },
       goProDetailed(data){
             this.$router.push({path:"/stock",query:{ Shares: data,value0:this.value0,value1:this.value1,value2
            :this.value2,value3:this.value3,value4:this.value4}})
       }
         
       // },
       // getsearchvalue(data){
       // 	this.searchvalue0=data.value0
       // 	this.searchvalue1=data.value1
       // 	this.searchvalue2=data.value2
       // 	this.searchvalue3=data.value3
       // 	this.searchvalue4=data.value4
       // 	this.searchlist=data
       //  this.showout=(this.searchvalue0.length+this.searchvalue1.length+this.searchvalue2.length+this.searchvalue3.length+this.searchvalue4.length)
        
       // }
   }
}
</script>

<style lang="css" scoped>
#prosearchresult{
	background: url("~@/assets/img/home/company_info_background.png") #F3F8FF no-repeat center top;
}
/*searchinput*/
.searchinput{
  width: 80%;
  height: 289px;
  margin-left: 10%;
    padding-top: 57px;

}
.profile_search_head{
   font-size: 68px;
   color: #FFFFFF;
   text-align: center;
   margin-bottom: 51px;
}
.profile_search_input{
  margin-bottom: 51px;
}
.profile_search_input  /deep/  .el-input__inner{
   border-radius: 10px 0px 0px 10px;
  
}
.profile_search_input  /deep/ .el-input-group__append {
  border: 0;
     background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
  color: #FFFFFF;
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
/*searchresult*/
.profile_result{
  width: 80%;
  margin-left: 10%;

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
opacity: 1;
}
.profileResultCards{
background: #FFFFFF;
padding: 33px 32px 33px 38px;
border-width:2px  2px 2px 8px;
border-color:#494DC2;
border-style: solid;
border-radius: 10px;

box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27)
}
.profileResultCards:hover {
  /*border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
  color: #FFFFFF;*/
  border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;
    border-radius: 10px;
}

 
.el-main{
  padding-top: 0px;
  padding-left: 10px;
}

.el-main div{

height: 35px;
font-size: 26px;
font-family: Microsoft YaHei;
font-weight: 400;
line-height: 35px;
color: #6D6D6D;
}
</style>