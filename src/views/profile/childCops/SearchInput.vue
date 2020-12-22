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
                  <el-select v-model="value1"  placeholder="行业">
                      <el-option
                        v-for="item in selectListOne"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value2"  placeholder="资本">
                      <el-option
                        v-for="item in selectListTwo"
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value3" placeholder="时间">
                      <el-option
                        v-for="item in selectListThree"
                        :key="item.type"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                  </el-select>
              </el-col>
              <el-col :span="5">
                  <el-select v-model="value4"  placeholder="地区">
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
           label: '全部----',
           value: '全部----'
         },
         {
           label: '金融业',
           value: '金融业'
         },{
           label: '制造业',
           value: '制造业'
         },{
           label: '农、林、牧、渔业',
           value: '农、林、牧、渔业'
         },{
           label: '教育',
           value: '教育'
         },{
           label: '房地产业',
           value: '房地产业'
         },{
           label: '电力、热力、燃气及水生产和供应业',
           value: '电力、热力、燃气及水生产和供应业'
         },{
           label: '采矿业',
           value: '采矿业'
         },{
           label: '建筑业',
           value: '建筑业'
         },{
           label: '交通运输、仓储和邮政业',
           value: '交通运输、仓储和邮政业'
         },{
           label: '居民服务、修理和其他服务业',
           value: '居民服务、修理和其他服务业'
         },{
           label: '科学研究和技术服务业',
           value: '科学研究和技术服务业'
         },{
           label: '批发和零售业',
           value: '批发和零售业'
         },{
           label: '水利、环境和公共设施管理业',
           value: '水利、环境和公共设施管理业'
         },{
           label: '卫生和社会工作',
           value: '卫生和社会工作'
         },{
           label: '文化、体育和娱乐业',
           value: '文化、体育和娱乐业'
         },{
           label: '信息传输、软件和信息技术服务业',
           value: '信息传输、软件和信息技术服务业'
         }
       ],selectListTwo: [
         {
           name: '5千万-5亿',
           type: '5千万-5亿'
         },
         {
           name: '5亿-50亿',
           type: '5亿-50亿'
         },
         {
           name: '50亿-150亿',
           type: '50亿-150亿'
         },
         {
           name: '150亿以上',
           type: '150亿以上'
         },
         {
           name: '全部----',
           type: '全部----'
         }
       ],selectListThree: [
         {
           name: '1949年-1965年',
           type: '1949年-1965年'
         },
         {
           name: '1966年-1980年',
           type: '1966年-1980年'
         },
         {
           name: '1981年-2000年',
           type: '1981年-2000年'
         },
         {
           name: '2001年至今',
           type: '2001年至今'
         },
         {
           name: '全部----',
           type: '全部----'
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
       value1:'',
       value2:'',
       value3:'',
       value4:[]
			}
		},
    created(){
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

            this.$router.push({path:"/prosearch",query:{ value0:this.value0,value1:this.value1,value2
            :this.value2,value3:this.value3,value4:this.value4}})
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
	
  width: 60%;
  margin:  0px auto;
  margin-bottom: 51px;
}
.profile_search_input  /deep/  .el-input__inner{
   border-radius: 10px 0px 0px 10px;
}
.profile_search_input  /deep/ .el-input-group__append {
	border: 0;
     background-color: #494DC2;
    border-radius: 0px 10px 10px 0px;
	color: white;
}
.profile_search_input  /deep/  .el-button{
  bottom: 0;
   border:none;
   outline: none;
}
.profile_search_input  /deep/ .el-input-group__append :hover{
  border: 0;
   background-color: #CBBEE9;
  border-radius: 0px 10px 10px 0px;
  color:  white;
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