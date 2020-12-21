<template>
  <div class="member_comment">
    <h1>
      组员评价
    </h1>
    <evaluate v-for="(item, index) in comment" :data="item" :key="index"/>
  </div>
</template>

<script>
import Evaluate from "./Evaluate"
export default {

  name: 'MemberComment',
  components: {
    Evaluate
  },
  data () {
    return {
      comment: {
        "sy": {
            "other":[
                {
                  "name": "游政",
                  "content": "管理、组织能力不错！是一个很好的PO，希望以后能多学学技术方面的知识就更好了",
                  "img": require("@/assets/img/member/yz.png"),
                },
                {
                  "name": "严安龙",
                  "content": "善于沟通，文档编辑能力强，催进度频繁，比较有上进心",
                  "img": require("@/assets/img/member/yal.png"),
                },
                {
                  "name": "谭韵仪",
                  "content": "表达能力好，善于沟通，文字方面非常ok，但真的很忙",
                  "img": require("@/assets/img/member/tyy.png"),
                },
                {
                  "name": "王镇",
                  "content": "擅长文档整理，统筹组织团队活动，记录会议内容",
                  "img": require("@/assets/img/member/wz.png"),
                },
              ],
            "img":require("@/assets/img/member/sy.png"),
            "name":"施媛",
        },
        "yz": {
            "other":[
                {
                  "name": "施媛",
                  "content": "作为团队项目经理，担起了主要技术开发的重任，认真负责！",
                  "img": require("@/assets/img/member/sy.png"),
                },
                {
                  "name": "严安龙",
                  "content": "创意点多，有想法，执行力强，比较全能",
                  "img": require("@/assets/img/member/yal.png"),
                },
                {
                  "name": "谭韵仪",
                  "content": "能力一级棒，刻苦钻研，心地善良，脾气好，学习能力很强",
                  "img": require("@/assets/img/member/tyy.png"),
                },
                {
                  "name": "王镇",
                  "content": "开发能力强，对于数据的处理既耐心又细心，热心帮助队员解答疑惑，队伍的核心",
                  "img": require("@/assets/img/member/wz.png"),
                },
              ],
            "img":require("@/assets/img/member/yz.png"),
            "name":"游政",
        },
        "yal": {
            "other":[
                {
                  "name": "施媛",
                  "content": "解决了数据库和后端框架问题，在团队中是非常重要的角色！",
                  "img": require("@/assets/img/member/sy.png"),
                },
                {
                  "name": "游政",
                  "content": "代码设计、变成能力很强，后端的接口处理也很到位，也是一名很棒的后端工程师",
                  "img": require("@/assets/img/member/yz.png"),
                },
                {
                  "name": "谭韵仪",
                  "content": "有能力，有实力，代码能力很好，技术型人才",
                  "img": require("@/assets/img/member/tyy.png"),
                },
                {
                  "name": "王镇",
                  "content": "擅长数据处理，后端建立数据库、并且完成数据的读取与处理，积极与前端进行对接，对待每一次任务及时出色的完成",
                  "img": require("@/assets/img/member/wz.png"),
                },
              ],
            "img":require("@/assets/img/member/yal.png"),
            "name":"严安龙",
        },
        "tyy": {
            "other":[
                {
                  "name": "施媛",
                  "content": "认真学习前端开发工作，技术越来越熟练！",
                  "img": require("@/assets/img/member/sy.png"),
                },
                {
                  "name": "游政",
                  "content": "非常努力、非常勤奋。技术从无到有，编程能力也大大提高，真的是一名很努力的人。非常敬佩！",
                  "img": require("@/assets/img/member/yz.png"),
                },
                {
                  "name": "严安龙",
                  "content": "比较偏向默默付出，不懂就问，比较实在",
                  "img": require("@/assets/img/member/yal.png"),
                },
                {
                  "name": "王镇",
                  "content": "前端完成率高，质量好，与UI及时沟通，代码规范",
                  "img": require("@/assets/img/member/wz.png"),
                },
              ],
            "img":require("@/assets/img/member/tyy.png"),
            "name":"谭韵仪",
        },
        "wz": {
            "other":[
                {
                  "name": "施媛",
                  "content": "设计的UI界面简洁美观，是不可缺少的角色。",
                  "img": require("@/assets/img/member/sy.png"),
                },
                {
                  "name": "游政",
                  "content": "设计能力非常强，也有自己的很多创新观点，想法很不错，作为设计师是非常棒的！",
                  "img": require("@/assets/img/member/yz.png"),
                },
                {
                  "name": "严安龙",
                  "content": "设计感强，文档、ppt制作小能手，善于沟通，比较能歌善舞",
                  "img": require("@/assets/img/member/yal.png"),
                },
                {
                  "name": "谭韵仪",
                  "content": "乐观开朗，非常细节，对自己要求高",
                  "img": require("@/assets/img/member/tyy.png"),
                },
              ],
            "img":require("@/assets/img/member/wz.png"),
            "name":"王镇",
        },
      },
    }
  }
}
</script>

<style lang="css" scoped>
.member_comment {
  padding:30px 0;
}
</style>