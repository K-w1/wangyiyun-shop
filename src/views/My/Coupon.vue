<template>
  <div class="coupon-wrap">
    <div class="title">
      <span>我的优惠券</span>
      <span>(2)</span>
    </div>
    <div class="coupon-list">
      <div class="coupon-item" v-for="item in 2" :key="item">
        <div class="left-part">
          <span>￥50</span>
          <span>满199使用</span>
        </div>
        <div class="right-part">
          <div class="dec">
            <p>
              <span>数码通用</span>
              <span>618全场满减</span>
            </p>
            <p>2020.06.18 - 2020.06.23</p>
            <p>仅限数码影音类目通用，领取后5天内有效，逾期失效，建议您领取后尽快使用。</p>
          </div>
          <div class="use-btn">去使用</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.coupon-wrap{
  .title{
    height: 50px;
    line-height: 50px;
    color: #333;
    font-size: 16px;
    font-weight: bold;
  }
  .coupon-list{
    margin-top: 26px;
    .coupon-item{
      margin-bottom: 26px;
      height: 150px;
      display: flex;
      .left-part{
        width: 220px;
        background: #fdf5f4;
        position: relative;
        border-right: 1px dashed #f3d0ce;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:before{
          content:'';
          width: 20px;
          height: 20px;
          background: #fff;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%,-50%);
          border-bottom-left-radius: 100%;
          border-bottom-right-radius: 100%;
        }
        &:after{
          content:'';
          width: 20px;
          height: 20px;
          background: #fff;
          position: absolute;
          transform: translate(50%,50%);
          bottom: 0;
          right: 0;
          border-top-left-radius: 100%;
          border-top-right-radius: 100%;
        }
        span:first-child{
          font-size: 40px;
          color: #333;
          margin-bottom: 10px;
        }
        span:last-child{
          font-size: 20px;
          color: #999;
        }
      }
      .right-part{
        flex: 1;
        background: #fdf5f4;
        display: flex;
        align-items: center;
        padding: 0 36px;
        box-sizing: border-box;
        .dec{
          width: 435px;
          p:first-child{
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            span:first-child{
              border: 1px solid $theme-color;
              color: $theme-color;
              margin-right: 6px;
              padding: 2px 4px;
            }
            span:nth-child(2){
              font-size: 20px;
              color: #333;
            }
          }
          p:nth-child(2){
            color: #999;
            margin-bottom: 20px;
          }
          p:last-child{
            color: #666;
            line-height: 20px;
          }
        }
        .use-btn{
          width: 97px;
          height: 31px;
          border: 1px solid $theme-color;
          color: $theme-color;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 40px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>