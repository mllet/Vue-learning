/**
 * Created by Administrator on 2018/9/27.
 */
const state = {
  items: [],
  checkoutStatus: null
}
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(
      ({id, quantity}) => {
        const product = rootState.products.all.find(product => product.id === id)
        return {
          title: product.title,
          price: product.price,
          quantity
        }
      }
    )
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, currentValue) => {
      return total + currentValue.price * currentValue.quantity
    }, 0)
  }
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
  },
  checkout ({state, commit}, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', {items: []})
    buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  }
}
function buyProducts (products, cb, errorCb) {
  setTimeout(() => {
    // simulate random checkout failure.
    (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
      ? cb()
      : errorCb()
  }, 100)
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
  mutations,
  getters
}
