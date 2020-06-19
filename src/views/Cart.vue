<template>
  <div class="cart-wrap">
    <div class="content-center margin-center">
      <div class="title">购物车</div>
      <div class="good-list">
        <div class="label-row">
          <el-checkbox>全选</el-checkbox>
          <span>商品</span>
          <span>金额</span>
          <span>数量</span>
          <span>小计</span>
          <span>操作</span>
        </div>
        <div class="good-table">
          <div class="thead">
            <span>全部商品(1)</span>
            <span>满减</span>
            <div>全场满<span>￥119</span>免运费（还差￥60）</div>
            <span>去凑单></span>
          </div>
          <div class="good-item" v-for="item in 2" :key="item">
            <div class="check-img">
              <el-checkbox></el-checkbox>
              <img src="http://p3.music.126.net/ayGzf1iheF9WYQIDpiUmoA==/109951164170724594.jpg?param=80y80" alt="">
            </div>
            <div class="name-style">
              <span>HT-08运动蓝牙耳机 3D立体声 三键线控 安卓苹果通用</span>
              <span>白色</span>
            </div>
            <span class="one-price">￥59</span>
            <el-input-number v-model="goodCount" @change="changeNum" :min="1" :max="10" label="描述文字"></el-input-number>
            <span class="small-price">￥59</span>
            <span class="del">x</span>
          </div>
          <div class="final-count">
            <el-checkbox>全选</el-checkbox>
            <div>已选择<span>1</span>件商品</div>
            <span>差60元免运费</span>
            <span>|</span>
            <span>合计：</span>
            <span>￥59</span>
            <span>结算</span>
          </div>
        </div>
      </div>
      <div class="hot-good">
        <div class="title">热门推荐</div>
        <GoodsList :list="goods"></GoodsList>
      </div>
    </div>
     <!-- 右侧导航栏 -->
    <SideTab class="side-tab"></SideTab>
  </div>
</template>

<script>
import GoodsList from '@components/GoodsList'
import SideTab from '@components/SideTab'

  export default {
    data(){
      return{
        goodCount:0,
        goods:[
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话机安卓苹果通用双耳通话机安卓苹果通用双耳通话机安卓苹果通用双耳通话'
          },
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
          },
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
          },
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
          },
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
          },
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
          },
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
          },
          {
            pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
            oldPrice:'399',
            newPrice:'299',
            discount:'用券减200',
            name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
          },
        ],
      }
    },
    components:{
      GoodsList,
      SideTab
    },
    methods:{
      changeNum(){

      }
    }
  }
</script>

<style lang="scss" scoped>
.cart-wrap{
  color: #333;
  margin-top: 30px;
  .content-center{
    width: $center-width;
    .title{
      padding-bottom: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #000;
      font-size: 18px;
      font-weight: bold;
    }
    .good-list{
      margin-bottom: 50px;
      .label-row{
        height: 66px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .el-checkbox{
          flex: 1;
        }
        span:nth-of-type(1){
          flex: 4;
        }
        span:nth-of-type(2){
          flex: 1;
          text-align: center;
        }
        span:nth-of-type(3){
          flex: 1.5;
          text-align: center;
        }
        span:nth-of-type(4){
          flex: 1;
          text-align: center;
        }
        span:nth-of-type(5){
          flex: 1;
          text-align: center;
        }
      }
      .good-table{
        border: 1px solid #eee;
        .thead{
          height: 40px;
          background: #eee;
          padding-left: 46px;
          padding-right: 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          & > span:first-child{
            color: #999;
            margin-right: auto;
          }
          & > span:nth-child(2){
            padding: 1px 2px;
            border: 1px solid $theme-color;
            color: $theme-color;
            margin-right: 20px;
          }
          & > div{
            span{
              color: $theme-color;
            }
          }
        }
        .good-item{
          display: flex;
          align-items: center;
          height: 117px;
          padding: 0 20px;
          box-sizing: border-box;
          .check-img{
            flex: 1;
            display: flex;
            align-items: center;
            img{
              width: 80px;
              height: 80px;
              background: #eee;
              margin-left: 10px;
            }
          }
          .name-style{
            flex: 4;
          }
          .one-price{
            flex: 1;
            text-align: center;
          }
          .el-input-number{
            flex: 1.5;
            text-align: center;
          }
          .small-price{
            flex: 1;
            text-align: center;
          }
          .del{
            flex: 1;
            text-align: center;
          }
        }
        .good-item+.good-item{
          border-top: 1px solid #eee;
        }
        .final-count{
          border-top: 1px solid #eee;
          height: 53px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          box-sizing: border-box;
          .el-checkbox{
            margin-right: 60px;
          }
          & > div{
            margin-right: auto;
            color: #999;
            span{
              color: $theme-color;
            }
          }
          & > span:nth-of-type(1){
            color: #999;
          }
          & > span:nth-of-type(2){
            color: #999;
            margin: 0 8px;
          }
          & > span:nth-of-type(4){
            color: $theme-color;
            font-size: 20px;
          }
          & > span:nth-of-type(5){
            width: 160px;
            height: 100%;
            background: $theme-color;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            margin-left: 30px;
            cursor: pointer;
          }
        }
      }
    }
    .hot-good{
      margin-top: 100px;
      .title{
        padding-bottom: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #000;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }
  }
  .side-tab{
    position: fixed;
    top: 300px;
  }
}
</style>