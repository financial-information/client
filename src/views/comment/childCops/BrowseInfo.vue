<template>
	<div class="notice_body">
		<el-row>
			<el-button style="float: right;margin-bottom: 20px;" @click="deleteAll(historyData)">删除所有记录</el-button>
		</el-row>
		<el-row v-for="(item,index) in objectresult.length" :key="index" style="margin-bottom: 20px;" v-if="!alldelete">
    			<div class="noticeCards" id="noticeCards" >
							<el-row class="date_head">
  								<el-col :span="6" >{{ historyData[objectnum[item-1]].create_time.split('T')[0] }}</el-col>
							    <el-col :span="5" >星期{{ "日一二三四五六".charAt(new Date(historyData[objectnum[item-1]].create_time.split('T')[0]).getDay()) }}</el-col>
					    </el-row >
							<div class="noticeCards_body">
    							<el-row v-for='(items,index) in objectresult[item-1]' :key="index"style="margin-bottom:8px;color: #A5A5A5;">
    									<el-col :span="5" >
    										<div class="bg-purple" >
    										{{showTime(historyData[objectnum[item-1]+items-1].create_time.split('T')[1].split('Z')[0].slice(0,5))}}</div>
    									</el-col>

    									<el-col :span="18">
    										<div class="grid-content1" ><span @click="goProDetailed(historyData[objectnum[item-1]+items-1].code,historyData[objectnum[item-1]+items-1].history_module_id)">{{historyData[objectnum[item-1]+items-1].history_module_id}}{{showHistoryType(historyData[objectnum[item-1]+items-1].history_module_type)}}</span></div>
    									</el-col>

    									<el-col :span="1">
    										 <el-tooltip  effect="light" content="点击删除该记录" placement="top">
                               <i class="el-icon-more"  style="transform:rotate(90deg)" @click="HandleDelete(historyData[objectnum[item-1]+items-1])"></i>
                         </el-tooltip>
    									</el-col>
  								</el-row>					
							</div>
    			</div>
    	</el-row>
	</div>
</template>

<script >
import { searchCompanyData } from "@/network/tyy"
import { searchCompanyOneData } from "@/network/tyy"
import {getUserHistory} from "@/network/tyy"
import {getCompanyId,deleteHistoryData,deleteAllHistory} from "@/network/tyy"
export default{
	name:'Browseinfo',
	data(){
		return{
  	  objectresult: new Array(),
  	  phone: '19975372577',
  	  datecount:0,
  	  objectnum:new Array(),
  	  historyData:new Array,
  	  historyCompanyName:'',
  	  info:new Array,
      f_flag:0,
      alldelete:false
		}
	},
	created(){
	},
	mounted(){
      this.getHistoryData()
	},
	methods:{
     getCompany(id){
        getCompanyId(id).then(res=>{
            this.historyData[this.f_flag].history_module_id=res.results[0].company_name
            this.historyData[this.f_flag].code=res.results[0].stock_code
            this.f_flag++
            //取目标数
            if(this.f_flag >= this.historyData.length){
              //回归原始
              this.f_flag = 0
              return ;
            }
            //递归
            this.getCompany(this.historyData[this.f_flag].history_module_id)
        })
     },
     getHistoryData(){
       	let that=this
         	let data={
             "phone": that.phone,
             "deleted": '0',
             "limit": '50'
         	}
        getUserHistory(data).then(res =>{
            let sum=0
            let arr=res.results
            let count=0
            let sonArr = new Array
            let total=0
            that.historyData=res.results
            this.getCompany(that.historyData[0].history_module_id)
            that.objectnum.push(0)
            for(let i=0 ; i<res.results.length-1 ; i++)
            {
            	    sum=1
                	for(let j=i+1;j<res.results.length;j++)
                	{
  		                if(arr[i].create_time.split('T')[0]==arr[j].create_time.split('T')[0]){
                          sum++
  		                }
  		                else{
  		                   	 break
  		                  }
			            }
    			        total+=sum
    			        that.objectnum.push(total)
    			        that.objectresult.push(sum)
                  i=i+sum-1
            }
         		that.objectnum.pop()
        })
     },
     getcompanyname(data){
      let name=''
       getHistoryId(data).then(res=>{
           name=res.results[0].company_name
       })
       return name
     },
     showTime(data){
       	if(data.slice(0, 2) >'12')
       		return "下午 "+data
       	else
       		return "上午 "+data
     },
     showHistoryType(data){
       	if(data=="1")
       		return "公司基本信息页面"
       	if(data=="2")
       		return "年报信息"
       	if(data=="3")
     		return "动态信息页面"
     },
     HandleDelete(row){
        row.deleted=1
        let data={
          "id": row.id,
          "params":row
        }
        deleteHistoryData(data).then(res => {
            if(res != null && res != undefined) {
              this.$notify({
                title: "成功",
                message: "删除数据成功",
                type: "success"
              })
            } 
            else {
              this.$notify({
                title: "失败",
                message: "删除数据失败",
                type: "danger"
              })
            }
        })
     },
     goProDetailed(data1,data2){
         this.$router.push({path:"/stock",query:{ code: data1,name:data2,find:10}})
     },
     deleteAll(data){
        let idArray= ''
        for(let i=0;i<data.length;i++)
            idArray += data[i].id+","
      //for(let i=0;i<data.length;i++)
      //    idArray[i] = data[i].id
        console.log(idArray)
        let deleteArray = {
          'deleteArray' : idArray,
        }
        deleteAllHistory(deleteArray).then(res => {

            console.log(res)
            if(res.status==true) {
                this.alldelete=true
                this.$notify({
                  title: "成功",
                  message: "删除数据成功",
                  type: "success"
                })
            } else {
                this.$notify({
                  title: "失败",
                  message: "删除数据失败",
                  type: "danger"
                })
            }
        })
     }
	}
}
</script>

<style lang="css" scoped>
.notice_body{
	width: 75%;
	margin-left: 5%;
}
.noticeCards{
	background: white;
	padding-top: 10px ;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
	opacity: 1;
	border-radius: 14px;
}
.date_head{
	padding-left: 18px;
	font-size: 32px;
	color: #6F6F6F;
	opacity: 1;
	border-bottom: 1px solid #9F9F9F;
}
.noticeCards_body{
	padding-left: 25px;
	padding-right: 25px;
	padding-top: 10px;
	padding-bottom:10px;
}
</style>