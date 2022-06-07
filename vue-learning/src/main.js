// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores/index'
Vue.config.productionTip = false

//全局自定义防抖指令，局部看App.vue
// import dDebounce from "./utils/utilFunc";
// Vue.directive("debounce", dDebounce);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },vue1.0写法
  render: h => h(App), // vue2.0写法
  template: '<App/>'
})
