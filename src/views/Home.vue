<template>
  <div class="wrapper" ref="wrap">
    <!-- 广告轮播 -->
    <div class="coursel">
      <swiper class="swiper-wrap" ref="mySwiper" :options="swiperOptions">
        <swiper-slide :style="`backgroundColor:${item.bgColor}`" v-for="(item,index) in slideArr" :key="index">
          <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!-- 热销爆品，IP周边，数码影音 -->
    <div class="tab-row">
      <div class="tab-row-center margin-center">
        <div class="tab-item" v-for="(item,index) in tabRowArr" :key="index">
          <icon-svg class="tab-icon" :name="item.icon"></icon-svg>
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="content-center margin-center">
        <!-- 粉蓝两个广告位 -->
        <div class="two-tabs">
          <div v-for="(item,index) in adRowArr" :key="index">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <!-- 编辑推荐 -->
        <GoodsList :list="goods" listTitle="编辑推荐"></GoodsList>
        <!-- 数字专辑 -->
        <div class="digital-album margin-center">
          <div class="left-part">
            <div>
              <icon-svg name="zhuanjiguangpan"></icon-svg>
              <span>数字专辑</span>
            </div>
            <div>Taylor Swift 新专辑火热售卖中</div>
            <div>立即购买 ></div>
          </div>
          <div class="right-part">
            <img src="https://p1.music.126.net/D1gL45hPNWNxoq1Foanh6Q==/109951164370176967.jpg?param=120y120" alt="">
            <img src="https://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=120y120" alt="">
          </div>
        </div>
        <!-- 热门商品 -->
        <GoodsList :list="goods.slice().concat(goods)" listTitle="热门商品"></GoodsList>
      </div>
      <!-- 右侧导航栏 -->
      <SideTab :isFixed="isFixed"></SideTab>
      <!-- <div v-if="false" class="side-tab" :class="{'tab-fixed':isFixed}">
        <div v-for="(item,index) in sideTabArr" :key="index">
          <icon-svg class="side-tab-icon" v-if="item.icon" :name="item.icon"></icon-svg>
          <span>{{item.text}}</span>
          <span v-if="index==3" class="buy-count">{{toBuyCount>99?'...':toBuyCount}}</span>
        </div>
        <div class="to-top" @click="toTop">
          <i class="el-icon-arrow-up"></i>
          <span>TOP</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import GoodsList from '@components/GoodsList'
import SideTab from '@components/SideTab'
  export default {
    data(){
      return{
        toBuyCount:0,
        swiperOptions: {
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        slideArr:[
          {
            imgUrl:'http://p4.music.126.net/I9QVqsQWvPW44Nrh7wWdMA==/109951165057757581.jpg',
            bgColor:'rgb(197,201,200)'
          },
          {
            imgUrl:'http://p3.music.126.net/yOaG5orp-BGUOFcLVVrqKQ==/109951165053003099.jpg',
            bgColor:'rgb(219,236,218)'
          },
          {
            imgUrl:'http://p3.music.126.net/Vg6W3-xd5RjVyfhz1_mlFA==/109951165038702081.jpg',
            bgColor:'rgb(183,183,183)'
          },
          {
            imgUrl:'http://p4.music.126.net/s7UmQFPY3iUtMMr_VW5H4g==/109951165055526093.jpg',
            bgColor:'rgb(230,199,178)'
          }
        ],
        tabRowArr:[
          {
            icon:'hot-l',
            text:'热销爆品'
          },
          {
            icon:'shoppingbag',
            text:'IP周边'
          },
          {
            icon:'erji',
            text:'数码影音'
          }
        ],
        adRowArr:[
          {
            imgUrl:'http://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg'
          },
          {
            imgUrl:'http://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg'
          }
        ],
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
        sideTabArr:[
          {
            icon:'',
            text:'查看营业执照'
          },
          {
            icon:'',
            text:'100%正品'
          },
          {
            icon:'',
            text:'七天无理由退货'
          },
          {
            icon:'gouwuche',
            text:'购物车'
          },
          {
            icon:'erji',
            text:'客服'
          },
        ],
        isFixed:false
      }
    },
    components:{
      GoodsList,
      SideTab
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
      this.swiper.allowTouchMove= false
      this.swiper.autoplay.start()
      window.addEventListener("scroll",this.handleScroll); 
    },
    destroyed(){
      document.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll(e){
        console.log(document.documentElement.scrollTop,'滚动')
        if(document.documentElement.scrollTop>=300){
          console.log('大于或者等于300')
          this.isFixed=true
        }else{
          console.log('小于300')
          this.isFixed=false
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
.wrapper{
  .coursel{
    width: 100%;
    height: 480px;
    position: relative;
    .swiper-wrap{
      height: 100%;
      .swiper-slide{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          cursor: pointer;
        }
      }
      .swiper-pagination{
        /deep/{
          .swiper-pagination-bullet{
            background: #fff;
            opacity: 1;
          }
          .swiper-pagination-bullet-active{
            background: $theme-color!important;
            outline: none;
          }
        }
      }
    }
    .swiper-button-prev,.swiper-button-next{
      width: 37px;
      height: 63px;
      background: #eee;
      color: #fff;
      &:focus{
        outline: none;
      }
    }
    .swiper-button-prev{
      left: 20px;
    }
    .swiper-button-next{
      right: 20px;
    }
  }
  .tab-row{
    height: 81px;
    border-top: 1px solid rgba(0,0,0,.1);
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin-bottom: 40px;
    .tab-row-center{
      @include flex-align-center;
      height: 100%;
      width: $center-width;
      .tab-item{
        flex: 1;
        height: 60%;
        @include flex-align-center;
        display: flex;
        justify-content: center;
        cursor: pointer;
        .tab-icon{
          font-size: 40px;
          margin-right: 20px;
        }
        span{
          font-weight: 600;
          font-size: 14px;
        }
      }
      .tab-item+.tab-item{
        border-left: 1px solid rgba(0,0,0,.1);
      }
    }
  }
  .main-content{
    position: relative;
    min-width: 1190px;
    .content-center{
      width: $center-width;
      .two-tabs{
        margin-bottom: 56px;
        display: flex;
        justify-content: space-between;
        & > div{
          width: 542px;
          height: 300px;
          img{
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            cursor: pointer;
          }
        }
      }
      .digital-album{
        width: $center-width;
        height: 180px;
        background: #f9f9f9;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 60px;
        box-sizing: border-box;
        margin-bottom: 56px;
        cursor: pointer;
        .left-part{
          & > div:first-child{
            font-size: 32px;
            font-weight: bold;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            span{
              margin-left: 10px;
            }
          }
          & > div:nth-child(2){
            font-size: 16px;
            color: rgba(0,0,0,.7);
            margin-bottom: 30px;
          }
          & > div:last-child{
            font-size: 24px;
            font-weight: bold;
          }
        }
        .right-part{
          position: relative;
          flex: 1;
          height: 100%;
          img{
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(-50%,-50%);
          }
          img:first-child{
            width: 100px;
            height: 100px;
            right: 90px;
          }
        }
      }
    }
  }
}
</style>