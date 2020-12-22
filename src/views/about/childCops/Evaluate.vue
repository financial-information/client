<template>
  <div class="evaluate">
    <div class="block">
    <el-image
      class="img"
      :src="data.img"></el-image>
    </div>
    <h2>{{data.name}}</h2>


    <el-row class="row_content" v-for="(item, index) in data.other" :key="index">
      <el-col :span="4" :offset="2">
        <div class="other_img">
          <el-image
          class="img"
          :src="item.img"></el-image>
          {{item.name}}
        </div>
      </el-col>
      <el-col class="other_text" :span="18">{{item.content}}</el-col>
    </el-row>
    <div class="margin_bottom"></div>
    <hr>
  </div>
</template>

<script>
export default {

  name: 'Evaluate',
  props: {
    data: {
      type:Object,
      default() {
        return {

        }
      }
    }
  },
  data () {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }
  }
}
</script>

<style lang="css" scoped>
.evaluate {
  text-align: center;
  margin:auto;
}
.block {
  margin:auto;
  margin-top:30px;
  width: 220px;
  height: 150px;
}
.img {
  border-radius: 200px;
  width: 100%; 
  height: auto;
}
.row_content {
  padding:20px 0;

  font-size: 18px;
  font-weight: bolder;
}
.other_img {
  height:auto;
  width: 150px;
}
.other_text {
  text-align: left;
  line-height:100px;
}
h2 {
  margin-bottom:0;
}
.margin_bottom {
  margin-bottom:30px;
}
</style>