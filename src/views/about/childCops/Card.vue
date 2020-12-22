<template>
    <el-tooltip class="item" effect="dark" :placement="showIntroduction(data.showPosition)">
      <div slot="content" v-html="data.comment">
      </div>
  <div :class="'card ' + data.myclass">
    <el-image
    class="img"
    :src="data.url">
      
    </el-image>
    <div class="text">
      <h2>{{data.name}}</h2>
      <h3>职位：{{data.position}}</h3>
      <h3>类型：{{data.type}}</h3>
    </div>
  </div>
    </el-tooltip>
</template>

<script>
export default {

  name: 'Card',
  props: {
    data: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    showIntroduction(num) {
      switch(num) {
        case 0:
          return "left"
        case 1:
          return "right"
        case 2:
          return "bottom"
        default:
          return "bottom"
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.img {
  width: 250px; 
  height: auto;
  border-radius: 500px;
}
.card {
  padding: 20px;
  background-color: white;
  transition: all 2s;
}
.card:hover {
  transform: translate(0, -5%);
  cursor: pointer;
}
.card1:hover {
  background-color: rgba(232,9,118, 0.5);
}
.card2:hover {
  background-color: rgba(0,178,255, 0.5);
}
.card3:hover {
  background-color: rgba(0,147,0, 0.5);
}
.card4:hover {
  background-color: rgba(255,139,0, 0.5);
}
.card5:hover {
  background-color: rgba(255,224,0, 0.5);
}
/*悬浮框长度*/
>>> .el-tooltip__popper {
  width: 100px;
}
</style>