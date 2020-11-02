<template>
     <div class="search">
         <div class="search-contain">

         
           <div class="search-input">
               <div class="search-input-text" ><span>启明星，一搜就明白</span></div>
               <el-input placeholder="查一查" class="input-with-select "  prefix-icon="el-icon-search"id="TabSearch" v-model="SearchInput">
                   <el-button   slot="append"   id="TabSearch"  class="input-with-search "  >查一查</el-button>
               </el-input>
               <div class="search2" style="">
                    <el-row>
                           <el-col :offset="1"  :span="3" align="center">
                              <div class="grid-content bg-purple"  v-bind:class="classObject1" style="border-radius: 5px 5px  10px 10px;padding: 2px;"><!-- <img src="@/assets/查.jpg" alt="企明星" style="width:35%;"> -->
                                    <label class="search2-item" for="TabSearch" @click="change1" ><img src="@/assets/股票.png" style="width: 20px;">查股票</label>
                              </div>
                            </el-col> 
                           <el-col :span="3">
                               <div class="grid-content bg-purple-light" width="35px"  v-bind:class="classObject2" style="border-radius: 5px 5px  10px 10px;padding: 2px;"><!-- <img src="@/assets/查.jpg" alt="企明星" width="35%"> -->
                                      <label class="search2-item" for="TabSearch" @click="change2" ><img src="@/assets/股票.png" style="width: 20px;">查年报</label>
                              </div>
                            </el-col> 
                     </el-row>
                </div>
           </div>
         </div>
       </div>
</template>

<script>
export default {

  name: 'Search',

  data () {
    return {
    	searchShares: true,
      searchReport: false,
      SearchInput: ''

    }
  }, 
  computed:{
     classObject1:function(){
      return{
             active1: this.searchShares && !this.searchReport,
             active2: this.searchReport && !this.searchShares
      }
      },     
     classObject2:function(){
      return{
             active1: !this.searchShares && this.searchReport,
              active2: !this.searchReport && this.searchShares
        
      }
      }
  },
  methods: {
    change1(){
      this.searchShares = true,
      this.searchReport = false
    },
    change2(){
      this.searchShares = false,
      this.searchReport = true
    }
}
}
</script>

<style lang="css" scoped>




.search{
  background-image: url("~@/assets/搜索背景.jpg");
  background-repeat: no-repeat;
  background-size:cover;
}
.search-input{
    width:  70%;
    margin: 0 auto;
    text-align: center;
    padding-top: 150px;
    margin-bottom: 100px;
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
   border-radius: 20px;
  
}
.search-input  /deep/  .el-button{
   border-radius: 20px;
  
}
.active1{
  background-color: white;
}
.active2{
  background-color: purple;
  color: white;
}
</style>