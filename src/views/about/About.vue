<template>
<div id="about">
  <h1>关于我们</h1>
  <hr>
  <!-- 个人介绍 -->
  <introduction/>
  <hr>
  <!-- 工作贡献图 -->
  <contribution/>
  <hr>
  <!-- 组员评价 -->
  <member-comment/>
</div>
</template>

<script>
import Introduction from "./childCops/Introduction"
import Contribution from "./childCops/Contribution"
import MemberComment from "./childCops/MemberComment"
export default {

  name: 'About',
  components: {
    Introduction,
    Contribution,
    MemberComment
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
#about {
  padding-top:20px;
  width: 80%;
  margin:auto;
  text-align: center;
  /*background-color: rgba(73,77,194, 0.1);*/
  background-color: white;
}
</style>