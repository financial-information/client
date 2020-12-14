<template>
  <div id="manage">

    <el-container class="container">
  <el-aside class="aside" width="200px">
    <el-menu :default-openeds="['1']">
          <el-menu-item @click="currentTable = '1-1'">企业基本信息表</el-menu-item>
          <el-menu-item @click="currentTable = '1-2'">企业财务报表</el-menu-item>
          <!-- <el-menu-item>企业风险分析表</el-menu-item> -->
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-main class="main">
    <!-- 企业基本信息表 -->
    <company-information-table v-if="currentTable === '1-1'"></company-information-table>
    <company-finance-table v-if="currentTable === '1-2'"></company-finance-table>

    </el-main>
  </el-container>
</el-container>



  </div>
</template>

<script>



import CompanyInformationTable from "./childCops/CompanyInformationTable"
import CompanyFinanceTable from "./childCops/CompanyFinanceTable"

export default {

  name: 'Manage',
  components: {
    CompanyInformationTable,
    CompanyFinanceTable,
  },
  data () {
      return {
        tableData: [],
        currentTable: "1-1",
      }
    },
    mounted() {
      
    },
    methods: {
      
    }

}
</script>

<style lang="css" scoped>
#manage {
  min-width: 960px;
  margin: 10px 10%;
  padding: 10px 20px;
}
.main {
  height: 100%;
}
.aside {
  /*width:100px;*/
  /*margin-right: 20px;*/
  background-color: rgb(238, 241, 246);
}
.container {
  height: 800px; border: 1px solid #eee
}

</style>