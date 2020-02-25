<template>
  <div class="swiper-container" >
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {

  mounted () {
    new Swiper(".swiper-container") // eslint-disable-line
  }
}
</script>
