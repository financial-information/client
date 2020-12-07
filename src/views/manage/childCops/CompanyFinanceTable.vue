<template>
  <div>
    
      <div class="company_information_table">
        <el-table
        :data="tableData"
        >
        <el-table-column type="expand">
          <template slot-scope="item">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item class="form_item">

<!-- roa 总资产净利率ROA
total_assets  总资产
total_liabilities 总负债
asset_liability_ratio 资产负债率
net_profit  净利润
net_assets  净资产
roe 净资产收益率ROE
total_profit  利润总额
current_ratio 流动比率
net_assets_per_share  每股净资产
operating_income_per_share  每股营业收入
enterprise_value  企业价值
equity_multiplier 权益乘数
cash_return 全部资产现金回报率
quick_ratio 速动比率
sale_net_profit 销售净利率 -->


                <el-col class="col_title" :span="5">总资产周转率ROA:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.roa) }}</el-col>
                <el-col class="col_title" :span="5">总资产:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.total_assets) }}</el-col>
                <el-col class="col_title" :span="5">总负债:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.total_liabilities) }}</el-col>
                <el-col class="col_title" :span="5">资产负债率:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.asset_liability_ratio) }}</el-col>
                <el-col class="col_title" :span="5">净利润:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.net_profit) }}</el-col>
                <el-col class="col_title" :span="5">净资产:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.net_assets) }}</el-col>
                <el-col class="col_title" :span="5">净资产收益率ROE:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.roe) }}</el-col>
                <el-col class="col_title" :span="5">利润总额:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.total_profit) }}</el-col>
                <el-col class="col_title" :span="5">流动比率:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.current_ratio) }}</el-col>
                <el-col class="col_title" :span="5">每股净资产:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.net_assets_per_share) }}</el-col>
                <el-col class="col_title" :span="5">每股营业收入:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.operating_income_per_share) }}</el-col>
                <el-col class="col_title" :span="5">企业价值:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.enterprise_value) }}</el-col>
                <el-col class="col_title" :span="5">权益乘数:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.equity_multiplier) }}</el-col>
                <el-col class="col_title" :span="5">全部资产现金回报率:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.cash_return) }}</el-col>
                <el-col class="col_title" :span="5">速动比率:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.quick_ratio) }}</el-col>
                <el-col class="col_title" :span="5">销售净利率:</el-col><el-col class="col_content" :span="17">{{ showContent(item.row.sale_net_profit) }}</el-col>


                <!-- <el-col :span="24">{{item.row.profile}}</el-col> -->
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="证券代码"
          prop="stock_code">
        </el-table-column>
        <el-table-column
          label="公司简称"
          prop="stock_name">
        </el-table-column>
        <el-table-column
          label="总股本"
          prop="total_share_capital">
        </el-table-column>

        
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button
              size="mini"
              type="warning"
              v-if="!deleted(scope.row)"
              @click="addModelVisible = true">修改</el-button> -->
            <el-button
              size="mini"
              type="danger"
              v-if="false"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            
            <el-button
              size="mini"
              type="danger"
              v-if="true"
              disabled>不可删除</el-button>
          </template>
        </el-table-column>


      </el-table>
      </div>
      
    
    <!-- 分页 -->
    <div class="page">
      <div class="page_title">
          <el-pagination
          background
          layout="prev, pager, next"
          :total="totalItem"
          @current-change="handleCurrentChange">
        </el-pagination>
        <br>
      </div>
      

      <div class="page_button">第
        <el-input class="go_page" size="mini" v-model="tempPage" maxlength="3"></el-input>
        页
        <el-button type="primary" size="mini" @click="directTo">前往</el-button>
        <!-- <el-button type="success" size="mini" @click="addModelVisible = true">新增数据</el-button> -->
      </div>
      
    </div>
    <!-- 新增数据模态框 -->
    <el-dialog title="企业基本数据" :top="'10px'" :visible.sync="addModelVisible">
      <el-form :model="form">
        <el-form-item label="证券代码" :label-width="addLabelWidth">
          <el-input v-model="form.stock_code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="证券名称" :label-width="addLabelWidth">
          <el-input v-model="form.stock_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码" :label-width="addLabelWidth">
          <el-input v-model="form.credit_code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司中文名称" :label-width="addLabelWidth">
          <el-input v-model="form.company_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="成立日期" :label-width="addLabelWidth">
          <el-date-picker
            v-model="form.found_date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="工商登记号" :label-width="addLabelWidth">
          <el-input v-model="form.business_code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="注册资本(百万元)" :label-width="addLabelWidth">
          <el-input v-model="form.registered_capital" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="法人代表" :label-width="addLabelWidth">
          <el-input v-model="form.legal_representative" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司办公电话" :label-width="addLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="注册地址" :label-width="addLabelWidth">
          <el-input v-model="form.registered_address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司网站" :label-width="addLabelWidth">
          <el-input v-model="form.website" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="股票类型" :label-width="addLabelWidth">
          <el-input v-model="form.stock_type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="经营范围" :label-width="addLabelWidth">
          <el-input v-model="form.business_scope" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否上市" :label-width="addLabelWidth">
          <el-radio-group v-model="form.listed">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>\
          </el-radio-group>
        </el-form-item>
        <el-form-item label="公司简介" :label-width="addLabelWidth">
          <el-input v-model="form.profile" type="textarea" rows="3" maxlength="500" show-word-limit autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addModelVisible = false">取 消</el-button>
        <el-button type="primary" @click="addData">确 定</el-button>
      </div>
    </el-dialog>
  

  </div>
