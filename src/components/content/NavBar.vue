<template>
  <div id="navbar">
    <nav-template>
      <div slot="left" class="left">
        <el-row>
          <el-col :span="1" class="logo">
            <img src="~@/assets/img/common/logo.png" class="img" alt="">
          </el-col>
          <el-col :span="12" class="left_text">
          &nbsp;企明星
          </el-col>
        </el-row>
        
      </div>

      <div slot="center" class="center">
        <span v-for="(item, index) in data" class="center_text" :class="{center_text_border: index !== 0}" @click="changePage(item)">
          {{item.text}}
        </span>
        <i class="el-icon-s-grid"> </i>
         
        <!-- <el-button class="manage" @click="manage_page()">
          管理后台
        </el-button> -->
      </div>
      
      <div slot="right" class="right" v-if="!logined">
        <div class="button" @click="centerDialogVisible = true">
          <span>登录</span> | 
          <span>注册</span>
        </div>
      </div>
      <div slot="right" class="right" v-if="logined">
        <input
        placeholder="搜索"
        class="search_info">
          
        </input>
        <button class="search_btn"><i class="el-icon-search"></i></button>
        <div class="user_img" @click="goToUserInfo">
          <el-image
          class="user_image"
          :src="userImg">
            
          </el-image>
        </div>

        <div class="user_img" @click="goPersonData()">
          <el-image
          class="user_image"
          :src="userImg" >
            
          </el-image>
        </div>
      </div>
    </nav-template>




    <!-- 模态框 -->
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="50%"
      class="model"
      :close-on-click-modal='false'
      center>
      <!-- 忘记密码输入框 -->
      <div class="forget_password input_area" v-show="forgetPassword">
        <h1 class="title forget_title">找回密码</h1>
        <p class="forget_notify">验证码会发至你的邮箱</p>
        
        <div v-show="!registerPage">
          <el-input class="input" placeholder="请输入你的邮箱" v-model="email" clearable></el-input>
          <div class="text_area">
          </div>
          <el-input class="input" placeholder="请输入验证码" v-model="checkCode" ></el-input>
          <!-- 验证码图片 -->
          <div class="check_img">
            <el-image 
              style="width: 100%; height: 100%"
              :src="checkCodeImg">
            </el-image>
          </div>
        </div>
        <!-- 登录注册确定按钮以及提示 -->
      <span slot="footer" class="dialog-footer">
        <el-button class="confirm" type="primary" @click="next">确 定</el-button>
        <div class="bottom">
          
        </div>
        <!-- <div class="show_img">
          
        </div> -->
      </span>


      </div>


      <!-- 登录注册输入框 -->
      <div class="input_area" v-show="!forgetPassword">
      <h1 class="title" v-show="!registerPage">登 录</h1>
      <h1 class="title" v-show="registerPage">注 册</h1>
      <div v-show="!registerPage">
        <el-input class="input" placeholder="电话" v-model="account" clearable></el-input>
        <div class="text_area">
            <el-link @click="forgetPassword = true">忘记密码？</el-link>
        </div>
        <el-input class="input" placeholder="密码" v-model="password" show-password></el-input>
      </div>

      <div class="input_area" v-show="registerPage">
        <div class="input_register">
          <el-input class="input_register_message register_name" placeholder="名称" v-model="name" clearable></el-input>
          <el-input class="input_register_message register_phone" placeholder="电话" v-model="phone" clearable></el-input>
        </div>
        <el-input class="input_register" placeholder="密码" v-model="password" show-password></el-input>
        <el-input class="input_register repeat_password" placeholder="重复密码" v-model="repeatPassword" show-password></el-input>
      </div>
      

      <!-- 登录注册确定按钮以及提示 -->
      <span slot="footer" class="dialog-footer">
        <el-button class="confirm" type="primary" @click="next">确 定</el-button>
        <div class="register_link">
          <el-link class="register_account" type="info" v-show="!registerPage" disabled>还没有用户？</el-link>
          <el-link target="_blank" @click="changeModel()" v-show="!registerPage">立马注册</el-link>
          <el-link class="register_account" type="info" v-show="registerPage" disabled>已有用户？</el-link>
          <el-link target="_blank" @click="changeModel()" v-show="registerPage">立马登录</el-link>
        </div>
        <div class="bottom">
          
        </div>
        <!-- <div class="show_img">
          
        </div> -->
      </span>
        
      </div>
    </el-dialog>


  </div>
