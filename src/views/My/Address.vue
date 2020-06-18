<template>
  <div class="address-wrap">
    <div class="title">
      <span>我的收获地址</span>
      <span v-if="hasAddress">(共1条,最多保存10条)</span>
      <el-button v-if="hasAddress" @click="openDialog">
        <span>+</span>
        <span>新建收获地址</span>
      </el-button>
    </div>
    <!-- 一个地址都没有的时候显示表单 -->
    <AddressForm v-if="!hasAddress"></AddressForm>
    <!-- 有地址的时候显示地址列表 -->
    <el-table
      class="address-list" 
      v-else
      :data="tableData"
      :header-cell-style="{background:'rgb(245,245,245)'}"
      style="width: 100%">
      <el-table-column
        prop="consignee"
        label="收货人"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="receiveAddress"
        label="收货地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="150">
        <span>修改</span>
        <span>|</span>
        <span>删除</span>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="default" v-if="scope.row.isDefault">默认地址</span>
          <span v-else>设为默认地址</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增地址对话框 -->
    <el-dialog title="填写收货地址" :visible.sync="showDialog">
      <AddressForm :showCancelBtn="true"></AddressForm>
    </el-dialog>
  </div>
</template>

<script>
import AddressForm from '@components/AddressForm.vue'
  export default {
    data(){
      return{
        hasAddress:false,
        tableData: [
          {
            consignee: '张三',
            receiveAddress: '广东省珠海市香洲区唐家湾镇清华科技园A栋888',
            phone: '18888888888',
            isDefault:false
          }, 
          {
            consignee: '李四',
            receiveAddress: '广东省广州市天河区车陂南黄村106号',
            phone: '13333333333',
            isDefault:true
          }, 
          {
            consignee: '张三',
            receiveAddress: '广东省珠海市香洲区唐家湾镇清华科技园A栋888',
            phone: '18888888888',
            isDefault:false
          }, 
          {
            consignee: '李四',
            receiveAddress: '广东省广州市天河区车陂南黄村106号',
            phone: '13333333333',
            isDefault:false
          }, 
        ],
        showDialog:false
      }
    },
    components:{
      AddressForm
    },
    methods:{
      openDialog(){
        this.showDialog=true
      }
    }
  }
</script>

<style lang="scss" scoped>
.address-wrap{
  .title{
    height: 50px;
    display: flex;
    align-items: center;
    span:first-child{
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }
    span:nth-child(2){
      font-size: 12px;
      color: #999;
      margin-left: 10px;
      margin-right: auto;
    }
    .el-button{
      width: 129px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0;
      span:first-child{
        color: $theme-color;
      }
      span:last-child{
        color: #333;
      }
    }
  }
  .el-form{
    margin-top: 60px;
    .el-row{
      .el-col{
        .el-input{
          width: 300px;
        }
      }
    }
    .el-form-item{
      .el-checkbox{
        color: #333;
        /deep/ {
          .el-checkbox__input{
            .el-checkbox__inner{
              border-color: $theme-color;
            }
          }
          .el-checkbox__input.is-checked{
            .el-checkbox__inner{
              background: $theme-color;
              border-color: $theme-color;
            }
          }
          .el-checkbox__label{
            color: #333;
          }
        }
      }
      .el-button{
        width: 160px;
        height: 40px;
        background: $theme-color;
        color: #fff;
      }
    }
  }
  .el-table{
    margin-top: 12px;
    border: 1px solid #ddd;
    /deep/{
      .el-table_1_column_4{
        .cell{
          span:nth-child(odd){
            color: rgb(90,137,212);
            cursor: pointer;
          }
          span:nth-child(2){
            margin: 0 4px;
            color: #ccc;
          }
        }
      }
      .el-table_1_column_5{
        color: rgb(90,137,212);
        cursor: pointer;
        .default{
          border: 1px solid $theme-color;
          color: $theme-color;
          padding: 1px 2px;
          cursor: initial;
        }
      }
    }
  }
}
</style>