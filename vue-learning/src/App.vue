<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <div @click="handle">防抖</div> -->
    <div>
      <router-link to="/tf">tleft路由</router-link
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/tr/3/">tright路由</router-link>
    </div>
    <router-view></router-view>
    <Option></Option>
    <Display></Display>
    <h2>
      {{ doneTodosCount }}条数据 &nbsp;&nbsp;&nbsp;<el-button
        size="small"
        plain
        @click="add()"
        >增加一条数据</el-button
      >
      &nbsp;&nbsp;&nbsp;<el-button size="small" plain @click="delAsync()"
        >异步删除第一条数据</el-button
      >
    </h2>
    <ShoppingCar></ShoppingCar>
    <button class="reg-btn" v-debounce="handle">防抖按钮</button>
  </div>
</template>

<script>
import display from "./components/display.vue";
import option from "./components/option.vue";
import shoppingcar from "./components/shopping-cart.vue";
// import { mapMutations } from 'vuex'
import Vue from "vue";
import { Button, Row, Col } from "element-ui";
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
import dDebounce from "./utils/utilFunc";
export default {
  name: "App",
  components: {
    Display: display,
    Option: option,
    ShoppingCar: shoppingcar,
  },
  computed: {
    doneTodosCount() {
      return this.$store.state.todos.filter((todo) => todo.done).length;
    },
  },
  methods: {
    add() {
      this.$store.commit("add");
    },
    delAsync() {
      this.$store.dispatch("delAsync");
    },
    // debounce(fn, wait) {
    //   var timer = null;
    //   return function () {
    //     if (timer !== null) {
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(() => {
    //       fn.apply(this, arguments);
    //     }, wait);
    //   };
    // },
    handle() {
      console.log("自定义指令111");
    },
  },
  mounted() {
    // this.handle = this.debounce(this.handle, 500);
  },
  directives: {
    debounce: dDebounce,
  },
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
