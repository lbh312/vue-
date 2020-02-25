import Vue from 'vue'
import VueRouter from 'vue-router' // 路由核心模块，不动他，必加
import Film from '@/views/Film'
// import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Datail from '@/views/Datail'
import Login from '@/views/Login'
import ErrorComponent from '@/views/ErrorComponent'
import Nowplaying from '@/views/film/Nowplaying'
import Comingsoon from '@/views/film/Comingsoon'

Vue.use(VueRouter) // 创建路由插件，必加，不动他

// 路由映射表，将整个路由模块直接加入视图组件,不需要你手动隐藏或删除，全都由路由模块给你做，然后在main.js中引入
const routes = [
  {
    path: '/film',
    component: Film,
    // 子组件，记得要在父组件中留容器，让子组件插入，这个就是二级路由
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '/film', // 自己的孩子自己管
        redirect: '/film/nowplaying'// 重定向
      }
    ]
  },

  {
    path: '/cinema',
    // component: Cinema
    // 路由懒加载
    component: () => import(/* webpackChunkName: 'kerwincinema' */'@/views/Cinema') // webpack会进行分割，用什么加载什么
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    // 动态路由的写法
    path: '/datail/:kerwinid', // /:kerwinid ,/:不能删掉，固定写法，kerwinid是自定义，只是一个动态占位符
    component: Datail
  },
  {
    path: '/', // 默认为/
    redirect: '/film'// 重定向到/film页面中
  },

  {
    path: '*', // 通配符，优先级最低，当匹配不到的话，会跳转你设置的页面
    component: ErrorComponent // Error是关键字，不要随便用
  }

]

const router = new VueRouter({
  mode: 'hash', // history不带#，hash带#
  routes // vue就有的，不能动，他就是上面的routes，如同routers：routers
})

// 配置全局路由守卫（拦截）
// router.beforeEach((to, from, next) => {
//   // console.log(to) // to跳转到center就拦截
//   if (to.path === '/center') {
//     // console.log("被拦截")
//     if (localStorage.getItem('token')) {
//       next() // 放行
//     } else {
//       // 重定向到login页面
//       next('/login')
//     }
//   } else {
//     next() // 放行
//   }
// })

export default router // 将路由模块导处去
