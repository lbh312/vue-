<template>
    <div>
        <!-- :key="looplist.length"初始化过早解决办法 -->
        <swiper :key="looplist.length">
      <div class="swiper-slide" v-for="data in looplist" :key="data.bannerId">
        <img :src="data.imgUrl"/>
      </div>
    </swiper>
        <div>
      导航栏
    </div>

        <!-- 路由容器，引入它的子组件 -->
        <router-view></router-view>
    </div>
</template>

<script>
import http from '@/util/http'
import swiper from '@/components/Swiper'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      looplist: []
    }
  },
  components: {
    swiper // 局部注册swiper组件
  },
  computed: {
    ...mapState('city', ['cityId'])
  },
  mounted () {
    // 封装axios在http.js中，然后引入到film页面中
    http.request({
      url: `/gateway?type=2&cityId=${this.cityId}&k=3529285`,
      headers: {
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
      // 创建一个对象，引入到请求的数据中去
      // var obj = {
      //   bannerId: 222222222,
      //   imgUrl: 'https://pic.maizuo.com/usr/movie/f046c5d6b2c397a8194ab14dc439d7dd.jpg?x-oss-process=image/quality,Q_70'
      // }
      // this.looplist = [...res.data.data, obj] // es6语法，合并两个对象
      // console.log(this.looplist)

      // 保证有值的话，会赋值，没值的话，将不会
      if (res.data.data) {
        this.looplist = res.data.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
 .swiper-slide{
    img{
        width: 100%;
    }
 }

</style>
