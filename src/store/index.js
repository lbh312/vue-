import Vue from 'vue'
import Vuex from 'vuex'
import cinema from './module/cinemaModule' // 引入子store
import tabbar from './module/tabbarshowModule' // 引入子store

Vue.use(Vuex) // 注册Vuex插件，到时候用的时候引用

// vuex状态管理（管理共享的状态）
// 缓存数据存在内存中，只要刷新页面，数据就丢
// 订单，详情，不适合用vuex来缓存数据
/*
1、解决非父子通信问题
2、缓存后端数据，提高用户体验

注意：
1、vuex只能有一个store
2、为了防止多人修改，我们切割成子store，再合并成唯一一个大的store对象
模块写法
*/
const store = new Vuex.Store({
  state: {

  }, // 存放“全局”状态，用this.$store就能访问到

  mutations: {

  },

  actions: {

  },

  getters: {

  },

  // 将两个store合并成一个大的
  modules: {
    cinema,
    tabbar
  }
})

export default store // 导出