</template>

<script>
import { 
  getCompanyFinanceDataByPage,
} from '@/network/yz'
export default {

  name: 'CompanyInformationTable',

  data () {
    return {
      tableData: new Array,
      totalItem: new Number,
      // 输入框中的页面
      tempPage: new Number,
      currentPage: 1,
      // 添加数据模态框
      addModelVisible:false,
      form: {
        id: -1,
        stock_code: '000001.SZ',
        stock_name: '平安银行',
        credit_code: '91440300192185379H',
        company_name: '平安银行股份有限公司',
        found_date: '1987/12/22',
        business_code: '440301103098545',
        registered_capital: '19405918198',
        legal_representative: '谢永林',
        phone: '86-755-82080387',
        registered_address: '广东省深圳市罗湖区深南东路5047号',
        website: 'www.bank.pingan.com',
        profile: '平安银行股份有限公司是中国第一家面向社会公众公开发行股票并上市的商业银行.主营业务经营范围是经有关监管机构批准的各项商业银行业务.公司在22个经济发达城市设立了约300家分支机构的全国性商业银行,在北京、香港设立代表处,并与境外众多国家和地区的600多家银行建立了代理行关系2019年，本行在国内外机构组织的评选活动中荣获诸多荣誉与奖项，2019年1月，在中国互联网新闻中心举办的2018年度“优秀金融扶贫先锋榜”评选活动中，本行获评“精准扶贫先锋机构”；2019年12月，由金融时报社主办、国家金融与发展实验室提供学术支持的“2019中国金融机构金牌榜·金龙奖”评选，本行荣膺“年度最具竞争力银行”；2019年12月，在中国宋庆龄基金会、海南省人民政府、中国农业电影电视中心、央视网和海南省农业农村厅、琼海市人民政府联合多家单位共同主办的“2019美丽乡村博鳌国际峰会”上，本行先后荣获主办方授予的“精准扶贫先锋单位”、“乡村振兴示范单位”、“2019美丽乡村博鳌国际峰会理事单位”、“2019美丽乡村博鳌国际峰会优秀组织单位”等荣誉奖项',
        stock_type: '1001100000011000000',
        business_scope: '经有关监管机构批准的各项商业银行业务',
        listed: 1,
        deteled: 0,
        name: "123",
        region: "123",
      },
      addLabelWidth: '150px',
    }
  },
  mounted() {
    this.getCompanyFinanceDataByPage()
  },
  methods: {
    /*
      获取数据函数
    */
    // 初始化数据获取
    getCompanyFinanceDataByPage() {
      let data = {
        "page": 1
      }
      getCompanyFinanceDataByPage(data).then(res => {
        console.log(res)
        this.tableData = res.results
        // console.log(Math.ceil(res.count / 10))
        this.totalItem = res.count
        this.form.id = res.count + 1
      })
    },
    // 通过页数进行数据获取
    getDataFromPage(page) {
      let data = {
        "page": page
      }
      getCompanyFinanceDataByPage(data).then(res => {
        console.log(res)

        this.tableData = res.results
      })
    },
    /*
      组件内置反馈函数
    */
    handleCurrentChange(val) {
      this.getDataFromPage(val)
    },
    /*
      处理数据
    */
    showContent(data) {
      if(data == "")
        return "------"
      let str_arr = data.replaceAll(";", "-")
      return str_arr
    },
    /*
      click 触发事件
    */
    // 跳转页面
    directTo() {
      this.currentPage = parseInt(this.tempPage)
      this.getDataFromPage(this.currentPage)
    },
    // 删除数据
    handleDelete(index, row) {

      this.$confirm('此操作将删除该数据且不会展示给用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.deteled = 1
          let data = {
            "id": row.id,
            "params": row
          }
          // 更新数据
          updateCompanyBasicData(data).then(res => {
            console.log(res)
            if(res != null && res != undefined) {
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
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    deleted(row) {
      return row.deteled
    },
    addData() {
      console.log(this.form)
      addCompanyBasicData(this.form).then(res => {
        this.addModelVisible = false
        if(res != null && res != undefined) {
          this.$notify({
            title: "成功",
            message: "添加数据成功!!!",
            type: "success"
          })
        } else {
          this.$notify({
            title: "失败",
            message: "添加数据失败!!!",
            type: "danger"
          })
        }
        // console.log(res)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  text-align: right;
  font-size: 12px;
}
.form_item {
  /*text-align: center;*/
}
.col_title {
  font-weight: bolder;
  color:rgb(73, 77, 194);
}
.col_content {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.company_information_table {
  overflow: auto;
  width: 100%; 
  height: 600px;
  margin-bottom: 10px;
}
.page {
  margin-top: 20px;
  width: 50%;
  margin:auto;
}
/*直接输入跳转页面*/
.go_page {
  width: 50px;
}
/*增加*/
.add {
  text-align: right;
}
/*页面其他按钮*/
.page_button {
  text-align:center;
}
.page_title {
  text-align: center;
}
/*模态框*/

</style>









<!-- "business_code": "440301103098545",
"business_scope": "经有关监管机构批准的各项商业银行业务",
"credit_code": "91440300192185379H",
"credit_name": "平安银行",
"deteled": 0,
"found_date:" "1987/12/22",
"id": 4155,
"legal_representative": "谢永林",
"listed": 1,
"name": "123",
"phone": "86-755-82080387",
"profile": "平安银行股份有限公司是中国第一家面向社会公众公开发行股票并上市的商业银行.主营业务经营范围是经有关监管机构批准的各项商业银行业务.公司在22个经济发达城市设立了约300家分支机构的全国性商业银行,在北京、香港设立代表处,并与境外众多国家和地区的600多家银行建立了代理行关系2019年，本行在国内外机构组织的评选活动中荣获诸多荣誉与奖项，2019年1月，在中国互联网新闻中心举办的2018年度“优秀金融扶贫先锋榜”评选活动中，本行获评“精准扶贫先锋机构”；2019年12月，由金融时报社主办、国家金融与发展实验室提供学术支持的“2019中国金融机构金牌榜·金龙奖”评选，本行荣膺“年度最具竞争力银行”；2019年12月，在中国宋庆龄基金会、海南省人民政府、中国农业电影电视中心、央视网和海南省农业农村厅、琼海市人民政府联合多家单位共同主办的“2019美丽乡村博鳌国际峰会”上，本行先后荣获主办方授予的“精准扶贫先锋单位”、“乡村振兴示范单位”、“2019美丽乡村博鳌国际峰会理事单位”、“2019美丽乡村博鳌国际峰会优秀组织单位”等荣誉奖项",
"region": "123",
"registered_address": "广东省深圳市罗湖区深南东路5047号",
"registered_capital": "19405918198",
"stock_code": "000001.SZ",
"stock_type": "1001100000011000000",
"website": "www.bank.pingan.com" -->