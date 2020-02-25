<template>
  <div>
    <button @click="handleClick()">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      // ajax
      // localStorage存入数据，存不成对象，所以要转换成字符串格式
      localStorage.setItem('token', JSON.stringify({ isLogin: true }))
      // 将数据存好之后，跳转到你想要的跳转的页面
      this.$router.push('/center')
    }
  }
}
</script>
