<template>
  <div class="wrap">
    <div class="content-center margin-center">
      <div class="bread">
        <span>首页</span>
        <i class="el-icon-arrow-right"></i>
        <span>数码语音</span>
        <i class="el-icon-arrow-right"></i>
        <span>i9S蓝牙5.0真无线 双耳高清通话 苹果安卓通用</span>
      </div>
      <div class="img-params">
        <div class="img-show">
          <div class="big-img" @mouseenter="handleEnter" @mouseleave="handleLeave" @mouseover="enlargeImg" @mousemove="handleMove">
            <img :src="imgList[curIndex]" alt="">
            <span v-show="isHover" class="img-num">{{curIndex+1}}/5</span>
            <i @mouseenter="enterArrow" @mouseleave="leaveArrow" class="el-icon-arrow-left" v-show="isHover&&showArrow&&curIndex!=0" @click="changeImg('prev')"></i>
            <i @mouseenter="enterArrow" @mouseleave="leaveArrow" class="el-icon-arrow-right" v-show="isHover&&showArrow&&curIndex!=4" @click="changeImg('next')"></i>
            <div v-show="isHover&&showMask" class="mask" ref="mask">
              <img src="https://s2.music.126.net/store/web/img/s-mask.png?876f3d2fa90a795e5addb56343cf11ca" alt="">
            </div>
          </div>
          <div class="img-list">
            <img :class="{'img-checked':index==curIndex}" v-for="(item,index) in imgList" :key="index" :src="item" @click="selectImg(index)" alt="">
          </div>
          <div class="img-preview" v-show="isHover&&showMask">
            <img ref="preview" :src="imgList[curIndex]" alt="">
          </div>
        </div>
        <div class="params">
          <div class="main-title">漫步者（EDIFIER）M82 小黄人定制版 无线蓝牙便携音箱</div>
          <div class="sub-title">精致灵动；蓝牙5.0，连接更稳定；IP54级防尘防水；亲肤硅胶外套，触感温润圆滑</div>
          <div class="price">￥249</div>
          <div class="promotion">
            <span>促销：</span>
            <div class="discount">
              <div class="discount-item" v-for="item in 3" :key="item">
                <span class="discount-label">数码通用</span>
                <span>20元</span>
                <span>618全场满减，满99可用</span>
                <span class="pick-btn">领券</span>
                <div v-if="item==1">
                  <span>全部优惠券(3)</span>
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="color">
            <span>颜色：</span>
            <span class="color-label">黄色</span>
          </div>
          <div class="count">
            <span>数量：</span>
            <el-input-number v-model="num" @change="changeCount" :min="1" :max="100"></el-input-number>
          </div>
          <div class="service">
            <span>服务：</span>
            <span class="service-item">不支持7天无理由退货</span>
            <span class="service-item">满199包邮</span>
            <span class="service-item">商家发货</span>
            <span class="service-item">网易自营</span>
          </div>
          <div class="btn-group">
            <span class="buy-btn">立即购买</span>
            <div class="add-cart">
              <icon-svg name="gouwuche" class="gouwuche"></icon-svg>
              <span>加入购物车</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-hot">
        <div class="good-detail">
          <div class="title">商品详情</div>
          <div class="more-dec"></div>
        </div>
        <dit class="hot-good">
          <div class="title">热门商品</div>
          <div class="hot-list">
            <div class="hot-item" v-for="item in 4" :key="item">
              <div class="img-wrap">
                <img src="http://p4.music.126.net/r4pjKbb6sJXs7aX0Xfm3eg==/109951164941875249.jpg?param=244y244" alt="">
                <div class="price-compare">
                  <span>￥59</span>
                  <span>￥79</span>
                </div>
              </div>
              <div class="name-price">
                <div class="name">
                  <span class="discount-label">特价</span>
                  <span>HT-08运动蓝牙耳机 3D立体声 三键线控 安卓苹果通用</span>
                </div>
                <span class="price">￥59</span>
              </div>
            </div>
          </div>
        </dit>
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
        curIndex:0,
        imgList:[
          'http://p4.music.126.net/piXlUAEO7NrFqQXOKBwVxg==/109951163647694938.jpg?param=800y800',
          'http://p4.music.126.net/aKrNu_9Ms0tVz1wmxsyBEA==/109951163647704556.jpg?param=800y800',
          'http://p4.music.126.net/6iCq0x6BzQu60eVXrzcFYA==/109951163647694951.jpg?param=800y800',
          'http://p4.music.126.net/TIQyluYX7pAH_Dm9bey-iA==/109951163647697373.jpg?param=800y800',
          'http://p3.music.126.net/-aNGYUs8v1n63JLFjoHUXw==/109951163647707005.jpg?param=800y800'
        ],
        isHover:false,
        showArrow:false,
        showMask:false,
        num:1
      }
    },
    components:{
      SideTab
    },
    methods:{
      selectImg(i){
        this.curIndex=i
      },
      changeImg(op){
        if(op=='prev'){
          if(this.curIndex==0){
            return
          }
          this.curIndex--
        }else{
          if(this.curIndex==4){
            return
          }
          this.curIndex++
        }
      },
      enlargeImg(){
        return
        console.log('放大图片')
      },
      handleEnter(e){
        console.log(e,'鼠标进入')
        this.isHover=true
        this.showArrow=true
        this.showMask=true
        this.$refs.mask.style.left=e.offsetX<=220?'0px':'220px'
        this.$refs.mask.style.top=e.offsetY<=220?'0px':'220px'
        this.$refs.preview.style.left=this.$refs.mask.style.left=='0px'?'0px':'-530px'
        this.$refs.preview.style.top=this.$refs.mask.style.top=='0px'?'0px':'-530px'
      },
      handleLeave(){
        console.log('鼠标离开')
        this.isHover=false
        this.showArrow=false
        this.showMask=false
        this.$refs.mask.style.left='0px'
        this.$refs.mask.style.top='0px'
      },
      handleMove(e){
        let x=e.pageX-(document.documentElement.clientWidth-1100)/2
        let y=e.pageY-170
        if(x>330){
          this.$refs.mask.style.left='220px'
          this.$refs.preview.style.left='-530px'
        }else if(x>110){
          this.$refs.mask.style.left=x-110+'px'
          this.$refs.preview.style.left=-(x-110)*(530/220)+'px'
        }
        if(y>330){
          this.$refs.mask.style.top='220px'
          this.$refs.preview.style.top='-530px'
        }else if(y>110){
          this.$refs.mask.style.top=y-110+'px'
          this.$refs.preview.style.top=-(y-110)*(530/220)+'px'
        }
      },
      enterArrow(){
        this.showMask=false
      },
      leaveArrow(){
        this.isHover&&(this.showMask=true)
      },
      changeCount(){

      }
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  margin-top: 40px;
  margin-bottom: 80px;
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
      span:first-child,span:nth-of-type(2){
        color: #333;
        cursor: pointer;
      }
      i{
        margin: 0 5px;
      }
    }
    .img-params{
      height: 530px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      .img-show{
        width: 440px;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        .big-img{
          width: 440px;
          height: 440px;
          background: #eee;
          margin-bottom: auto;
          position: relative;
          cursor: move;
          img{
            width: 100%;
            height: 100%;
          }
          .img-num{
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translate(-50%,0);
            background: #ccc;
            padding: 3px 10px;
            border-radius: 4px;
            color: #666;
          }
          i{
            position: absolute;
            top: 50%;
            transform: translate(0,-50%);
            color: #666;
            font-size: 40px;
            cursor: pointer;
            z-index: 9;
          }
          .el-icon-arrow-left{
            left: 10px;
          }
          .el-icon-arrow-right{
            right: 10px;
          }
          .mask{
            width: 220px;
            height: 220px;
            position: absolute;
            top: 0;
            left: 0;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .img-list{
          height: 76px;
          display: flex;
          justify-content: space-between;
          img{
            width: 76px;
            height: 76px;
            cursor: pointer;
            border: 2px solid transparent;
            &:hover{
              border: 2px solid $theme-color;
            }
          }
          .img-checked{
            border: 2px solid $theme-color;
          }
        }
        .img-preview{
          width: 530px;
          height: 530px;
          background: #eee;
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(105%,0);
          z-index: 9;
          overflow: hidden;
          img{
            position: absolute;
            top: 0;
            left: 0;
            width: 1060px;
            height: 1060px;
          }
        }
      }
      .params{
        width: 580px;
        height: 100%;
        .main-title{
          line-height: 34px;
          color: #333;
          font-size: 24px;
          @include row-ellipsis(2);
          margin-bottom: 10px;
        }
        .sub-title{
          color: #999;
          margin-bottom: 30px;
        }
        .price{
          font-size: 30px;
          color: $theme-color;
          margin-bottom: 30px;
        }
        .promotion{
          height: 36px;
          display: flex;
          margin-bottom: 18px;
          & > span{
            color: #999;
            margin-right: 20px;
            padding-top: 9px;
          }
          .discount{
            flex: 1;
            height: 34px;
            overflow: hidden;
            z-index: 2;
            .discount-item{
              height: 100%;
              background: rgb(253,245,244);
              display: flex;
              align-items: center;
              padding: 0 10px;
              font-size: 12px;
              border: 1px solid rgb(248,226,224);
              box-sizing: border-box;
              .discount-label{
                border: 1px solid $theme-color;
                color: $theme-color;
                padding: 2px;
                margin-right: 10px;
              }
              span:nth-of-type(2){
                margin-right: 10px;
              }
              .pick-btn{
                margin-left: 10px;
                margin-right: auto;
                color:rgb(50,138,212);
                cursor: pointer;
              }
            }
          }
          .discount:hover{
            overflow: unset;
            .el-icon-arrow-down{
              transform: rotate(180deg);
            }
          }
        }
        .color{
          display: flex;
          align-items: center;
          margin-bottom: 18px;
          span:first-child{
            color: #999;
            margin-right: 20px;
          }
          .color-label{
            border: 1px solid #ddd;
            width: 66px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333;
          }
        }
        .count{
          @extend .color;
        }
        .service{
          @extend .color;
          margin-bottom: 30px;
          .service-item{
            margin-right: 20px;
            color: #666;
            position: relative;
            padding-left: 8px;
            &:before{
              content:'';
              width: 3px;
              height: 3px;
              background: $theme-color;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(0,-50%);
            }
          }
        }
        .btn-group{
          display: flex;
          align-items: center;
          .buy-btn{
            width: 170px;
            height: 46px;
            border: 2px solid $theme-color;
            color: $theme-color;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 12px;
            font-size: 18px;
            cursor: pointer;
          }
          .add-cart{
            width: 190px;
            height: 46px;
            background: $theme-color;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            cursor: pointer;
            .gouwuche{
              color: #fff;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .detail-hot{
      display: flex;
      justify-content: space-between;
      .good-detail{
        width: 700px;
        min-height: 600px;
        .title{
          height: 30px;
          line-height: 30px;
          padding-bottom: 17px;
          font-size: 22px;
          color: #333;
          border-bottom: 1px solid #333;
          font-weight: bold;
          margin-bottom: 20px;
        }
      }
      .hot-good{
        width: 340px;
        min-height: 600px;
        .title{
          height: 30px;
          line-height: 30px;
          padding-bottom: 17px;
          font-size: 22px;
          color: #333;
          border-bottom: 1px solid #333;
          margin-bottom: 20px;
        }
        .hot-list{
          .hot-item{
            width: 340px;
            height: 100px;
            margin-bottom: 40px;
            display: flex;
            cursor: pointer;
            .img-wrap{
              width: 100px;
              height: 100px;
              position: relative;
              background: #eee;
              margin-right: 12px;
              img{
                width: 100px;
                height: 100px;
              }
              .price-compare{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: $theme-color;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                position: absolute;
                top: 6px;
                left: 6px;
                span:last-child{
                  margin-top: 6px;
                  text-decoration: line-through;
                }
              }
            }
            .name-price{
              padding-top: 8px;
              padding-bottom: 5px;
              display: flex;
              flex-direction: column;
              .name{
                line-height: 25px;
                margin-bottom: auto;
                .discount-label{
                  border: 1px solid $theme-color;
                  color: $theme-color;
                  padding: 0 2px;
                  font-size: 12px;
                  margin-right: 6px;
                }
              }
              .price{
                color: $theme-color;
              }
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