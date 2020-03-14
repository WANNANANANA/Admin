<template>
  <div class="home">
    <h2>Home Page</h2>
    <el-button type="primary" @click="getUser">获取用户信息</el-button>
    <el-button type="primary" @click="getMenu">获取菜单信息</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import mock from '@/mock/index'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    // 为什么直接使用'/user'这个路径会报错
    getUser() {
      this.$api.getUser().then((res) => {
        alert(JSON.stringify(res.data));
      }).catch((error) => {
        console.log(error);
      })
    },
    getMenu() {
      this.$api.getMenu().then((res) => {
        alert(JSON.stringify(res.data));
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="less">
  .home {
    h2 {
      margin: 30px 0px;
    }
    button {
      span {
        color: #fff;
      }
    }
  }
</style>
