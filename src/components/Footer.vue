<template>
  <!-- 底部 -->
  <div class="footer">
    <div class="footer-center margin-center">
      <p>服务条款 | 隐私政策 | 意见反馈</p>
      <p>公司版权所有</p>
      <p>公司版权所有</p>
      <p>公司版权所有</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer{
  background: rgb(242,242,242);
  margin-top: 50px;
  .footer-center{
    width: $center-width;
    height: 160px;
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
      margin-top: 15px;
    }
  }
}
</style>