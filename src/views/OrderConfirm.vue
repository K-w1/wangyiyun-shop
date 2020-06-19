<template>
  <div class="confirm-wrap">
    <div class="content-center margin-center">
      <div class="title">订单确认</div>
      <div class="address-part">
        <div class="title">收货信息</div>
        <div class="content">
          <div class="default-address">
              <span>默认地址</span>
              <span @click="showDialog=true">修改</span>
          </div>
          <div class="bottom-part">
            <div class="bottom-left">
              <div>
                <span>收货人：</span>
                <span>张三</span>
                <span>联系方式：</span>
                <span>1888888888</span>
              </div>
              <div>
                <span>收货地址：</span>
                <span>广东省珠海市香洲区唐家湾镇清华科技园A888</span>
              </div>
            </div>
            <div class="bottom-right">
              <span @click="showChangeAddress=true">更换收获地址</span>
              <span @click="showDialog=true">新建地址</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 新增地址对话框 -->
      <el-dialog title="填写收货地址" :visible.sync="showDialog">
        <AddressForm :showCancelBtn="true"></AddressForm>
      </el-dialog>
      <!-- 更换收货地址对话框 -->
      <el-dialog title="更换收货地址" :visible.sync="showChangeAddress">
        <div class="address-list">
          <div @click="checkAddress(item)" class="address-row" :class="{'address-checked':checkIndex==item}" v-for="item in 4" :key="item">
            <p>
              <span>收货人：</span>
              <span>张三</span>
            </p>
            <p>
              <span>联系方式：</span>
              <span>18888888888</span>
            </p>
            <p>
              <span>收货地址：</span>
              <span>广东省珠海市香洲区唐家湾镇清华科技园A888</span>
              <span class="default-label">默认地址</span>
            </p>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="showChangeAddress = false">取 消</el-button>
          <el-button type="primary" @click="showChangeAddress = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 商品信息 -->
      <div class="good-info">
        <div class="info-title">
          <span>商品信息</span>
          <span>金额</span>
          <span>数量</span>
          <span>小计</span>
        </div>
        <div class="good-row">
          <div>
            <img src="http://p3.music.126.net/ayGzf1iheF9WYQIDpiUmoA==/109951164170724594.jpg?param=80y80" alt="">
            <div class="name-style">
              <span>HT-08运动蓝牙耳机 3D立体声 三键线控 安卓苹果通用</span>
              <span>白色</span>
            </div>
          </div>
          <span class="price">￥59</span>
          <span class="num">1</span>
          <span>￥59</span>
        </div>
        <div class="price-part">
          <div class="price-left">
            <span>全部优惠券(2)</span>
            <span>无可用优惠券</span>
            <el-checkbox>我同意协议</el-checkbox>
          </div>
          <div class="price-right">
            <div>
              <span>商品合计：</span>
              <span>￥59</span>
            </div>
            <div>
              <span>实付金额差￥60免运费</span>
              <span>运费：</span>
              <span>￥10</span>
            </div>
            <div>
              <span>实付金额：</span>
              <span>￥69</span>
            </div>
            <div>提交订单</div>
            <div>
              <span>张三</span>
              <span>13888888888</span>
              <span>广东省珠海市香洲区</span>
              <span>唐家湾镇清华科技园A888</span>
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
import AddressForm from '@components/AddressForm.vue'
import SideTab from '@components/SideTab'


  export default {
    data(){
      return{
        showDialog:false,
        showChangeAddress:false,
        checkIndex:1
      }
    },
    components:{
      AddressForm,
      SideTab
    },
    methods:{
      checkAddress(i){
        this.checkIndex=i
      }
    }
  }
</script>

