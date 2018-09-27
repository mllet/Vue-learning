<template>
  <div class="option">
    <el-row center=true>
      <el-button plain @click="DECREMENT(1)">-1</el-button>
      <el-button plain @click="INCREMENT(1)">+1</el-button>
    </el-row>
    <el-row center=true>
      <el-button plain @click="decrementAsync(2)">异步-2</el-button>
      <el-button plain @click="incrementAsync(2)">异步+2</el-button>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations, mapActions } from 'vuex'
export default{
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    ...mapActions(['incrementAsync', 'decrementAsync'])
  }
}
</script>

<style lang="less">
.el-row{
  margin-top: 15px;
}
</style>
