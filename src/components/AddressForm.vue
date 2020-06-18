<template>
  <el-form label-width="90px" :model="addressForm" :rules="addressRules" form="addressRef">
    <el-row :gutter="20">
      <el-col :span="500">
        <el-form-item label="收货人" prop="consignee">
          <el-input v-model="addressForm.consignee" placeholder="为了提高发货速度,请填写您的真实姓名"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="500">
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="addressForm.phone" placeholder="手机号码"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="收货地区" prop="receiveArea">
      <el-cascader
        size="large"
        :options="areaOptions"
        v-model="selectedOptions"
        @change="selectArea">
      </el-cascader>
    </el-form-item>
    <el-form-item class="detail-address" label="详细地址" prop="detailAddress">
      <el-input type="textarea" maxlength="120" resize="none" rows="5" show-word-limit placeholder="无需重复填写省市区,小于120字" v-model="addressForm.detailAddress"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="setDefault">设为默认地址</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button>保存新地址</el-button>
      <el-button v-if="showCancelBtn">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { regionData } from 'element-china-area-data'
  export default {
    data(){
      return{
        addressForm:{
          consignee:'',
          phone:'',
          receiveArea:'',
          detailAddress:''
        },
        addressRules:{

        },
        areaOptions: regionData,
        selectedOptions: [],
        setDefault:true,
      }
    },
    props:{
      showCancelBtn:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      selectArea(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scoped>
.detail-address{
  .el-textarea{
    width: 70%;
  }
}
</style>