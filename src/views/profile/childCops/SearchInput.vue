<template>
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
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
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
</template>

<script >
	export default{
		name: 'Searchinput',
		data(){
			return{
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
       value4:[]
			}
		},
  methods: {
    goResultPage(){
      
         // if (this.value0 ==="" && this.value1 ===null &&this.value2 ===null && this.value3 ===null &&this.value4 ===null )
      //     this.$message('请确定查询条件');
      // else this.$router.push({path:"/profile",query:{ Value0:this.value0,Value1:this.value1,Value2:this.value2,Value3:this.value3,Value4:this.value4}}) Bus.$emit('Searchvalue0',this.value0);
         
         if(this.value0.length+this.value1.length+this.value2.length+this.value3.length+this.value4.length<=0)
            this.$message('请确定查询条件')
        else{
          this.$emit('searchvalue',{value0:this.value0,value1:this.value1,value2
          :this.value2,value3:this.value3,value4:this.value4})

           // this.$router.push({path:"/profile",query:{ value0:this.value0,value1:this.value1,value2
           // :this.value2,value3:this.value3,value4:this.value4}})
        }
       },
       goProDetailed(data){
         this.$router.push({path:"/stock",query:{ Shares: data}})
       }
    }
   
}
	
</script>

<style lang="css" scoped>
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

</style>