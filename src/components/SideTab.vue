<template>
  <!-- 右侧导航栏 -->
  <div class="side-tab" :class="{'tab-fixed':isFixed}">
    <div v-for="(item,index) in sideTabArr" :key="index">
      <icon-svg class="side-tab-icon" v-if="item.icon" :name="item.icon"></icon-svg>
      <span>{{item.text}}</span>
      <span v-if="index==3" class="buy-count">{{toBuyCount>99?'...':toBuyCount}}</span>
    </div>
    <div class="to-top" @click="toTop">
      <i class="el-icon-arrow-up"></i>
      <span>TOP</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        toBuyCount:0,
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
        // isFixed:false
      }
    },
    props:{
      isFixed:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      toTop(){
        document.documentElement.scrollTop=0
      }
    }
  }
</script>

<style lang="scss" scoped>
.side-tab{
  position: absolute;
  top: 0;
  right: 150px;
  width: 62px;
  display: flex;
  flex-direction: column;
  z-index: 99;
  border: 1px solid rgba(0,0,0,.4);
  color: #666;
  & > div:not(:last-child){
    width: 60px;
    height: 60px;
    border: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    position: relative;
    .side-tab-icon{
      font-size: 20px;
      color: #333;
    }
    .buy-count{
      position: absolute;
      top: 0;
      right: 0;
      background: $theme-color;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: #fff;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & > div:last-child{
    height: 35px;
    background: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span:nth-child(2){
      font-size: 12px;
    }
  }
}
.tab-fixed{
  position: fixed;
  top: 40%;
}
@media screen and (max-width:1582px) {
  .side-tab{
    right: unset!important;
    left: 50%!important;
    margin-left: 570px!important;
  }
  .tab-fixed{
    right: unset!important;
    left: 50%!important;
    margin-left: 570px!important;
  }
}
</style>