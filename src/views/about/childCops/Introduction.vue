<template>
  <!-- 分布
    5  6  2 6 5
1 6 2  6 2 6 1 
   -->
  <div class="introduction">
    <h1>团队成员介绍</h1>
    <el-row class="my_row">
      <el-col :offset="5" :span="6" class="introduction_element">
        <card :data="items.sy"/>
      </el-col>

      <el-col :offset="2" :span="6" class="introduction_element">
        <card :data="items.yz"/>
      </el-col>
    </el-row>

    <el-row class="my_row">
      <el-col :offset="1" :span="6">
        <card :data="items.wz"/>
      </el-col>
      <el-col :offset="2" :span="6">
        <card :data="items.tyy"/>
      </el-col>
      <el-col :offset="2" :span="6">
        <card :data="items.yal"/>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Card from "./Card"
export default {

  name: 'Introduction',
  components: {
    Card
  },
  data () {
    return {
      items: {
        "sy": {
          name: "施媛",
          position: "产品经理",
          type: "管理型/设计型",
          comment: "施媛（自评）：作为PO主要负责团队项目的整体安排和任<br>务分配，参与UI设计，跟踪项目进度，但技术上贡献很少。",
          url: require("@/assets/img/member/sy.png"),
          showPosition: 0,
          myclass: "card1"
        },
        "yz": {
          name: "游政",
          position: "项目经理",
          type: "技术型/管理型",
          comment: "游政（自评）：技术上的解决的问题比较多，对于管理、组<br>织方面仍然保持热情，但有些细节上的地方时常忽略。",
          url: require("@/assets/img/member/yz.png"),
          showPosition: 1,
          myclass: "card2"
        },
        "wz": {
          name: "王镇",
          position: "UI设计师",
          type: "设计型/技术型",
          comment: "王镇（自评）：开发能力有待加强，对于数据还不够敏感，<br>还需要多看资料，希望能够积极地参与组织讨论",
          url: require("@/assets/img/member/wz.png"),
          showPosition: 2,
          myclass: "card3"
        },
        "tyy": {
          name: "谭韵仪",
          position: "前端工程师",
          type: "技术型/学习型",
          comment: "谭韵仪（自评）：学习能力还行，不懂就问，但心态不太好",
          url: require("@/assets/img/member/tyy.png"),
          showPosition: 2,
          myclass: "card4"
        },
        "yal": {
          name: "严安龙",
          position: "后端工程师",
          type: "技术型/学习型",
          comment: "严安龙（自评）：没有啥创新点，管理方面也不太行，与<br>成员沟通方面需要加强，代入感不强",
          url: require("@/assets/img/member/yal.png"),
          showPosition: 2,
          myclass: "card5"
        }
      },
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }
  }
}
</script>

<style lang="css" scoped>
.my_row {
  margin:30px 0;
}
</style>