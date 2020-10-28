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
      
      <div slot="right" class="right">
        <div class="button">
          <span>登陆</span> | 
          <span>注册</span>
        </div>
      </div>

    </nav-template>
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
    }
  },
  methods: {
    changePage(item) {
      // console.log(item)
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="css" scoped>
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
</style>