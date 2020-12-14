<template>
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
</style>