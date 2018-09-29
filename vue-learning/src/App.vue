<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/tf">tleft路由</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/tr/3/">tright路由</router-link>
    </div>
    <router-view></router-view>
    <Option></Option>
    <Display></Display>
    <h2>
      {{ doneTodosCount }}条数据
      &nbsp;&nbsp;&nbsp;<el-button size="small" plain @click="add()">增加一条数据</el-button>
      &nbsp;&nbsp;&nbsp;<el-button size="small" plain @click="delAsync()">异步删除第一条数据</el-button>
    </h2>
    <ShoppingCar></ShoppingCar>
  </div>
</template>

<script>
import display from './components/display.vue'
import option from './components/option.vue'
import shoppingcar from './components/shopping-cart.vue'
// import { mapMutations } from 'vuex'
import Vue from 'vue'
import { Button, Row, Col } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
export default {
  name: 'App',
  components: {
    Display: display,
    Option: option,
    ShoppingCar: shoppingcar
  },
  computed: {
    doneTodosCount () {
      return this.$store.state.todos.filter(todo => todo.done).length
    }
  },
  methods: {
    add () {
      this.$store.commit('add')
    },
    delAsync () {
      this.$store.dispatch('delAsync')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
