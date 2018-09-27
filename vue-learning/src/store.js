/**
 * Created by Administrator on 2018/9/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    addcount: 1
  },
  mutations: {
    INCREMENT (state, data) {
      state.count += data
    },
    DECREMENT (state, data) {
      state.count -= data
    },
    add (state) {
      state.todos.push({ id: 1, text: '...', done: true })
    },
    del (state) {
      state.todos.splice(0, 1)
    }
  },
  actions: {
    incrementAsync ({ commit }, data) {
      setTimeout(() => {
        commit('INCREMENT', data)
      }, 1000)
    },
    decrementAsync ({ commit }, data) {
      setTimeout(() => {
        commit('DECREMENT', data)
      }, 1000)
    },
    delAsync ({ commit }) {
      setTimeout(() => {
        commit('del')
      }, 1000)
    }
  },
  getters: {
    doneTodos: state => state.todos.filter(item => item.done),
    doneTodosCount: (state, getters) => getters.doneTodos.length
  }
})
export default store
