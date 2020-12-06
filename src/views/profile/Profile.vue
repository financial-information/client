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
</style>