<template>
  <div class="cart">
    <el-row :gutter="20" :md="4" type="flex" justify="center">
      <el-col :md="4">
        <div class="grid-content bg-purple-light">{{ checkoutStatus }}</div>
      </el-col>
      <el-col :md="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    })
  // checkoutStatus () {
  // return this.$store.state.cart.checkoutStatus
  // }
  }
}
</script>

<style lang="less">
  .cart{
    padding: 10px 20px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
    margin-right: 20px;
    text-align: left;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
