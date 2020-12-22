const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.cartList.length
  },
  getUserName(state) {
  	return state.userName
  },
  getPassword(state) {
  	return state.password
  },


  getSession(state) {
    return state.session
  }
}

export default getters
