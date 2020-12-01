<template>
  
    <div class="new" >
    <el-container  style="width: 80%;text-align: center;margin-left: 10%;margin-bottom: 30px;">
  <el-aside style="width:55%" >
    <el-carousel trigger="click">
      <el-carousel-item v-for="(i,item) in imgList" :key="item">
        <img :src="i.url" style="background-size: cover;">
      </el-carousel-item>
    </el-carousel>

  </el-aside>
  <el-main  style="width:45%;padding: 0px; box-shadow: 5px 5px 5px #888888;">
      <el-row style="background-color: #414498;padding: 5px;">
          <el-col :span="12"><div class="grid-content bg-purple"style="font-size: 20px;text-align: center;color: white;"><i class="el-icon-bell"></i>时事热点</div></el-col>
          <el-col :span="12"><a href="" style=""><div class="grid-content bg-purple" style="margin-top: 8px;font-size: 12px;line-height: 25%;float: right;color: white;">更多讯息<i class="el-icon-arrow-right"></i></div></a></el-col>
      </el-row>
      <el-row style="padding: 5px;border-bottom: 1px solid gray;"><div style=""><a href="https://finance.sina.com.cn/china/2020-11-15/doc-iiznezxs1995562.shtml" style="text-decoration: none;color: black;">习近平：坚定不移贯彻新发展理念 推动长江经济带高质量发展</a> </div></el-row>
      <el-row style="padding: 5px;border-bottom: 1px solid gray;"><div><a href="https://finance.sina.com.cn/china/2020-11-15/doc-iiznctke1529420.shtml"  style="text-decoration: none;color: black;">李克强：RCEP的签署是多边主义和自由贸易的胜利</a> </div></el-row>
<!--       <el-row v-for="(i , index) in col" :key="index">{{index[0]}}</el-row> -->
      <el-row style="padding: 5px;border-bottom: 1px solid gray;"><div><a href="https://finance.sina.com.cn/stock/stockptd/2020-11-15/doc-iiznezxs2008284.shtml"  style="text-decoration: none;color: black;">下周如何布局？109家公司获机构密集调研</a></div> </el-row>
      <el-row style="padding: 5px;border-bottom: 1px solid gray;"><div><a href="https://finance.sina.com.cn/stock/hkstock/ggscyd/2020-11-13/doc-iiznezxs1715580.shtml"  style="text-decoration: none;color: black;">腾讯前9月“隐藏”账面浮盈4000亿？</a> </div></el-row>
      <el-row style="padding: 5px;"><div><a href="https://finance.sina.com.cn/china/2020-11-15/doc-iiznctke1532699.shtml"  style="text-decoration: none;color: black;">财政部：中日首次达成双边关税减让安排 实现历史性突破</a></div> </el-row>


  </el-main>
</el-container>
   </div>
</template>

<script>
export default {

  name: 'New',

  data () {
    return {
    	col: {
           name: "网站"
      },
      imgList:[
      {
        url:require('@/assets/img/home/查.jpg')

      },
      {
        url:require('@/assets/img/home/糖油粑粑.jpg')

      },
      {
        url:require('@/assets/img/home/豆腐的.jpg')

      },
      {
        url:require('@/assets/img/home/龙虾.jpg')

      }
      ]

    }
  }
}
</script>

<style lang="css" scoped>
.new{

}
.container2{
  width: 100%;

}
.el-aside{
}
.mainbar-user{
  height: 200px;
  background-image: url("~@/assets/img/home/search_background.jpg");
}
</style>