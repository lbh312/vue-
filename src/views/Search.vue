<template>
  <div>
    search
  </div>
</template>

<script>
export default {
  mounted () {
    // 进来就消失
    console.log(this.$store.state.cinemaList)
    // this.$store.state.isTabbarShow = false

    // 同步状态，利用commit方法提交到mutations中
    this.$store.commit('hide')
  },
  destroyed () {
    // 离开出现
    // console.log(destroyed)
    // this.$store.state.isTabbarShow = true

    this.$store.commit('show')
  }
}
</script>