<style lang="scss" scoped>
.confirm-wrap{
  color: #333;
  .content-center{
    width: $center-width;
    & > .title{
      padding: 30px 0 20px;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid #000;
      margin-bottom: 20px;
    }
    .address-part{
      border: 1px solid #ddd;
      .title{
        background: #eee;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        box-sizing: border-box;
        color: #999;
      }
      .content{
        height: 153px;
        padding-left: 20px;
        box-sizing: border-box;
        .default-address{
          height: 60px;
          display: flex;
          align-items: center;
          span:first-child{
            color: #999;
            margin-right: 20px;
          }
          span:nth-child(2){
            border: 1px solid #eee;
            width: 80px;
            height: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
        .bottom-part{
          display: flex;
          align-items: center;
          height: 66px;
          .bottom-left{
            width: 860px;
            height: 100%;
            border-right: 1px solid #eee;
            display: flex;
            flex-direction: column;
            justify-content: center;
            & > div:first-child{
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              span:nth-child(odd){
                color: #999;
              }
              span:nth-child(2){
                margin-right: 30px;
              }
            }
            & > div:nth-child(2){
              span:first-child{
                color: #999;
              }
            }
          }
          .bottom-right{
            height: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            span:first-child{
              color: #0c73c2;
              cursor: pointer;
            }
            span:nth-child(2){
              width: 102px;
              height: 32px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid #ccc;
              cursor: pointer;
            }
          }
        }
      }
    }
    .el-dialog{
      .address-list{
        height: 406px;
        overflow: auto;
        .address-row{
          width: 98%;
          height: 120px;
          border: 1px solid #eee;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          box-sizing: border-box;
          cursor: pointer;
          p{
            span:first-child{
              color: #999;
            }
          }
          p:nth-child(3){
            display: flex;
            align-items: center;
            .default-label{
              color: $theme-color;
              border: 1px solid $theme-color;
              margin-left: auto;
              padding: 1px 2px;
            }
          }
        }
        .address-checked{
          border: 2px solid $theme-color;
          box-sizing: border-box;
        }
        .address-row+.address-row{
          margin-top: 20px;
        }
      }
    }
    .good-info{
      margin-top: 50px;
      border: 1px solid #eee;
      .info-title{
        background: #eee;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        color: #999;
        display: flex;
        align-items: center;
        span:first-child{
          width: 560px;;
        }
        span:nth-child(2){
          flex: 1.5;
        }
        span:nth-child(3){
          flex: 1.5;
        }
        span:nth-child(4){
          flex: 1.5;
        }
      }
      .good-row{
        display: flex;
        align-items: center;
        width: calc(100% - 40px);
        margin: 0 auto;
        height: 115px;
        border-bottom: 1px solid #eee;
        & > div:first-child{
          width: 560px;
          display: flex;
          img{
            width: 80px;
            height: 80px;
            margin-right: 20px;
          }
          .name-style{
            display: flex;
            flex-direction: column;
            justify-content: center;
            span:first-child{
              margin-bottom: 10px;
            }
            span:nth-child(2){
              color: #999;
            }
          }
        }
        & > span:nth-of-type(1){
          flex: 1;
        }
        & > span:nth-of-type(2){
          flex: 1;
        }
        & > span:nth-of-type(3){
          flex: 1;
        }
      }
      .price-part{
        padding: 40px 60px 30px 20px;
        box-sizing: border-box;
        display: flex;
        .price-left{
          padding-top: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          margin-right: auto;
          span:first-child{
            margin-bottom: 12px;
          }
          span:nth-child(2){
            width: 202px;
            height: 62px;
            background: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            cursor: pointer;
          }
        }
        .price-right{
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          div:first-child{
            margin-bottom: 12px;
            span:first-child{
              margin-right: 100px;
            }
          }
          div:nth-child(2){
            margin-bottom: 26px;
            span:nth-child(2){
              margin-left: 10px;
              margin-right: 100px;
            }
          }
          div:nth-child(3){
            margin-bottom: 15px;
            span:first-child{
              margin-right: 100px;
            }
            span:nth-child(2){
              color: $theme-color;
              font-size: 18px;
              font-weight: bold;
            }
          }
          div:nth-child(4){
            width: 170px;
            height: 50px;
            background: $theme-color;
            color: #fff;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
            cursor: pointer;
          }
          div:nth-child(5){
            span:not(:first-child){
              margin-left: 12px;
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