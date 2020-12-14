<template>
	<div class="notice_body">
		<el-row>
			<el-button style="float: right;margin-bottom: 20px;">删除所有记录</el-button>
		</el-row>
		<el-row v-for="(item,index) in objectresult.length" :key="index" style="margin-bottom: 20px;" >
    			<div class="noticeCards" id="noticeCards" >
						
							<el-row class="date_head">
								<el-col :span="6" >{{ historyData[objectnum[item-1]].create_time.split('T')[0] }}</el-col>
							    <el-col :span="5" >星期{{ "日一二三四五六".charAt(new Date(historyData[objectnum[item-1]].create_time.split('T')[0]).getDay()) }}</el-col>
							<el-col></el-col>
						    </el-row >
							<div class="noticeCards_body">
								<el-row v-for='(items,index) in objectresult[item-1]' :key="index"style="margin-bottom:8px;color: #A5A5A5;">
									<el-col :span="5" >
										<div class="bg-purple" >
										{{showTime(historyData[objectnum[item-1]+items-1].create_time.split('T')[1].split('Z')[0].slice(0,5))}}</div>
									</el-col>
									<el-col :span="18">
										<div class="grid-content1" >{{showHistoryType(historyData[objectnum[item-1]+items-1].history_module_type)}}</div>
									</el-col>
									<el-col :span="1">
										 <el-tooltip  effect="light" content="点击删除该记录" placement="top">
                                              <i class="el-icon-more"  style="transform:rotate(90deg)" @click="HandleDelete"></i>
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
	import {getHistoryId} from "@/network/tyy"
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
    	  info:new Array
			}
		},
		created(){
       

		},
		mounted(){
            this.getHistoryData()
		},
		methods:{
       getHistoryData(){
       	let that=this
       	console.log(120)
	       	let data={
	           "phone": that.phone
	       	}
	       	console.log(120)
	        console.log(data)
	       	getUserHistory(data).then(res =>{
	       		console.log(res)
            let sum=0
            let arr=res.results
            let count=0
            let sonArr = new Array
            let total=0
              //{"id": new Number,
            // "user_phone": "",
            // "history_module_type": "",
            // "history_module_id": "",
            // "create_time": "",
            // "deleted": new Number,
            // "date":"",
            // "time":"",
            // "week":""}
            that.historyData=res.results
            console.log(res.count)
            console.log("日一二三四五六".charAt(new Date("2020-12-11").getDay()))
            that.objectnum.push(0)
            for(let i=0 ; i<res.count ; i++)
            {
                
            	 //let a1=this.arr[i].create_time.split("T")
            	// for(j=i+1;;j++)
            	// {

            	// 	let a=arr.created_time.replace('T','Z')
                 
            	// 	if(arr)
            	// }
            	//console.log(a1)
            	    sum=1
                	for(let j=i+1;j<res.count;j++)
                	{
                     
			                if(arr[i].create_time.split('T')[0]==arr[j].create_time.split('T')[0])
			                {
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
                // else{
                // 	count+=1
                // 	that.objectresult.push(sumArr)
                // 	sumArr= new Array
                // 	if(i-1==0)
                //     {
                //     sonArr.id=arr[i-1].id
                // 	sonArr.user_phone=arr[i-1].user_phone
                // 	sonArr.history_module_id=arr[i-1].history_module_id
                // 	sonArr.history_module_type=arr[i-1].history_module_type
                // 	sonArr.create_time=arr[i-1].create_time
                // 	sonArr.date=arr[i-1].create_time.split('T')[0]
                // 	sonArr.time=arr[i].create_time.split('T')[1].split('Z')[0]
                // 	sonArr.week="日一二三四五六".charAt(new Date(sonArr.date).getDay())
                // 	sonArr.deleted=arr[i-1].deleted
                // 	sumArr.push(sonArr)
                // 	that.objectresult.push(sumArr)
                // 	that.datecount=count+1
                //     }

                // }

            }
	       		console.log(that.objectresult)
	       		that.objectnum.pop()
	       		console.log(that.objectnum)

	            })
       },
       showTime(data){
       	if(data.slice(0, 2) >'12'){
       		return "下午 "+data
       	}
       	else
       		return "上午 "+data
       },
       // showCompanyName(data){
       // 	getHistoryId(data).then(res=>{
       //      this.info=res.results[0]
               
       //  	})
       // 	return this.info.company_name
       // },
       showHistoryType(data){
       	if(data=="1")
       		return "公司基本信息页面"
       	if(data=="2")
       		return "年报信息"
       	if(data=="3")
       		return "动态信息页面"
       },
       HandleDelete(){
       	this.$message('这是一条消息提示');
       }

		}
	}
</script>

<style lang="css" scoped>
.notice_body{
	width: 90%;
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