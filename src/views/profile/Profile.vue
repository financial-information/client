<template>
<div id="profile">

     <searchinput  @searchvalue="getsearchvalue" ></searchinput>

    <searchrecommend v-if="!showout"></searchrecommend>
    <searchresult v-if="showout"></searchresult>


	

   
</div>
</template>

<script>
    import Searchinput from "./childCops/SearchInput.vue"
    import Searchrecommend from "./childCops/SearchRecommend.vue"
    import Searchresult from "./childCops/SearchResult.vue"
     export default {

      name: 'Profile',
	components:{
	    Searchinput,
	    Searchrecommend,
	    Searchresult
  },
  data () {
    return {
    	value0:'',
				selectListOne: [
         {
           name: '深圳指数',
           type: 'Sz'
         },
         {
           name: '上证指数',
           type: 'Sh'
         },
         {
           name: '创业板',
           type: 'Startup'
         },
         {
           name: '中小企业板',
           type: 'Smes'
         },
         {
           name: '科创板',
           type: 'Star'
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
       value1:[],
       value2:[],
       value3:[],
       value4:[],
               objecttop:[
    	{
    		url: require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	},
    	{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	},{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	}],
    	objectmain:[
    	{
    		url: require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'浦发银行'
    	},
    	{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'平安银行'
    	},{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'建设银行'
    	},{
    		url:require('@/assets/img/home/豆腐的.jpg'),
    		stock_name:'农业银行'
    	}
    	],objectresult:[
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
            searchlist:[]

    }
  },
  created(){

  },
  mouted(){
      
  },
  methods:{
  	 goResultPage(){
      
      this.searchvalue0=this.value0
      this.searchvalue1=this.value1
      this.searchvalue2=this.value2
      this.searchvalue3=this.value3
      this.searchvalue4=this.value4
      this.showout=(this.value0.length+this.value1.length+this.value2.length+this.value3.length+this.value4.length)
      if (this.showout <=0)
          this.$message('请确定查询条件')
      
         // if (this.value0 ==="" && this.value1 ===null &&this.value2 ===null && this.value3 ===null &&this.value4 ===null )this.value0.length()+this.value1.length()+this.value2.length()+this.value3.length()+this.value4.length()
         // this.$router.push({path:"/profile",query:{ value0: this.value0,value1: this.value1,value2: this.value2,value3: this.value3,value4: this.value4}})
      //     this.$message('请确定查询条件');
      // elsethis.$router.push({path:"/profile",query:{ Value0:this.value0,Value1:this.value1,Value2:this.value2,Value3:this.value3,Value4:this.value4}})Bus.$emit('Searchvalue0',this.value0);
       
        
         
       },
       getsearchvalue(data){
       	this.searchvalue0=data.value0
       	this.searchvalue1=data.value1
       	this.searchvalue2=data.value2
       	this.searchvalue3=data.value3
       	this.searchvalue4=data.value4
       	this.searchlist=data
        this.showout=(this.searchvalue0.length+this.searchvalue1.length+this.searchvalue2.length+this.searchvalue3.length+this.searchvalue4.length)
        
       }
   }
}
</script>

<style lang="css" scoped>
#profile{
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


/*searchrecommend*/
	.profile_cards{
	width: 80%;
	margin-left: 10%;
	margin-right: 10%;
	background: white
	;
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
background: #FFFFFF;padding-left: 30px;padding-top: 22px;padding-right: 15px;
border-width:2px  2px 2px 8px;
border-color:#494DC2;
border-style: solid;
border-radius: 10px;

box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27)
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
}
.profile_cards_body /deep/ .el-button{
	/*border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
	color: #FFFFFF;*/
	width: 95px;
height: 42px;
color:white;
background: #494DC2;
border-radius: 8px;
 
}
.profile_cards_body /deep/ .el-button:hover{
	/*border-width:2px  2px 2px 8px;
border-color:#FFB700;
border-style: solid;background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
	color: #FFFFFF;*/
	background-color: #FFB700;
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