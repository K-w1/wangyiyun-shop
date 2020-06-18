<template>
  <div class="order-wrap">
    <div class="status-tab">
      <div @click="selectStatu(index)" :class="{'status-checked':curIndex==index}" v-for="(item,index) in statusArr" :key="index">
        <span>{{item.text}}</span>
        <span>(0)</span>
      </div>
    </div>
    <div class="order-list">
      <div class="order-item" v-for="item in 3" :key="item">
        <div class="order-id">
          <span>订单编号:</span>
          <span>20200618123456465</span>
        </div>
        <div class="more-content">
          <div class="good-info">
            <img src="http://p3.music.126.net/ayGzf1iheF9WYQIDpiUmoA==/109951164170724594.jpg?param=80y80" alt="">
            <div class="name-style">
              <span>HT-08运动蓝牙耳机 3D立体声 三键线控 安卓苹果通用</span>
              <span>红色</span>
            </div>
            <div class="price-num">
              <span>￥129</span>
              <span>x 1</span>
            </div>
          </div>
          <div class="price">
            <span>￥119</span>
            <span>(含运费: ￥10)</span>
          </div>
          <div class="see-detail">
            <span>订单详情</span>
          </div>
          <div class="operation">
            <span>立即支付</span>
            <span>取消订单</span>
          </div>
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
        statusArr:[
          {
            text:'待支付',
          },
          {
            text:'待发货',
          },
          {
            text:'待收货',
          },
          {
            text:'全部',
          }
        ],
        tableData: [
          {
            pic: 'http://p3.music.126.net/ayGzf1iheF9WYQIDpiUmoA==/109951164170724594.jpg?param=80y80',
            name: 'HT-08运动蓝牙耳机 3D立体声 三键线控 安卓苹果通用',
            style:'白色',
            orderId:'20200618150546545',
            createTime:'2020-06-18 15:09:24',
            price:'50',
            status:'未付款'
          }, 
          {
            pic: 'http://p3.music.126.net/ayGzf1iheF9WYQIDpiUmoA==/109951164170724594.jpg?param=80y80',
            name: 'HT-08运动蓝牙耳机 3D立体声 三键线控 安卓苹果通用',
            style:'白色',
            orderId:'20200618150546545',
            createTime:'2020-06-18 15:09:24',
            price:'50',
            status:'未付款'
          }, 
          {
            pic: 'http://p3.music.126.net/ayGzf1iheF9WYQIDpiUmoA==/109951164170724594.jpg?param=80y80',
            name: 'HT-08运动蓝牙耳机 3D立体声 三键线控 安卓苹果通用',
            style:'白色',
            orderId:'20200618150546545',
            createTime:'2020-06-18 15:09:24',
            price:'50',
            status:'未付款'
          }, 
          
        ]
      }
    },
    methods:{
      selectStatu(i){
        this.curIndex=i
      }
    }
  }
</script>

<style lang="scss" scoped>
.order-wrap{
  .status-tab{
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #888;
    & > div{
      margin-right: 50px;
      position: relative;
      cursor: pointer;
    }
    & > div:not(:last-child):after{
      content:'';
      width: 3px;
      height: 3px;
      background: #ccc;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(26px,-50%);
    }
    .status-checked{
      color: #333;
    }
  }
  .order-list{
    margin-top: 10px;
    .order-item{
      border: 1px solid #eee;
      margin-bottom: 20px;
      .order-id{
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        box-sizing: border-box;
        color: #999;
        background: rgb(245,245,245);
      }
      .more-content{
        height: 122px;
        display: flex;
        .good-info{
          display: flex;
          align-items: center;
          width: 500px;
          border-right: 1px solid #eee;
          padding-left: 20px;
          box-sizing: border-box;
          img{
            width: 80px;
            height: 80px;
            margin-right: 20px;
            background: #eee;
          }
          .name-style{
            width: 240px;
            display: flex;
            flex-direction: column;
            margin-right: 40px;
            span:first-child{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 12px;
            }
            span:last-child{
              color: #999;
            }
          }
          .price-num{
            @extend .name-style;
            width: unset;
            flex: 1;
            align-items: center;
          }
        }
        .price{
          flex: 1;
          border-right: 1px solid #eee;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          span:nth-child(2){
            color: #999;
          }
          span+span{
            margin-top: 12px;
          }
        }
        .see-detail{
          flex: 1;
          border-right: 1px solid #eee;
          @extend .price;
          span{
            cursor: pointer;
          }
        }
        .operation{
          flex: 1;
          border-right: 1px solid #eee;
          @extend .price;
          span{
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>