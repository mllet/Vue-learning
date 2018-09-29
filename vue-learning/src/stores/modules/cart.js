/**
 * Created by Administrator on 2018/9/27.
 */
const state = {
  items: [],
  checkoutStatus: null
}
const actions = {
  // 将product添加到购物车items或者增加产品数量
  addProductToCart ({state, commit}, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', {id: product.id})
      } else {
        commit('incrementQuantity', cartItem)
      }
    }
  }
}
const mutations = {
  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  },
  pushProductToCart (state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementQuantity (state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  // checkout后将cart中 items清空
  setCartItems (state, { items }) {
    state.items = items
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
