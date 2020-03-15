<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios"

export default {
  // created() {
  //   // get
  //   axios
  //     .get("/erpTest", {
  //       params: { // 请求参数params拼接在url请求头中
  //         id: 1
  //       }
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   // post
  //   axios
  //     .post("/erpTest", { // 请求数据data放在请求主体中 适用put post patch
  //       id: 2
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   // put
  //   axios
  //     .put("/erpTest", {
  //       id: 1
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   // delete
  //   axios
  //     .delete("/erpTest", {
  //       id: 2
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   // 执行多个并发请求
  //   axios
  //     .all([axios.get("/api/test"), axios.get("/erpTest")])
  //     .then(axios.spread((api, erp) => {
  //         console.log(api, erp);
  //     }));
  // },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import './assets/style/basis.less';
#app {
  .boxSet();
  min-width: 900px;
  text-align: center;
}
</style>
