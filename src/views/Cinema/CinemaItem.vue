<template>
<li>
 <h4>{{data.name}}</h4>
  <p>{{data.address}}</p>
</li>
</template>

<script>
export default {
  // 接收父组件传来的自定义属性
  props: ['data']
}
</script>

<style lang="scss" scoped>
  li{
      padding:10px;
    }
</style>
