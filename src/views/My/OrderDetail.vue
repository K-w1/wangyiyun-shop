<template>
  <div class="wrap">
    <div class="content-center margin-center">
      <div class="bread">
        <span>首页</span>
        <i class="el-icon-arrow-right"></i>
        <span>我的订单</span>
        <i class="el-icon-arrow-right"></i>
        <span>订单详情</span>
      </div>
      <div class="main">
        <div class="addition-info">
          <div>
            <span>交易关闭</span>
          </div>
          <div>
            <span>订单编号：</span>
            <span>202006181231</span>
          </div>
          <div>
            <span>失效时间：</span>
            <span>2020-06-18 16:31</span>
          </div>
          <div>
            <span>收获地址：</span>
            <span>庞先生</span>
            <span>18888888888</span>
            <span>广东省珠海市香洲区唐家湾镇清华科技园A栋</span>
          </div>
        </div>
        <div class="good-info">
          <div class="table-head">
            <span>商品信息</span>
            <span>金额</span>
            <span>数量</span>
          </div>
          <div class="good-row">
            <div class="img-name">
              <img src="http://p3.music.126.net/ayGzf1iheF9WYQIDpiUmoA==/109951164170724594.jpg?param=80y80" alt="">
              <span>i12触控真无线蓝牙耳机 蓝牙5.0苹果安卓通用</span>
            </div>
            <span>￥129</span>
            <span>1</span>
          </div>
          <div class="total-info">
            <div>
              <span>商品合计：</span>
              <span>￥129</span>
            </div>
            <div>
              <span>运费：</span>
              <span>￥10</span>
            </div>
            <div>
              <span>总计：</span>
              <span>￥139</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧导航栏 -->
    <SideTab class="side-tab"></SideTab>
  </div>
</template>

<script>
import SideTab from '@components/SideTab'

  export default {
    data(){
      return{

      }
    },
    components:{
      SideTab
    },
    created(){

    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  margin-top: 42px;
  color: #333;
  margin-bottom: 130px;
  .content-center{
    width: $center-width;
    .bread{
      padding-bottom: 20px;
      font-size: 18px;
      border-bottom: 1px solid #333;
      margin-bottom: 20px;
      span:first-child{
        font-weight: 600;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
      i{
        margin: 0 6px;
        font-weight: 600;
        color: #999;
      }
      span:nth-of-type(2){
        cursor: pointer;
      }
      span:last-child{
        color: #999;
        font-weight: 500;
      }
    }
    .main{
      .addition-info{
        height: 224px;
        border: 1px solid #eee;
        padding: 30px 25px 0;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        & > div:first-child{
          font-size: 22px;
          color: #666;
          margin-bottom: 28px;
        }
        & > div:nth-child(2){
          margin-bottom: 20px;
        }
        & > div:nth-child(3){
          margin-bottom: auto;
        }
        & > div:last-child{
          height: 75px;
          display: flex;
          align-items: center;
          border-top: 1px solid #eee;
          span:not(:first-child){
            margin-right: 15px;
          }
        }
      }
      .good-info{
        border: 1px solid #eee;
        .table-head{
          background: #eee;
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
          box-sizing: border-box;
          display: flex;
          color: #999;
          span:first-child{
            width: 600px;
          }
          span:not(:first-child){
            flex: 1;
            display: flex;
            justify-content: center;
          }
        }
        .good-row{
          height: 140px;
          width: calc(100% - 40px);
          border-bottom: 1px solid #eee;
          margin: 0 auto;
          display: flex;
          align-items: center;
          .img-name{
            width: 600px;
            display: flex;
            img{
              background: #eee;
              width: 80px;
              height: 80px;
              margin-right: 20px;
            }
            span{
              align-self: start;
              padding-top: 20px;
              box-sizing: border-box;
            }
          }
          & > span{
            flex: 1;
            display: flex;
            justify-content: center;
          }
        }
        .total-info{
          text-align: right;
          padding: 32px 60px 32px 0;
          box-sizing: border-box;
          font-size: 16px;
          div{
            span:first-child{
              margin-right: 60px;
            }
          }
          div:first-child{
            margin-bottom: 20px;
          }
          div:nth-child(2){
            margin-bottom: 40px;
          }
          div:last-child{
            span:last-child{
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .side-tab{
    position: fixed;
    top: 300px;
  }
}
</style>