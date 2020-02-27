import http from '@/util/http'

const module = {
  namespaced: true, // 开启命名空间
  state: {
    cinemaList: []
  },
  // 异步处理vuex，第二部
  actions: {
    getCinemaAction (store) {
      http.request({
        url: '/gateway?cityId=310100&ticketFlag=1&k=1358720',
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        console.log('影院', res.data)
        // 将上面定义的传参进来，第三步
        store.commit('setCinemaList', res.data.data.cinemas) // commit支持传参,将请求的数据传进来
      // this.datalist = res.data.data.cinemas
      })
    }
  },
  mutations: {
    // 这个方法将会在第三步调用
    setCinemaList (state, data) {
      console.log('setCinemaList', data)
      state.cinemaList = data
    }
  },
  // 对vuex的“全局状态”进行数据处理，类似于vue中的计算属性，主要起到复用效果
  getters: {
    topDataList (state) {
      // state形参，vuex自动调用时候，来传值
      return state.cinemaList.slice(0, 5) // 截取前5个数据
    }
  }
}

export default module
