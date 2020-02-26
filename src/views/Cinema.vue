<template>
    <div>
        <div class="title">
            <div class="left">上海</div>
             <div>影院</div>
              <div class="right"><i class="iconfont icon-search" @click="handleChangePage"></i></div>
        </div>

        <div class="select">
            <div @click="isAreaShow =! isAreaShow" :class="isAreaShow ? 'active' : '' ">{{current}}</div>
            <div>App订票</div>
            <div>最近去过</div>
        </div>

        <div class="area" v-show="isAreaShow">
            <ul>
                <li v-for="data in arealist" :key="data" @click="handleArea(data)"
                :class="data===current?'active':''" >
                    {{data}}
                </li>
            </ul>
        </div>

        <div class="content">
            <ul>
                <li v-for="data in computedDatalist" :key="data.cinemaId">
                    <h4>{{data.name}}</h4>
                    <p>{{data.address}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import http from '@/util/http'
export default {
  data () {
    return {
      datalist: [],
      isAreaShow: false,
      current: '全城' // 记录选择哪个区
    }
  },
  mounted () {
    http.request({
      url: '/gateway?cityId=310100&ticketFlag=1&k=1358720',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.cinemas
    })
  },
  methods: {
    handleArea (data) {
      // 改变current值，current值改变，计算属性会自动计算一遍
      this.current = data
      this.isAreaShow = false
    },
    handleChangePage () {
      this.$router.push('/cinema/search') // 点击搜索跳转路径
    }
  },
  computed: {
    // 所有区的计算属性
    arealist () {
      /* 把对象映射成里面的某个数据属性,用map方法 */
      var newarr = this.datalist.map(item => item.districtName)
      //  console.log(newarr)

      /* 利用set结构进行数组去重，Array.from把类数组架构转换成数据结构
              es6数组去重方式set方式，他会自动将重复的去掉,然后，再将set结构的转换成数组方式Array.from

              为了给请求的数据前面拼接一个"全城"，用es6拼接方法来拼接
              */
      var arealist = ['全城', ...Array.from(new Set(newarr))]
      return arealist
    },
    // 根据选择的不同区域，过滤出相应区域的影院
    computedDatalist () {
      // 解决“全城”刚开始不显示
      if (this.current === '全城') { return this.datalist }

      // 把整个原始数组过滤出来数据之后，必须保证是某个特定的区
      return this.datalist.filter(item => item.districtName === this.current)
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
    border:1px solid red !important;
  }

.title{
    display: flex;
    position:fixed;
    top:0px;
    left:0px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: white;
    z-index:10;
    div{
      flex:1;
      text-align: center;
    }
    .left{
      text-align: left;
    }
    .right{
      text-align: right;
    }
  }

  .select{
    display: flex;
    position:fixed;
    top:40px;
    left:0px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: white;
    z-index: 10;
    div{
      flex:1;
      text-align: center;
    }
  }

  .content{
    position: relative;
    top:80px;
    li{
      padding:10px;
    }
  }

   .area{
    position:fixed;
    top:80px;
    left:0px;
    width: 100%;
    background: white;
    z-index:10;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 25%;
        padding:5px;
        box-sizing: border-box;
        text-align: center;
         border:1px solid gray;
      }
    }
  }
</style>
