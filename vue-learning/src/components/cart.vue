<template>
  <div class="cart">
    <h2>购物车</h2>
    <p v-show="!products.length">购物车空空如也，去选择一些商品吧</p>
    <el-row :gutter="20" :md="12" type="flex" justify="center" v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price}} x {{ product.quantity }}
    </el-row>
    <el-row :gutter="20" :md="12" type="flex" justify="center">
      <el-col :gutter="20" :md="3">
        <p>Total: {{ total }}</p>
      </el-col>
      <el-col :gutter="20" :md="3">
        <el-button :disabled="!products.length" @click="checkout(products)">Checkout</el-button>
      </el-col>
    </el-row>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  // checkoutStatus () {
  // return this.$store.state.cart.checkoutStatus
  // }
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
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
