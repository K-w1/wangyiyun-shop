<template>
  <div class="wrap">
    <div class="content-center margin-center">
      <div class="bread">
        <span>首页</span>
        <i class="el-icon-arrow-right"></i>
        <span>{{asideArr[curIndex].text}}</span>
      </div>
      <div class="main">
        <div class="aside">
          <span @click="selectTab(index,item)" :class="{'cur-tab':index==curIndex}" v-for="(item,index) in asideArr" :key="index">{{item.text}}</span>
        </div>
        <div class="right-part">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        curIndex:0,
        asideArr:[
          {
            text:'我的订单',
            path:'/my/order'
          },
          {
            text:'我的优惠券',
            path:'/my/coupon'
          },
          {
            text:'我的收获地址',
            path:'/my/address'
          },
          {
            text:'在线客服',
            path:'/customservice'
          },
        ]
      }
    },
    watch:{
      '$route'(val){
        console.log(val,'路由变化')
        this.curIndex=this.asideArr.findIndex(item=>{
          return item.path==val.path
        })
      }
    },
    created(){
      this.curIndex=this.asideArr.findIndex(item=>{
        return item.path==this.$route.path
      })
    },
    methods:{
      selectTab(i,item){
        this.curIndex=i
        this.$router.push(item.path)
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  margin-top: 42px;
  color: #333;
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
      span:last-child{
        color: #999;
        font-weight: 500;
      }
    }
    .main{
      min-height: 550px;
      display: flex;
      justify-content: space-between;
      .aside{
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          padding-left: 25px;
          box-sizing: border-box;
          font-size: 16px;
          color: #888;
          cursor: pointer;
          &:hover{
            color: #333;
            font-weight: bold;
          }
        }
        .cur-tab{
          color: #333;
          font-weight: bold;
          background: rgb(245,245,245);
          position: relative;
          &:before{
            content:'';
            width: 3px;
            height: 24px;
            background: $theme-color;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0,-50%);
          }
        }
      }
      .right-part{
        width: 870px;
        min-height: 300px;
      }
    }
  }
}
</style>