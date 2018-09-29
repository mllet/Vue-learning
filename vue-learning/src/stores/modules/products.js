/**
 * Created by Administrator on 2018/9/27.
 */
const _products = [
  {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2},
  {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10},
  {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5}
]
const state = {
  all: []
}
const mutations = {
  setProducts (state, products) {
    state.all = products
  }
}
const actions = {
  getProducts ({ commit }) {
    setTimeout(() => {
      commit('setProducts', _products)
    }, 100)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
