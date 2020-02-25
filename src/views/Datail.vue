<template>
  <div>
    detail
  </div>
</template>
<script>
// import http from '@/util/http'
// import swiper from '@/compoments/Swiper'
// import photo from "./Datail/Photo"

export default {
  // filters:{
  //   //局部
  // },
  // data () {
  //   return {
  //     filminfo: null,
  //     isActive: true,
  //     isShow:false,
  //     isPhotoShow:false
  //   }
  // },
  // components: {
  //   swiper,
  //   photo
  // },
  // methods: {
  //   handleBack(){
  //     // 路由大对象有一个back方法
  //     this.$router.back()  // 返回功能
  //   },
  //   handlePhotoShow(){
  //     this.isPhotoShow = false
  //   }
  // },
  mounted () {
    // this.$router  整个路由的大对象
    // this.$route 当前datail唯一匹配到的路由对象
    // params这是固定的, .kerwinid就是index.js自定义的那个占位符
    console.log(this.$route.params.kerwinid, '利用id去请求接口数据')

    // http.request({
    //   url: `/gateway?filmId=${this.$route.params.kerwinid}&k=893882`,
    //   headers: {
    //     'X-Host': 'mall.film-ticket.film.info'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    //   this.filminfo = res.data.data.film
    // })
  }
}
</script>
// <style scoped lang="scss">

// img{
//   width: 100%;
// }
// .synopsis{
//   overflow: hidden;
//   height: 40px;
// }
// .datail{
//   margin-bottom: 50px;
// }

// </style>
