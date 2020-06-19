<template>
  <div class="login-wrap">
    <div class="content-center margin-center">
      <div class="reg-login">
        <div class="btn-tab">
          <span :class="{'on-tab':curIndex==index}" @click="changeTab(index)" v-for="(item,index) in tabs" :key="index">{{item}}</span>
        </div>
        <el-form :model="form" :rules="formRules" ref="formRef" label-width="100px">
          <el-form-item label="用户名" prop="username">
            <el-input v-input="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-input="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item v-if="curIndex==1" label="确认密码" prop="password">
            <el-input v-input="form.confirmPass" placeholder="请再次输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="bottom-btn">
          <el-button type="primary" v-if="curIndex==0">登录</el-button>
          <el-button type="primary" v-else>注册</el-button>
          <div class="another-tab" v-if="curIndex==0" @click="curIndex=1">还没有账号，去注册</div>
          <div class="another-tab" v-else @click="curIndex=0">去登录</div>
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
        tabs:[
          '登录',
          '注册'
        ],
        form:{
          username:'',
          password:'',
          confirmPass:'',
        },
        formRules:{

        }
      }
    },
    methods:{
      changeTab(i){
        this.curIndex=i
      }
    }
  }
</script>

<style lang="scss" scoped>
.login-wrap{
  margin-top: 50px;
  color: #333;
  .content-center{
    width: $center-width;
    min-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    .reg-login{
      width: 600px;
      height: 650px;
      border: 1px solid #ddd;
      .btn-tab{
        height: 60px;
        display: flex;
        align-items: center;
        margin-bottom: 60px;
        span{
          flex: 1;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #eee;
          font-size: 18px;
          cursor: pointer;
          font-weight: bold;
          letter-spacing: 5px;
        }
        .on-tab{
          border-right: 1px solid #eee;
          background: $theme-color;
          color: #fff;
        }
      }
      .el-form{
        min-height: 380px;
        margin-bottom: 30px;
        padding: 50px 50px 0;
        box-sizing: border-box;
        .el-form-item{
          margin-bottom: 50px;
        }
      }
      .bottom-btn{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 50px;
        box-sizing: border-box;
        .el-button{
          width: 80px;
          height: 40px;
          background: $theme-color;
          border: none;
          margin-bottom: 20px;
        }
        .another-tab{
          color: $theme-color;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>