</template>

<script>
import NavTemplate from "@/components/common/NavTemplate"

import { login } from "@/network/yz"

export default {

  name: 'NavBar',
  components: {
    NavTemplate,
  },
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            text: "首页",
            path: "/home"
          },
          {
            text: "企业",
            path: "/profile"
          },
          {
            text: "关于我们",
            path: "/about"
          },
        ]
      }
    }
  },
  data () {
    return {
      block: {
        left: 5,
        center: 15,
        right: 4
      },
      centerDialogVisible: false,
      account: "",
      password: "",
      phone: "",
      name: "",
      repeatPassword: "",
      // 登陆注册转换参数
      modelTitle: "登录",
      registerPage: false,
      forgetPassword: false,
      // 忘记密码参数
      email: "",
      checkCode: "",
      // 验证码
      checkCodeImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      userImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      logined: false
    }
  },
  methods: {
    changePage(item) {
      if(this.$route.path != item.path)
        this.$router.push(item.path)
    },
    goToUserInfo() {
      if(this.$route.path != "/news")
        this.$router.push("/news")
    },
    login() {
      if(this.account == "" || this.password == "") {
        this.$message.error("账号或密码不能为空")
      } else {
        let data = {
          "username": this.account,
          "password": this.password
        }
        login(data).then(res => {
          console.log(res)
          // 登录成功
          if(res.status == true) {
            let data = res.session
            this.$notify({
              title: "成功",
              message: "登陆成功",
              type: "success"
            })
            this.$store.commit("updateSession", data)
            // this.$cookie.set("sessionid", this.$store.getters.getSession, {expires:1})
            // console.log("this.$cookie =")
            // console.log(this.$cookie)
            // console.log("cookie=")
            // console.log(document.cookie)
            this.centerDialogVisible = false
            this.logined = true
          } else {
            this.$message.error("登录失败，账号或密码错误")
          }
        }).catch(err => {
          this.$notify({
              title: "失败",
              message: "请求超时",
              type: "danger"
            })
        })
      }
    },
    register() {
      if(this.name == "" || this.phone == "") {
        this.$message.error("名称或电话不能为空")
      } else if(this.password == "" || this.repeatPassword == "") {
        this.$message.error("密码不能为空")
      } else {
        if(this.password != this.repeatPassword) {
          this.$message.error("重复密码不一样")
        } else {
          this.$message.success("注册成功")
        }
      }
    },
    next() {
      if(!this.registerPage) {
        this.login()
      } else {
        this.register()
      }
      // this.centerDialogVisible = false
    },
    changeModel() {
      if(this.registerPage == false) {
        this.modelTitle = "注册"
        this.registerPage = true
      } else {
        this.registerPage = false
        this.modelTitle = "登录"
      }
    },
    // 跳转到管理后台
    manage_page() {
      this.$router.push('/manage')
    },
    goPersonData(){
      this.$router.push('/person')
    }
  }
}
</script>

