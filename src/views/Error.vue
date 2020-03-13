<template>
  <div class="error">
    <h2>404</h2>
    <p>抱歉！您访问导入页面<span>失联</span>啦...</p>
    <el-button>返回上一页</el-button>
    <el-button type="primary">返回首页</el-button>
  </div>
</template>

<script>
export default {
    name: 'error'
}
</script>

<style lang="less">
  .error {
    h2 {
      font-size: 120px;
      color: #555;
      margin: 30px 0px;
    }
    p {
      font-size: 22px;
      color: #666;
      margin-bottom: 30px;
      span {
        color: orange;
      }
    }
    button {
      &:nth-of-type(2) {
        span {
          color: #fff;
        }
      }
    }
  }
</style>