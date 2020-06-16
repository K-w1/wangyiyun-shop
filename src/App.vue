<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 各个页面的主体部分 -->
    <router-view></router-view>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@components/Header.vue'
import Footer from '@components/Footer.vue'
  export default {
    components:{
      Header,
      Footer
    }
  }
</script>

<style lang="scss">


</style>