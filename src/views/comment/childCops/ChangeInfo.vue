<template>
<div class="change_body">

     <el-row  v-if="showChange==false">
         <div class="clickChange" ><el-button type="primary" icon="el-icon-edit" @click="showChange=true" plain>编辑/完善资料</el-button></div></el-row>
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



      <el-form v-if="showChange==true" label-position=top :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" >
        <el-row >
            <el-col :span="5">
              <img  src="~@/assets/img/home/查.jpg" style="width: 80px;height: 80px; background-size: cover;margin-left: 20px;border-radius: 30%;">
            </el-col>

  <el-col :span="5">
     <el-upload
  class="upload-demo"
  ref="upload"
  action="#"
   list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :auto-upload="false">
  <i class="el-icon-plus"></i>
 
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="ruleForm.image" alt="">
</el-dialog>

  </el-col>

            <el-col :span="5"><el-button style="margin-top: 25px;">上传头像</el-button></el-col>
        </el-row>
        <el-form-item label="名称"  prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>

      <el-form-item label="电话" prop="phone"   >
          <el-input v-model="ruleForm.phone" :disabled=true></el-input>
      </el-form-item>

        <el-form-item label="密码" prop="password" >
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
       <!--  <el-form-item label="确认密码" prop="checkPass" :required=true>
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item> -->
       
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="邮箱格式为@**.com"></el-input>
          </el-form-item>
         <el-row>
        <el-col :span="12">
            <el-form-item label="生日"  class="birthday" prop="birthday" placeholder="未设置">
               <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
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
            <el-button type="primary" @click="updateUserInfo(ruleForm)">保存更改</el-button></div>
          
        </el-form-item>
      </el-form>
    

</div>
</template>
<script>
  import Welchangeinfo from "./WelchangeInfo.vue"
  import { updateUserInfoData,getUserInfoData } from "@/network/tyy"
  export default {
    name:'Changeinfo',
  components:{
      Welchangeinfo
  },
    data() {
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } else {
      //     if (this.ruleForm.checkPass !== '') {
      //       this.$refs.ruleForm.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
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
        dialogImageUrl: '',
        dialogVisible: false,
        showgender:{
          "1":"男",
          "2":"女"
        },
        // ruleForm: {
        //   pass: '',
        //   checkPass: '',
        //   phone: '18789011985',
        //   name: '启明星'
        // },
        showChange:false,
        ruleForm: {
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
          // pass: [
          //   { validator: validatePass, trigger: 'blur' }
          // ],
          // checkPass: [
          //   { validator: validatePass2, trigger: 'blur' }
          // ],
           phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        }
      }
    },
    mounted(){
      // this.sentshow()
      this.getUserInfo()
    },
     methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.ruleForm.image = file.url;
        this.dialogVisible = true;
        console.log(111)
      },
      getUserInfo(){
        let data={
          "id" : '5'
        }
        console.log('yes') 
         getUserInfoData(data).then(res=>{
            if(res!=null&&res != undefined)
            {
              console.log('成功成功成功yes') 
              console.log(res)
              this.ruleForm=res.results
            }      
          })
       },

      updateUserInfo(data1) {
        
             let data={
          "id" : '5',
          "params": data1 
        }
        console.log(data)
        this.showChange=false
        updateUserInfoData(data).then(res=>{
          if(res!=null&&res != undefined)
                   console.log('成功成功')        
               })
          
      // },
      // sentshow(){
      //   this.$emit('showchange',this.show)
      // }

    }
//     uploadImgDisplay(index) {
//     //点击按钮之后把当前这一列的索引值赋给一个data
//       this.currentIndex = index
//     },
//   handleAvatarSuccess(response) {
//       //上传成功后在table绑定的数据中找到当前索引下的图片链接修改
//       this.tabledata[this.currentIndex].imgUrl = response.data
//       //这里之所以要获取img是因为我们新建的时候虽然拿到了新的图片的url，
// //但是当前img的src还是空的，所以我们就需要每次成功后通过dom拿到第一行的img（因为我每次新增都是添加到第一行）
// //然后把它的src修改为最新的
//       const firstImg = document.querySelector('.firstImg')
//       firstImg.src = response.data
//     }
  }
}
</script>

<style scoped>
.change_body{
  width: 70%;
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
