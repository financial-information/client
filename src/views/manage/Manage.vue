<template>
  <div id="manage">
    用户表
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="user_code"
      label="注册代码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码">
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="用户名称">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    <el-table-column
      prop="is_deleted"
      label="注销">
    </el-table-column>
    <el-table-column
      prop="is_deleted"
      label="操作">
      <template slot-scope="scope">
        <el-row>
          <el-col :span="12">
            <el-button size="mini" type="warning">编辑</el-button>
          </el-col>

          <el-col :span="12">
            <el-button size="mini" type="danger">删除</el-button>
          </el-col>
        </el-row>
        
        
      </template>
    </el-table-column>
  </el-table>



  </div>
</template>

<script>
import { getUserList } from '@/network/get'
export default {

  name: 'Manage',
  data () {
    return {
      tableData: [
        {
          id: '000001',
          phone: '19955886633',
          password: '123456',
          name: '龙龙',
          gender: 1,
          email: '123456@qq.com',
          is_delete: 1,
        }, 
        {
          id: '000001',
          phone: '19955886633',
          password: '123456',
          name: '龙龙',
          gender: 1,
          email: '123456@qq.com',
          is_delete: 1,
        }, 
        {
          id: '000001',
          phone: '19955886633',
          password: '123456',
          name: '龙龙',
          gender: 1,
          email: '123456@qq.com',
          is_delete: 1,
        }, 
        {
          id: '000001',
          phone: '19955886633',
          password: '123456',
          name: '龙龙',
          gender: 1,
          email: '123456@qq.com',
          is_delete: 1,
        }, 
        ]
    }
    },
    mounted() {
      this.getUserList()
    },
    methods: {
      getUserList() {
        getUserList().then(res => {
          for (let i = 0; i < res.data.length; i++) {
            if(res.data[i].gender == 1) {
              res.data[i].gender = "女"
            } else {
              res.data[i].gender = "男"
            }
          }
        this.tableData = res.data
        })
      }
    }

}
</script>

<style lang="css" scoped>
#manage {
  min-width: 960px;
  margin: 10px 10%;
  padding: 10px 20px;
}
</style>