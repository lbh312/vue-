<template>
  <div>
    <tabbar></tabbar>

    <!-- 关键帧动画 -->
    <transition name="app" mode="out-in">

      <!-- 路由容器(基于slot封装),这是固定写法,引入views文件夹下的组件，可以跳转页面-->
      <router-view></router-view>

    </transition>

  </div>
</template>

<script>
import tabbar from '@/components/Tabbar' // 只要是公用的就放在components静态文件中，这个不要联想到路由，他不是路由
export default {
  components: {
    tabbar
  }
}
</script>

<style lang="scss">
//  切记默认样式都放在app.vue中
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.app-enter-active {
    animation: aaa .5s;
  }
  .app-leave-active {
    animation: aaa .5s reverse;
  }
  @keyframes aaa {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
</style>