<style lang="css" scoped>
/*登录模态框中的登陆按钮*/
>>> .el-button--primary {
  /*background-color: rgb(102, 102, 102);*/
  transition: all 0.5s;
  background-color: rgb(73, 77, 194, 0.9);
}
>>> .el-button {
  border-radius: 20px;
  width: 120px;
}
>>> .el-button:hover {
  background-color: rgb(73, 77, 194, 1);
}
>>> .el-dialog__title {
  font-size: 28px;
  color: rgb(102, 102, 102);
}
>>> .el-dialog__close {
  font-size: 26px;
}
>>> .el-dialog {
  border-radius: 40px;
  background-image: url("~@/assets/img/common/login_background.png");
  background-size:1000px 300px;
  background-repeat: no-repeat;
  min-width: 800px;
}
/*输入框*/
>>> .el-input__inner {
  height: 50px;
  border-radius: 50px;
  background-color: rgb(232, 232, 232);
  font-size: 22px;
}
>>> .el-input__clear {
  font-size: 30px;
  transform: translate(-50%, 10%);
}
/*头*/
>>> .el-dialog__header {
  padding-top:40px;
}


/*链接*/
>>> .el-link--inner {
  font-size: 16px;
}

#navbar {
  min-width: 960px;
  width: 80%;
  /*margin: 10px 10%;*/
  margin:auto;
  padding: 10px 20px;
  /*border:1px solid black;*/
}
/*中间*/
.center_text {
  padding: 0 10px;
  font-size: 16px;
  color: #666;
  font-weight: bold;
  cursor: pointer;
}
.center_text:hover {
  color:black;
}
.center_text_border {
  border-left: 1px solid black;
}

.center {
  text-align: center;
  line-height: 37px;
}
/*右边*/
.right {
  float: right;
  color: white;
}
.button {
  padding: 8px 20px;
  border-radius: 20px;
  background-color: rgba(73, 77, 194, 1);
}
.button:hover {
  cursor: pointer;
  background-color: rgba(73, 77, 194, 0.8);
}
/*左边*/
.left {  
  line-height: 37px;
}
.logo {
  height: 37px;
  width: 37px;
}
.left_text {
  text-align: left;
  font-size: 28px;
}
.img {
  width: 100%;
}
.model {
  text-align: center;
}

/*输入框*/
.input {
  width: 50%;
  /*margin-bottom:20px;*/
}

.input_area {
  text-align: center;
}
.text_area {
  width: 50%;
  margin: 10px 0;
  color:rgb(232, 232, 232);
  display: inline-block;
  text-align: right;
  font-size: 14px;
  color: #888;
}

.register_account {
  font-size: 14px;
}
.register_link {
  margin-top: 20px;
}
.show_img {
  height:150px;
}

/*注册*//*注册*/
.input_register {
  width: 60%;
  display: inline-block;
}

.input_register_message {
  width: 45%;
  display: inline-block;
  margin-bottom: 15px;
}
.register_name {
  float: left;
}
.register_phone {
  float: right;
}
.repeat_password {
  margin-top: 15px;
}
.manage:hover {
  color: white;
}
.title {
  text-align:center;
  font-size: 50px;
  color:black;
  margin-top:0;
}
.bottom {
  height: 40px;
}
.confirm {
  margin-top:20px;
}
/*忘记密码*/
.forget_title {
  margin:0;
  font-size: 35px;
}
.forget_notify {
  margin-top:0;
}
.check_img {
  width: 150px;
  height: 75px;
  /*text-align: center;*/
  margin:auto;
  margin-top:20px;
}
/*模态框关闭按钮*/
>>> .el-icon-close {
  color: black;
  font-size:25px;
  font-weight: bold;
}
.button {
  float: right;
}
.user_img {
  float: right;
  width: 40px;
  margin-left:5px;
  cursor: pointer;
}
.user_image {
  width: 40px; 
  height: 40px;
  border-radius: 50px;
}

.search_info {
  height:28px;
  width: 100px;
  /*position: re*/
  margin-top:6.5px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 0 10px;
  border:1px solid #999;
}
.search_info:focus, .search_btn:focus{
  outline: medium;
}
.search_btn {
  height:30px;
  width: 40px;
  line-height: 5px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transform: translate(-21%, 0);
  background-color: rgba(73, 77, 194, 1);
  border:none;
  color:white;
}
.search_btn:hover {
  cursor: pointer;
  background-color: rgba(73, 77, 194, 0.8);
}
</style>