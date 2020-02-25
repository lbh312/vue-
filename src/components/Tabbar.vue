<template>
  <nav>
    <ul>
        <!-- router-link:路由自带的,叫声明式导航，固定的，to：跳转页面方法，tag：指令出来模拟那个标签，activeClass：自定义一个名字，如同name一样，体现一个互斥关系 -->
      <!-- <router-link :to="navlist[0]" tag="li" activeClass="kerwinactive">电影</router-link>
      <router-link :to="navlist[1]" tag="li" activeClass="kerwinactive">影院</router-link>
      <router-link :to="navlist[2]" tag="li" activeClass="kerwinactive">我的</router-link> -->

      <router-link :to="data.path" tag="li" v-for="data in navlist" :key="data.text" activeClass="kerwinactive">
        <i class="iconfont" :class="data.icon"></i>
        <span>{{data.text}}</span>
      </router-link>
    </ul>
    <!-- 作业：换成v-for -->
  </nav>
</template>

<script>
export default {
  // a标签，router-link标签都叫声明式导航,可以参考Tabbar.vue
  // location.href叫编程式导航,可以参考Nowplaying.vue
  data () {
    return {
      navlist: [
        {
          path: '/film',
          text: '电影',
          icon: 'icon-all'
        },
        {
          path: '/cinema',
          text: '影院',
          icon: 'icon-smile'
        },
        {
          path: '/center',
          text: '我的',
          icon: 'icon-account'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.kerwinactive {
  color: red;
}
 nav {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background: white;
  z-index: 10;
  ul{
      display: flex;
      li{
          flex: 1;
          line-height: 25px;
          text-align: center;
          display: flex;
          flex-direction: column;
      }
  }
}
</style>
