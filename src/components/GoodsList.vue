<template>
  <div class="goods-list margin-center">
    <div class="title" v-if="listTitle">{{listTitle}}</div>
    <div class="goods-wrap">
      <div class="good" v-for="(item,index) in list" :key="index">
        <div class="pic-wrap">
          <img :src="item.pic" alt="">
          <div class="price-compare">
            <span>￥{{item.newPrice}}</span>
            <span>￥{{item.oldPrice}}</span>
          </div>
        </div>
        <div class="discount-name" :title="item.name">
          <span class="discount">{{item.discount}}</span>
          <span>{{item.name}}</span>
        </div>
        <div class="new-price">￥{{item.newPrice}}</div>
      </div>
    </div>
    <!-- 分页 -->
    <el-pagination
      v-if="showPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="curPage"
      :page-size="12"
      layout="prev, pager, next, jumper"
      background
      :total="list.length">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        curPage:1
        // goods:[
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话机安卓苹果通用双耳通话机安卓苹果通用双耳通话机安卓苹果通用双耳通话'
        //   },
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
        //   },
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
        //   },
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
        //   },
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
        //   },
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
        //   },
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
        //   },
        //   {
        //     pic:'http://p3.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=263x9999&quality=75',
        //     oldPrice:'399',
        //     newPrice:'299',
        //     discount:'用券减200',
        //     name:'E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话'
        //   },

        // ]
      }
    },
    props:{
      list:{
        type:Array,
        default:[]
      },
      listTitle:{
        type:String,
        default:''
      },
      showPage:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
.goods-list{
  width: $center-width;
  .title{
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .goods-wrap{
    display: flex;
    flex-wrap: wrap;
    .good{
      width: 263px;
      height: 335px;
      margin-bottom: 46px;
      margin-right: calc((1100px - 1052px) / 3);
      box-sizing: border-box;
      cursor: pointer;
      .pic-wrap{
        width: 263px;
        height: 263px;
        background: rgb(249,249,249);
        position: relative;
        margin-bottom: 8px;
        img{
          width: 100%;
          height: 100%;
        }
        .price-compare{
          width: 60px;
          height: 60px;
          background: $theme-color;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 14px;
          span:first-child{
            margin-bottom: 3px;
          }
          span:last-child{
            opacity: 0.7;
            text-decoration: line-through;
          }
        }
      }
      .discount-name{
        padding: 2px 4px;
        box-sizing: border-box;
        line-height: 20px;
        margin-bottom: 5px;
        @include row-ellipsis(2);
        .discount{
          color: $theme-color;
          border: 1px solid $theme-color;
          padding: 1px 2px;
          box-sizing: border-box;
          margin-right: 3px;
        }
      }
      .new-price{
        text-align: center;
        color: $theme-color;
        font-weight: bold;
      }
    }
    .good:nth-child(4n){
      margin-right: 0;
    }
  }
  .el-pagination{
    text-align: center;
    margin-top: 30px;
    /deep/{
      .el-pager{
        li.active{
          background: $theme-color!important;
        }
        li:hover{
          color: $theme-color!important;
        }
      }
    }
  }
}
</style>