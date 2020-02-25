// main.js为入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'// 导入./router/index.js 路由
// import '@util/filter' // 引入过滤器，立马生效
// import '@util/directive' // 引入指令，立马生效
// import '@util/component' // 全局组件
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // 将路由添加在根组件中，这是固定的
  // store,
  render: h => h(App) // 根组件，不能动摇
}).$mount('#app')
