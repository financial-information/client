<template>
<div class="change_body">

    <el-row  v-if="showChange==false">
        <div class="clickChange" ><el-button type="primary" icon="el-icon-edit" @click="showChange=true" plain>编辑/完善资料</el-button></div> 
    </el-row>

    <el-form  v-if="showChange==false" label-position=top :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm"  :disabled=true>
        <el-form-item label="名称" >
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone" >
            <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="未设置"></el-input>   
        </el-form-item>
        <el-row>
          <el-col :span="12">
              <el-form-item label="生日"  class="birthday" prop="birthday" placeholder="未设置">
                 <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
              </el-form-item>
          </el-col>
          <el-col :span="12">
              <el-form-item label="性别"  class="gender" prop="gender" placeholder="未设置">
                  <el-input v-model="showgender[ruleForm.gender]" placeholder="未设置"></el-input>
              </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="地址" >
            <el-input v-model="ruleForm.address" placeholder="未设置"></el-input>
        </el-form-item>
    </el-form>

    <el-row  v-if="showChange==true">
        <div class="clickChange" ><el-button type="primary" icon="el-icon-edit" @click="showChange=false" plain>返回</el-button></div> 
    </el-row>

    <el-form v-if="showChange==true" label-position=top :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" >
        <el-form-item label="名称"  prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="电话" prop="phone"   >
            <el-input v-model="ruleForm.phone" :disabled=true></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password" >
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
       
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="邮箱格式为@**.com"></el-input>
        </el-form-item>

        <el-row>
            <el-col :span="12">
                <el-form-item label="生日"  class="birthday" prop="birthday" placeholder="未设置">
                    <el-date-picker type="date"  value-format="yyyy-MM-dd" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
            
            <el-col :span="12">
              <el-form-item label="性别"  class="gender" prop="gender" placeholder="未设置">    
                  <el-select v-model="ruleForm.gender" placeholder="请选择性别" style="width: 100%;">
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="2"></el-option>
                  </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="地址">
            <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item>
            <div style="float: right;margin-right: 5px;">
                <el-button type="primary" @click="updateUserInfo(ruleForm)">保存更改</el-button>
            </div>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
import Welchangeinfo from "./WelchangeInfo.vue"
import { updateUserInfoData,getUserInfoData } from "@/network/tyy"
export default {
    name:'Personinfo',
    components:{
      Welchangeinfo
    },
    data() {
      var checkPhone = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('手机号不能为空'));
          } else {
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
            console.log(reg.test(value));
            if (reg.test(value)) {
              callback();
            } else {
              return callback(new Error('请输入正确的手机号'));
            }
          }
      };
      return {
        showgender:{
          "1":"男",
          "2":"女"
        },
        showChange: false,
        ruleForm:{
            "password": "123",
            "username": "mtgg",
            "email": "",
            "birthday": null,
            "gender": "1",
            "address": "",
            "image": null,
            "phone": "17889985670",
            "create_time": new Date
        },
        rules: {
           phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        }
      }
    },
    mounted(){
      this.getUserInfo()
    },
    methods: {
      getUserInfo(){
          let data={
            "id" : 5
          }
          getUserInfoData(data).then(res=>{
              if(res!=null&&res != undefined){
                this.ruleForm=res
              }      
          })
      },
      updateUserInfo(data1) {
          let data={
            "id" : '5',
            "params": data1 
          }
          updateUserInfoData(data).then(res=>{
            if(res!=null&&res != undefined)
              this.showChange=false       
          })
      }
  }
}
</script>

<style scoped>
.change_body{
    width: 75%;
    margin-left: 5%;
}
.clickChange{
    float: right;
    margin-right: 20px;
}

.el-form /deep/ .el-form-item__label {
    
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    color: #000000;
    opacity: 0.83;
}
.el-form /deep/ .el-input__inner{
    background: #F3F3F3;
    opacity: 1;
    border-radius: 14px;
} 
.birthday{
    width: 90%;
}
.prompt{
    color: #7D7979;
    border-bottom:2px solid #D3D3D3;
    margin-bottom: 20px;
}
.gender{
    width: 100%;
}
</style>


<!-- <template>
<div class="person_body">
    <el-form label-position=top status-icon :rules="rules" ref="ruleForm" label-width="80px" :model="ruleform" class="demo-ruleform">
      <el-form-item label="名称" :required=true >
        <el-input v-model="ruleform.name"></el-input>
    </el-form-item>
    <el-form-item label="电话" :required=true>
        <el-input v-model="ruleform.phone"></el-input>
    </el-form-item>

    <el-row class="prompt">完善以下信息</el-row>
    <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleform.email" placeholder="邮箱格式为@**.com"></el-input>
      </el-form-item>
    <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
  </el-form-item>
    <el-form-item label="地址">
        <el-input v-model="ruleform.address"></el-input>
      </el-form-item>
    <el-form-item label="自我介绍">
        <el-input type="textarea" v-model="ruleform.introduce"></el-input>
      </el-form-item>
   </el-form>
</div>
</template>
<script>
  export default {
    name:'Personinfo',
    data() {
      return {
        ruleform: {
          name: '启明星',
          phone: '18789011985',
          email: '',
          address:'',
          introduce:''
        },
        
        ruleForm: {
            "password": "",
            "username": "",
            "email": "",
            "birthday": null,
            "gender": null,
            "address": "",
            "image": null,
            "phone": ""
        },
        rules: {
              email:[
               { required: true, message: '请输入邮箱地址', trigger: 'blur' },
               { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        }
      };
    }
  }
</script>


<style scoped>
.person_body{
  width: 90%;
  margin-left: 5%;
}
.el-form /deep/ .el-form-item__label {
   
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    color: #000000;
    opacity: 0.83;
}
.el-form /deep/ .el-input__inner{
  background: #F3F3F3;
opacity: 1;
border-radius: 14px;
}
.prompt{
   color: #7D7979;
  border-bottom:2px solid #D3D3D3;
  margin-bottom: 20px;
}
</style> -->