<template>
  <div class="product-list">
    <div v-for="item in products" :key="item.id">
      <el-row :gutter="20" :md="12" type="flex" justify="center">
          <el-col :md="6" class="grid-content bg-purple-light">
            {{ item.title }} - {{ item.price}}
          </el-col>
          <el-button :disabled="!item.inventory" @click="addProductToCart(item)">
            添加到购物车
          </el-button>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
//  computed: mapState({
//    products: state => state.products.all
//  }),
  computed: {
    products () {
      return this.$store.state.products.all
    }
  },
  created () {
    this.$store.dispatch('products/getProducts')
  },
  methods: mapActions('cart', ['addProductToCart'])
}
</script>

<style lang="less">
  .product-list{
    padding: 10px 20px;
  }
</style>
