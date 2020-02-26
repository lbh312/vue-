import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'

Vue.use(Vuex) // 注册Vuex插件，到时候用的时候引用

// vuex状态管理（管理共享的状态）
// 缓存数据存在内存中，只要刷新页面，数据就丢
// 订单，详情，不适合用vuex来缓存数据
/*
1、解决非父子通信问题
2、缓存后端数据，提高体验
*/
const store = new Vuex.Store({
  state: {
    isTabbarShow: true,
    cinemaList: []
  }, // 存放“全局”状态，用this.$store就能访问到

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
    },
    // 这个方法将会在第三步调用
    setCinemaList (state, data) {
      console.log('setCinemaList', data)
      state.cinemaList = data
    }
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
  }
})

export default store // 导出
