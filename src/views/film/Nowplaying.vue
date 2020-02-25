<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster"/>
        <h4>{{data.name}}</h4>
        <p>观众评分:{{data.grade}}</p>
        <p class="actor">主演：{{data.actors | actorFilter}}</p>
      </li>
    </ul>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
  </div>
</template>

<script>
import http from '@/util/http'

export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    http.request({
      url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8317728',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleClick (id) {
      // 作业 自己创建datail组件，配置好动态路由，跳转页面
      this.$router.push(`/datail/${id}`) // push切换页面，this.$router这是固定的
    }
  }
}
</script>
<style lang="scss" scoped>
li{
  overflow: hidden;
  padding: 5px;
  img{
    float: left;
    width: 100px;
  }
  .actor{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
