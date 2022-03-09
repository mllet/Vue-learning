<template>
  <div class="shopping_car">
    <hr>
    <h3>购物车例子测试git</h3>
    <ProductList></ProductList>
    <Cart></Cart>
  </div>
</template>

<script>
import productlist from './product-list.vue'
import cart from './cart.vue'
export default {
  name: 'ShoppingCar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    ProductList: productlist,
    Cart: cart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
