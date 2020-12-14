<!-- <template>
<div style="margin: 20px;">
    <el-form label-position=top label-width="80px" status-icon :rules="rules" ref="formLabelAlign" :model="formLabelAlign" class="demo-dynamic">
      <el-form-item label="名称" :required=true>
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="电话" :required=true>
        <el-input v-model="formLabelAlign.phone"></el-input>
    </el-form-item>
     <el-form-item label="密码" :required=true>
    <el-input type="password" v-model="formLabelAlign.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" :required=true>
    <el-input type="password" v-model="formLabelAlign.checkPass" autocomplete="off"></el-input>
  </el-form-item>

  <el-button type="primary" @click="submitForm('formLabelAlign')">保存更改</el-button>

    
</el-form>
</div>
</template>
<script>
  export default {
    name:'Changeinfo',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formLabelAlign.checkPass !== '') {
            this.$refs.formLabelAlign.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formLabelAlign.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
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
        formLabelAlign: {
          name: '启明星',
          phone: '18789011985',
          pass: '',
          checkPass:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
           phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        }
      };
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>


<style scoped>
.el-form /deep/ .el-form-item__label {
    float: none;
    display: inline-block;
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

<template>
<div class="change_body">

  <el-row>
        <el-col :span="5">
          <img  src="~@/assets/img/home/查.jpg" style="width: 80px;height: 80px; background-size: cover;margin-left: 20px;border-radius: 30%;">
        </el-col>
        <el-col :span="5"><el-button style="margin-top: 25px;">上传头像</el-button></el-col>
        </el-row>
      <el-form  label-position=top :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" >

      <el-form-item label="名称" :required=true>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

      <el-form-item label="电话" prop="phone" :required=true>
                <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>

        <el-form-item label="密码" prop="pass" :required=true>
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" :required=true>
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存更改</el-button>
        </el-form-item>

      </el-form>
</div>
</template>
<script>
  import Welchangeinfo from "./WelchangeInfo.vue"
  export default {
    name:'Changeinfo',
  components:{
      Welchangeinfo
      
  },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
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
        ruleForm: {
          pass: '',
          checkPass: '',
          phone: '18789011985',
          name: '启明星'
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
           phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        }
      };
    },
    mouted(){
      // this.sentshow()
    },
     methods: {

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      // },
      // sentshow(){
      //   this.$emit('showchange',this.show)
      // }

    }
  }
}
</script>

<style scoped>
.change_body{
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
</style>
