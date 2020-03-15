import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/index'
import i18n from './i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/reset.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(api) // 以vue插件的形式引入axios 这样整个项目都可以直接使用this.$api接口

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
