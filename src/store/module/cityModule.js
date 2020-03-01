const module = {
  namespaced: true, // 命名空间
  state: {
    cityName: '北京',
    cityId: '110100'
  },
  actions: {

  },
  mutations: {
    // 默认会自动传state，咱们真正传的是name
    setCityName (state, name) {
      state.cityName = name
    },
    setCityId (state, id) {
      state.cityId = id
    }
  }
}

export default module
