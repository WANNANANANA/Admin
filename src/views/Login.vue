<template>
  <div class="login">
    <el-form :model="loginForm">
      <h3>系统登录</h3>
      <el-form-item>
        <el-input v-model="loginForm.account" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">重 置</el-button>
        <el-button type="primary">登 陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mock from '@/mock/index';
import Cookies from 'js-cookie';

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      this.$api.login().then((res) => {
        window.alert(res.data.token);
        Cookies.set('token', res.data.token); //将登陆信息存储在cookie中
        this.$router.push('/'); // 路由跳转
      }).catch((error) => {
        alert(error);
      })
    }
  }
};
</script>

<style lang="less">
@import '../assets/style/basis.less';
.login {
  .boxSet();
  .el-form {
    width: 420px;
    padding: 16px 30px;
    .absolute(50%, 40%);
    transform: translate(-50%, -50%);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    h3 {
      margin: 20px 0px 40px;
      color: #555;
    }
    .el-form-item:nth-of-type(3) {
      .el-form-item__content{
        display: flex;
        button {
          width: 100%;
          span {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>