<template>
  <div class="wrap">
    <div class="content-center margin-center">
      <!-- 面包屑 -->
      <div class="bread">
        <span>首页</span>
        <i class="el-icon-arrow-right"></i>
        <span>数码影音</span>
      </div>
      <!-- 筛选选项卡 -->
      <div class="filter-card">
        <div class="brand-row">
          <span>品牌：</span>
          <div class="options" :class="{'fold-style':isFold}">
            <span v-for="(item,index) in brands" :key="index">{{item}}</span>
          </div>
          <div @click="isFold=!isFold">
            <span>{{isFold?'更多':'收起'}}</span>
            <i class="el-icon-arrow-up" :class="{toggle:isFold}"></i>
          </div>
        </div>
        <div class="category-row">
          <span>分类：</span>
          <div class="options">
            <span v-for="(item,index) in categories" :key="index">{{item}}</span>
          </div>
        </div>
        <div class="price-row">
          <span>价格：</span>
          <div class="options">
            <span v-for="(item,index) in prices" :key="index">{{item}}</span>
          </div>
          <div class="customize">
            <span>自定义</span>
            <el-input placeholder="￥"></el-input>
            <span>—</span>
            <el-input placeholder="￥"></el-input>
            <span>确定</span>
          </div>
        </div>
      </div>
      <!-- 排序tab -->
      <div class="sort-tab">
        <span class="selected">综合</span>
        <span>·</span>
        <span>价格低到高</span>
        <span>·</span>
        <span>价格高到低</span>
      </div>
      <!-- 广告图 -->
      <div class="img-wrap">
        <img src="http://p4.music.126.net/IpAYL-UwrQpWDMLMX6cUog==/109951164430758455.jpg" alt="">
      </div>
      <!-- 商品列表 -->
      <GoodsList :list="goods" :showPage="true"></GoodsList>
    </div>
    <!-- 右侧导航栏 -->
    <SideTab class="side-tab"></SideTab>
  </div>
</template>

<script>
import SideTab from '@components/SideTab'
import GoodsList from '@components/GoodsList'
  export default {
    data(){
      return{
        brands:[
          'JVC','森海塞尔','JBL','SONY/索尼','其他','魔声','魅族','威索尼克','先锋',
          '铁三角','网易云音乐','漫步者','beats','马歇尔','网易','1MORE','AKG','乌龟海岸',
          '松下','拜亚动力','爱国者','in-vouce','BOSE','达音科','击音','恒天宏业','HappyPlugs'
        ],
        categories:[
          '耳机耳麦','音箱音响','播放器','数码配件','智能设备'
        ],
        prices:[
          '0~500',
          '501~1000',
          '1000~3000',
          '3000以上'
        ],
        isFold:false,
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
      SideTab,
      GoodsList
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  margin-top: 40px;
  .content-center{
    width: $center-width;
    .bread{
      padding-bottom: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #333;
      color: #999;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 20px;
      span:first-child{
        color: #333;
        cursor: pointer;
      }
      i{
        margin: 0 5px;
      }
    }
    .filter-card{
      border: 1px solid #ccc;
      margin-bottom: 30px;
      & > div{
        display: flex;
        align-items: center;
        min-height: 46px;
        padding: 15px 30px;
        border-top: 1px solid #ccc;
        & > span:first-child{
          width: 84px;
          color: #999;
          font-weight: bold;
        }
      }
      .brand-row{
        border-top: none;
        align-items: start;
        & > div:nth-of-type(2){
          width: 84px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: #333;
          cursor: pointer;
          span{
            margin-right: 4px;
          }
          .toggle{
            transform: rotate(180deg);
          }
        }
        .options{
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          span{
            margin-right: 30px;
            margin-bottom: 30px;
            cursor: pointer;
            &:hover{
              text-decoration: underline;
            }
          }
        }
        .fold-style{
          height: 70px;
          overflow: hidden;
        }
      }
      
      .category-row{
        .options{
          display: flex;
          align-items: center;
          span{
            margin-right: 30px;
            cursor: pointer;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
      .price-row{
        .options{
          display: flex;
          align-items: center;
          margin-right: 30px;
          span{
            margin-right: 30px;
            cursor: pointer;
            &:hover{
              text-decoration: underline;
            }
          }
        }
        .customize{
          display: flex;
          align-items: center;
          span:first-child{
            margin-right: 10px;
          }
          span:nth-of-type(2){
            margin: 0 5px;
            color: #ccc;
          }
          .el-input{
            width: 70px;
            /deep/{
              .el-input__inner{
                padding: 0 2px;
                height: 24px;
                line-height: 24px;
                border-radius: 0;
              }
            }
          }
          .el-input:last-of-type{
            margin-right: 14px;
          }
          span:last-of-type{
            width: 60px;
            height: 26px;
            background: #bbb;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
      }
    }
    .sort-tab{
      color: #999;
      font-size: 16px;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      span:nth-child(even){
        margin: 0 12px;
        font-size: 26px;
        font-weight: 500;
      }
      span:nth-child(odd):hover{
        cursor: pointer;
        color: #000;
      }
      .selected{
        color: #000;
      }
    }
    .img-wrap{
      width: 100%;
      height: 320px;
      margin-top: 40px;
      margin-bottom: 50px;
      img{
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
  }
  .side-tab{
    position: fixed;
    top: 300px;
  }
}
</style>