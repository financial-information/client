<template>
<div class="profile_cards" >
  
  	<div class="profile_cards_head">
        <el-row >
    			  <el-col :span="6" ><div class="bg-purple"><i class="el-icon-sunny"></i>热门企业</div></el-col>
    			  <el-col :offset="14" :span="4"><div class="grid-content1"   @click="goProfile()" >查看更多 <i class="el-icon-caret-right"></i></div></el-col>
		    </el-row>
  	</div>

    <div class="profile_cards_body" v-show="!showmore">
        <el-row :gutter="80" style="margin-bottom: 20px;">
            <el-col :span="8" v-for="(i,index) in 3" :key="index" style="" >
                <div class="bg-purple " id="top"  >
                    <img :src= "objecttop[i-1].url" style="width: 100%;height: 220px; background-size: cover;margin-bottom: 15px;border-radius:5px 5px 0px 0px;">
                     <div style="font-size: 31px;text-align: center;margin-bottom: 15px;"><span>{{objecttop[i-1].stock_name}}</span></div>
                     <el-button style="margin-bottom: 10px;"  @click="goProDetailed(objecttop[i-1].stock_code,objecttop[i-1].company_name,objecttop[i-1].id)">查看详情</el-button>
                </div>
            </el-col>
        </el-row>

        <el-row v-for="(n, index) in 3" :key="index" :gutter="80" style="margin-bottom: 20px;">
            <el-col :span="12" v-for="(j, index) in 2" :key="index">
                <div class="profileCards" id="profileCards" >
                    <div style="margin-bottom: 15px;">
                        <el-container style="width:100%;height: 95px;">
                            <el-aside style="width: 30%">
                                  <img :src= "objecttop[(n)*2+j].url" style="width: 100%;height: 90%; background-size: cover;">
                            </el-aside>
                            <el-main style="width: 55%;">
                                  <el-row style="font-size: 27px;height: 27px;margin-bottom:5px;">{{objecttop[(n)*2+j].stock_name}}</el-row>
                                  <el-row style="font-size: 15px;height: 18px;color: #9A9A9A;">{{objecttop[(n)*2+j].industry_type}}</el-row>
                            </el-main>
                        </el-container>
                        <el-container width="100%" style="padding: 0px;margin: 0px;">
                            <el-main style="padding:0px;width: 100%;height:81px;font-size:15px;color: #9A9A9A;word-break: break-all;text-overflow: ellipsis; overflow: hidden;display: -webkit-box;-webkit-line-clamp: 4; -webkit-box-orient: vertical;">
                                    {{objecttop[(n)*2+j].profile}}
                              </el-main>
                        </el-container>
                        <div style="float: right;">
                            <el-button style="margin-top: 5px;" @click="goProDetailed(objecttop[(n)*2+j].stock_code,objecttop[(n)*2+j].company_name,objecttop[(n)*2+j].id)">查看详情</el-button>
                         </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script >
import {recommendCompanyData,addHistoryCompanyBasicData,getHotData,getCompanyId} from "@/network/tyy"
export default{
		name:'Hotcompany',
    components:{
    },
		data(){
			return{
				showout:'',
        showmore: false,
        objecttop: [],
    	  objectmain:[],
        f_flag: 0,
        doc: null,
        imgList:[]
			}
		},
    mounted(){
      this.getHotCompanyData()
      this.showmore=this.message
    },
		methods:{
      recommendCompanyData(){
        let data = 1
        recommendCompanyData(data).then(res => {
            if(res.result != null && res.result != undefined) {
            } 
            else 
            {
                for(let i = 0; i < res.results.length; i++) {
                  res.results[i].url = this.imgList[(re.results[i].id)%60]
                }
                this.objecttop = res.results
            }
        })
      },
      getCompanyId(id) {
          getCompanyId(id).then(re=>{
                  re.results[0].url = this.imgList[(re.results[0].id)%60]
                   this.objecttop.push(JSON.parse(JSON.stringify(re.results[0])))
                  this.f_flag++
                  //取10个
                  if(this.f_flag >= 9){
                    //回归原始
                    this.f_flag = 0
                    return ;
                  }
                  //递归
                  this.getCompanyId(this.doc[this.f_flag].history_module_id)
                })
      },
      getHotCompanyData(){
        for(let i=0;i<60;i++)
          { 
            this.imgList.push(require('@/assets/img/profilephoto/'+i+'.jpg'))
          }
        let data={
          'module_type': '1',
          'size': '10'
        }
        getHotData(data).then(res=>{
           if(res!=null && res != undefined)
           {
            //
            this.doc=res.data
            // //调用函数
            // console.log(this.doc)
            this.getCompanyId(this.doc[this.f_flag].history_module_id)
           }
                 
        })
      },
      goProDetailed(data1,data2,data3){
          let data={
            'user_phone': this.$store.getters.getUserName,
            'history_id': data3,
            'history_type':1
          }
          // console.log(data)
           addHistoryCompanyBasicData(data).then(res=>{
              if(res!=null&&res != undefined){}
           })
          this.$router.push({path:"/stock",query:{ code: data1, name: data2}})
      },
      goProfile(){
          this.$router.push({path:"/profile"})
      }
		}
}
</script>

<style lang="css" scoped>
.profile_cards{
  	width: 80%;
  	margin-left: 10%;
  	margin-right: 10%;
  	background: white;
  	padding-top: 44px ;
	

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
    height: 230px;
    background: #FFFFFF;
    padding-left: 30px;
    padding-top: 22px;
    padding-right: 15px;
    border-width:2px  2px 2px 10px;
    border-color:#494DC2;
    border-style: solid;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.31);
/*box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27)*/
}
#top{
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.27);
    border-radius:5px 5px 5px 5px;
}
#top:hover{
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.31);
} 
.profileCards:hover {
    border-color:#FFB700;
    border-style: solid;/*
    background-color: #F2F5FE;*/
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.31);
}
.profile_cards_body /deep/ .el-button{
  	width: 95px;
    height: 42px;
    color:white;
    background: #494DC2;
    border-radius: 8px;
}
.profile_cards_body /deep/ .el-button:hover{
	  background-color: #FFB700;
}
</style>