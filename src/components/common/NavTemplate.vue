<template>
  <el-row>
      <el-col :span="block.left">
        <div class="left">
          <slot name="left">
          left
          </slot>
        </div>
      </el-col>

      <el-col :span="block.center">
        <div class="center">
          <slot name="center">
          center
          </slot>
        </div>
      </el-col>

      <el-col :span="block.right">
        <div class="right">
          <slot name="right">
          right      
          </slot>
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {

  name: 'NavTemplate',
  props: {
    block: {
      type: Object,
      default() {
        return {
          left: 5,
          center: 12,
          right: 7 
        }
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
</style>