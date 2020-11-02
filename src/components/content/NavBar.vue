<template>
  <div id="navbar">
    <nav-template>
      <div slot="left" class="left">
        <el-row>
          <el-col :span="1" class="logo">
            <img src="@/assets/img/common/logo.png" class="img" alt="">
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
        <i class="el-icon-s-grid"></i>
      </div>
      
      <div slot="right" class="right" @click="login">
        <div class="button">
          <span>登录</span> | 
          <span>注册</span>
        </div>
      </div>
    </nav-template>

    <!-- 模态框 -->
    <el-dialog
      :title="modelTitle"
      :visible.sync="centerDialogVisible"
      width="50%"
      class="model"
      center>
      <!-- 登录注册输入框 -->
      <div class="input_area" v-show="!registerPage">
        <el-input class="input" placeholder="电话" v-model="account" clearable></el-input>
        <div class="text_area">
            <el-link>忘记密码？</el-link>
        </div>
        <el-input class="input" placeholder="密码" v-model="password" show-password></el-input>
      </div>

      <div class="input_area" v-show="registerPage">
        <div class="input_register">
          <el-input class="input_register_message register_name" placeholder="名称" v-model="name" clearable></el-input>
          <el-input class="input_register_message register_phone" placeholder="电话" v-model="phone" clearable></el-input>
        </div>
        <el-input class="input_register" placeholder="密码" v-model="account" show-password></el-input>
        <el-input class="input_register repeat_password" placeholder="重复密码" v-model="repeatPassword" show-password></el-input>
      </div>
      

      <!-- 登录注册确定按钮以及提示 -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        <div class="register_link">
          <el-link class="register_account" type="info" v-show="!registerPage">还没有用户？</el-link>
          <el-link target="_blank" @click="changeModel()" v-show="!registerPage">立马注册</el-link>
          <el-link class="register_account" type="info" v-show="registerPage">已有用户？</el-link>
          <el-link target="_blank" @click="changeModel()" v-show="registerPage">立马登录</el-link>
        </div>
        <div class="show_img">
          
        </div>
      </span>
    </el-dialog>


  </div>
</template>

<script>
import NavTemplate from "@/components/common/NavTemplate"
export default {

  name: 'NavBar',
  components: {
    NavTemplate
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
            text: "论坛",
            path: "/comment"
          },
          {
            text: "新闻",
            path: "/news"
          },
          {
            text: "应用",
            path: "/app"
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
      account: new String,
      password: new String,
      phone: new String,
      name: new String,
      repeatPassword: new String,
      // 登陆注册转换参数
      modelTitle: "登录",
      registerPage: false
    }
  },
  methods: {
    changePage(item) {
      // console.log(item)
      // console.log(this.$router)
      this.$router.push(item.path)
    },
    login() {
      console.log(123)
      this.centerDialogVisible = true
    },
    changeModel() {
      if(this.registerPage == false) {
        this.modelTitle = "注册"
        this.registerPage = true
      } else {
        this.registerPage = false
        this.modelTitle = "登录"
      }
    }
  }
}
</script>

<style lang="css" scoped>
/*登录模态框中的登陆按钮*/
>>> .el-button--primary {
  background-color: rgb(102, 102, 102);
}
>>> .el-button {
  border-radius: 20px;
  width: 120px;
}
>>> .el-button:hover {
  background-color: rgb(73, 77, 194);
}
>>> .el-dialog__title {
  font-size: 28px;
  color: rgb(102, 102, 102);
}
>>> .el-dialog__close {
  font-size: 26px;
}
>>> .el-dialog {
  border-radius: 20px;
  background-image: url("~@/assets/img/common/mountain.png");
  background-repeat: no-repeat;
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
  margin: 10px 10%;
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
  background-color: rgb(73, 77, 194, 1);
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
</style>