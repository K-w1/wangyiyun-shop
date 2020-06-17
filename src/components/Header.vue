<template>
  <!-- 头部 -->
  <div class="header">
    <div class="header-center margin-center">
      <span class="logo"></span>
      <div class="search-wrap">
        <el-input @focus="openHotHistory" @blur="closeHotHistory" class="search-box" placeholder="请输入内容" v-model="searchText" prefix-icon="el-icon-search"></el-input>
        <div class="hot-history" v-show="showHotHistory">
          <span class="search-title">热门搜索</span>
          <span v-for="(item,index) in hotSearches" :key="'hot'+index">{{item}}</span>
          <span class="search-title">最近搜索</span>
          <div class="history-item" v-for="(item,index) in historySearches" :key="'history'+index">
            <span>{{item}}</span>
            <span class="close-icon">x</span>
          </div>
        </div>
      </div>
      <div class="shopping-cart">
        <icon-svg name="gouwuche" class="gouwuche"></icon-svg>
        <span class="tobuy-count">{{toBuyCount>99?'...':toBuyCount}}</span>
      </div>
      <el-button v-if="true">注册 / 登录</el-button>
      <el-dropdown v-else class="after-login">
        <div class="el-dropdown-link">
          <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3873278591,2846033136&fm=26&gp=0.jpg" alt="" class="avatar">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">我的订单</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">我的优惠券</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">我的收获地址</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">回到首页</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check" divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        searchText:'',
        toBuyCount:0,
        hotSearches:['唐映枫','伞','享乐','蓝牙','耳机'],
        historySearches:['帽子','音箱'],
        showHotHistory:false,
      }
    },
    methods:{
      openHotHistory(){
        this.showHotHistory=true
      },
      closeHotHistory(){  
        this.showHotHistory=false
      },
    }
  }
</script>

<style lang="scss" scoped>
.header{
  height: 73px;
  border-bottom: 2px solid #eee;
  .header-center{
    width: $center-width;
    height: 100%;
    @include flex-align-center;
    .logo{
      width: 290px;
      height: 70px;
      background: url('../assets/img/home_logo.png');
      margin-right: auto;
      cursor: pointer;
    }
    .search-wrap{
      position: relative;
      .search-box{
        width: 300px;
        height: 38px;
        margin-right: 42px;
        /deep/ .el-input__inner{
          border-radius: 20px;
          &:focus{
            border-color: #DCDFE6;
          }
        }
      }
      .hot-history{
        position: absolute;
        top: 48px;
        width: 300px;
        box-shadow: 0 0 5px #aaa;
        display: flex;
        flex-direction: column;
        z-index: 3;
        background: #fff;
        span{
          line-height: 36px;
          color: #999;
          padding: 0 20px;
        }
        .search-title{
          color: #333;
          font-size: 12px;
          border-bottom: 1px solid #ddd;
          font-weight: 600;
        }
        span:not(.search-title){
          cursor: pointer;
          &:hover{
            background: #eee;
          }
        }
        .history-item{
          width: 100%;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          &:hover{
            background: #eee;
          }
        }
      }
    }
    .shopping-cart{
      margin-right: 34px;
      position: relative;
      .gouwuche{
        font-size: 36px;
        cursor: pointer;
      }
      .tobuy-count{
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        background: $theme-color;
        border-radius: 50%;
        font-size: 11px;
        @include flex-all-center;
        color: #fff;
        transform: translate(50%,-50%);
      }
    }
    .after-login{
      .el-dropdown-link{
        display: flex;
        align-items: center;
        font-size: 18px;
        img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 6px;
        }
        &:hover{
          .el-icon-arrow-down{
            transform: rotate(180deg);
          }
        }
      }
    }
    .el-button{
      background: $theme-color;
      color: #fff;
      &:active{
        border-color: $theme-color;
      }
    }
  }
}
</style>