<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/tf">tleft</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/tr/3/">tright</router-link>
    </div>
    <router-view></router-view>
    <Option></Option>
    <Display></Display>
    <h2>
      {{ doneTodosCount }}条数据
      &nbsp;&nbsp;&nbsp;<el-button size="small" plain @click="add()">增加一条数据</el-button>
      &nbsp;&nbsp;&nbsp;<el-button size="small" plain @click="delAsync()">异步删除第一条数据</el-button>
    </h2>
  </div>
</template>

<script>
import display from './components/display.vue'
import option from './components/option.vue'
// import { mapMutations } from 'vuex'
import Vue from 'vue'
import { Button, Row } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
export default {
  name: 'App',
  components: {
    Display: display,
    Option: option
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
