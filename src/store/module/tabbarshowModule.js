const module = {
  namespaced: true, // 开启命名空间
  state: {
    isTabbarShow: true
  },
  actions: {

  },
  mutations: {
    // 自定义起的名字
    // 形参随便定义
    show (state) {
      // console.log("show")
      state.isTabbarShow = true
    },
    hide (state) {
      // console.log("hide")
      state.isTabbarShow = false
    }
  }
}

export default module
