<template>
	<!-- <div id="searchresult">
		<searchinput></searchinput> -->
 <div class="profile_result">

	    <el-row class="profile_result_head"  >企明星为您找到<span style="color: red;">5</span>家符合条件的企业</el-row>
	    
    	<div class="profile_result_detailed">
    		<el-row v-for="(n, index) in 3" :key="index" style="margin-bottom: 20px;">
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
<!-- </div> -->
</template>


<script >
	import Searchinput from "./SearchInput.vue"
export default{
	name:'Searchresult',
	components:{
	    Searchinput,
	   
  },
	data () {
	    return {
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
	    	] 
	    }
    },
    methods:{
    	goProDetailed(data){
       	     this.$router.push({path:"/stock",query:{ Shares: data}})
       }
    }
}
</script>


<style scoped>
/*#searchresult{
	
	background: url("~@/assets/img/home/company_info_background.png") #F3F8FF no-repeat center top;
}*/
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