<template>
  <div>
    <div class="query">
      <input type="text" v-model="mytext" />
      <button @click="handleChangepage">取消</button>

      <div v-show="mytext">
        <ul v-if="searchDatalist.length">
          <cinema-item v-for="data in searchDatalist" :key="data.cinemaId" :data="data"></cinema-item>
        </ul>
        <div v-else>没有匹配到影院</div>
      </div>
    </div>

    <div class="distance" v-show="!mytext">
      <ul>
        <!-- $store.getters.topDataList == topDataList -->
        <li v-for="(data,index) in topDataList" :key="index">{{data.name}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
// 引入创建好的CinemaItem子组件
import cinemaItem from './Cinema/CinemaItem'

// mapState,mapGetters是vuex提供的一种切割函数，可以把你自己想要的状态直接拿出来，不用点点点
import { mapState, mapGetters } from 'vuex' // 第一步引入

export default {
  data () {
    return {
      mytext: ''
    }
  },
  components: {
    cinemaItem
  },
  methods: {
    handleChangepage () {
      // 返回到上一个页面
      this.$router.back()
    }
  },
  mounted () {
    // 进来就消失
    console.log(this.$store.state.cinemaList)
    // this.$store.state.isTabbarShow = false

    // 同步状态，利用commit方法提交到mutations中
    // 只有有$store，都要开启命名空间使用
    this.$store.commit('tabbar/hide')

    // 异步请求
    if (this.cinemaList.length === 0) {
      // 只有有$store，都要开启命名空间使用
      this.$store.dispatch('cinema/getCinemaAction')
    } else {
      console.log('search', '使用缓存')
    }
  },

  // 计算属性
  computed: {
    // 第二步，再也不需要点点点，必须放在计算属性中
    // 只要出现$store.state就不要
    // this.$store.state.cinemaList == this.cinemaList
    ...mapState('cinema', ['cinemaList']),
    ...mapGetters('cinema', ['topDataList']),

    topDataList () {
      return this.cinemaList.slice(0, 5) // 截取前5个数据
    },
    searchDatalist () {
      return this.cinemaList.filter(
        item =>
          item.name.includes(this.mytext) ||
          item.name.toUpperCase().includes(this.mytext) ||
          item.name.toLowerCase().includes(this.mytext)
      )
    }
  },

  destroyed () {
    // 离开出现
    // console.log(destroyed)
    // this.$store.state.isTabbarShow = true
    // 只有有$store，都要开启命名空间使用
    this.$store.commit('tabber/show')
  }
}
</script>
