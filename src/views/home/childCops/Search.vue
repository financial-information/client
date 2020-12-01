<template>
     <div class="search">
         <div class="search-contain">

         
           <div class="search-input">
               <div class="search-input-text" ><span>启明星，一搜就明白</span></div>
               <el-input placeholder="查一查" class="input-with-select "  prefix-icon="el-icon-search"id="TabSearch" v-model="SearchInput">
                   <el-button   slot="append"   id="TabSearch"  class="input-with-search "  @click="goSearchPage()">查一查</el-button>
               </el-input>
               <div class="search2" style="">
                    <el-row>
                           <el-col :offset="1"  :span="3" align="center">
                              <div class="grid-content bg-purple"  @click="searchShares=true" v-bind:class="[activeAffter ,searchShares===true ? activeBefore : '']"><!-- <img src="@/assets/查.jpg" alt="企明星" style="width:35%;"> -->
                                    <label class="search2-item" for="TabSearch"  ><img src="@/assets/img/home/股票.png" style="width: 20px;">查股票</label>
                              </div>
                            </el-col> 
                           <el-col :span="3">
                               <div class="grid-content bg-purple-light" width="35px"  @click="searchShares=false" v-bind:class="[activeAffter,searchShares===false ?  activeBefore : '']"><!-- <img src="@/assets/查.jpg" alt="企明星" width="35%"> -->
                                      <label class="search2-item" for="TabSearch" ><img src="@/assets/img/home/股票.png" style="width: 20px;">查年报</label>
                              </div>
                            </el-col> 
                     </el-row>
                </div>
           </div>
         </div>
       </div>
     </router-view>
</template>

<script>
export default {

  name: 'Search',

  data () {
    return {
    	searchShares: true,
      SearchInput: '',
      activeBefore: 'active2',
      activeAffter: 'active1'

    }
  }, 
  computed:{
  },
  methods: {
    goSearchPage(){
      if (this.SearchInput ==="")
          this.$message('请输入内容进行查询');
      else if ( this.searchShares === true)
         this.$router.push({path:"/stock",query:{ Shares: this.SearchInput}})
      else
         this.$router.push({path:"/profile",query:{ Reports: this.SearchInput}})
    }
}
}
</script>

<style lang="css" scoped>
.search{
  background-image: url("~@/assets/img/home/search_background.png");
  background-repeat: no-repeat;
  background-size:cover;
}
.search-input{
    width:  70%;
    margin: 0 auto;
    text-align: center;
    padding-top: 150px;
    margin-bottom: 30px;
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
   border-radius: 20px 0px 0px 20px;
  
}
.search-input  /deep/ .el-input-group__append {
   border: 0;
     background-color: #494DC2;
    border-radius: 0px 20px 20px 0px;
}
.search-input  /deep/  .el-button{
  bottom: 0;
   border:none;
   outline: none;
  
  
}
.active1{
  background-color: #494DC2;
  color: white;
  border-radius: 0px 0px  10px 10px;padding: 2px;
}
.active2{
  background-color: white;
  color: black;
  border-radius: 0px 0px  10px 10px;padding: 2px;
}
</style>