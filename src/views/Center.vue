<template>
    <div>
        center
    </div>
</template>
<script>
export default {
  // 配置局部路由守卫（拦截）
  // beforeRouteEnter/beforeRouteUpdate/beforeRouteLeave是路由的钩子函数
  beforeRouteEnter (to, from, next) {
    // beforeRouteEnter进入roter之前，还没进去
    // 路由的钩子函数
    // console.log('拦截')
    if (localStorage.getItem('token')) {
      next() // 放行
    } else {
      // 重定向到login页面
      next('/login')
    }
  },

  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', '/detail/1111-->/detail/222222')
  },

  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    // ...
    next()
  }
}
</script>
