const mutations = {
  addCart(state, info) {
    console.log(info);
    // 1.查看是否添加过
    const oldInfo = state.cartList.find(item => item.iid === info.iid)

    // 2.+1或者新添加
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      info.count = 1
      info.checked = false
      state.cartList.push(info)
    }
  },
  changeCheck(state, flag) {
    if(flag) 
      for(let i in state.cartList) {
        state.cartList[i].checked = true
      }
    else 
      for(let i in state.cartList) {
        state.cartList[i].checked = false
      }
  },
  updateSession(state, data) {
    state.session = data
  },
  updateUser(state, data) {
    state.userName = data.userName
    state.password = data.password
  }
}

export default mutations

