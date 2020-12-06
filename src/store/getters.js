const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.cartList.length
  },



  getSession(state) {
    return state.session
  }
}

export default getters
