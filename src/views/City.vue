
<template>
<!-- 在router文件中，引入city -->
  <van-index-bar :index-list="indexList">
  <!-- 当没有删除和增加的时候，可以用到索引值当为value值 -->
  <div v-for="(data,index) in datalist" :key="index">
  <van-index-anchor :index="data.index">{{data.index}}</van-index-anchor>
  <!-- 不加冒号是字符串，加了冒号是变量 -->
  <van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleClick(item)"/>
  </div>
</van-index-bar>
</template>
<script>
import { mapMutations } from 'vuex'
import http from '@/util/http'
import Vue from 'vue'
import { IndexBar, IndexAnchor } from 'vant'
Vue.use(IndexBar).use(IndexAnchor)
export default {
  data () {
    return {
      indexList: [],
      datalist: []
    }
  },
  mounted () {
    http.request({
      url: '/gateway?k=9842588',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.dataFilter(res.data.data.cities)
    })
  },
  methods: {
    dataFilter (cities) {
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      console.log(letterArr)

      // filter遍历26个字母，跟cities数据.pinyin截取首字母，然后转换成大写，最后在进行过滤出来
      var cityArr = []
      for (var j = 0; j < letterArr.length; j++) {
        // 定义一个变量，如果temparr.length数组长度等于零，将不会push
        var temparr = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letterArr[j])
        // 收集datalist数据
        temparr.length && cityArr.push({
          index: letterArr[j],
          list: temparr
        })
        // 收集indexList，右边的数据
        temparr.length && this.indexList.push(letterArr[j])
      }
      this.datalist = cityArr
    },
    // 点击相应城市处理函数
    handleClick (item) {
      // console.log("11111")
      // 修改vuex共享的城市数据
      this.setCityName(item.name)
      this.setCityId(item.cityId)

      // 手动存 localStorage
      localStorage.setItem('cityId', item.cityId)
      localStorage.setItem('cityName', item.name)

      this.$router.back()
    },
    ...mapMutations('city', ['setCityName', 'setCityId']) // 从city命名空间中，取出setCityName这个方法

  }
}
</script>
