import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Error from '../views/Error'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Error',
      name: 'error',
      component: Error
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user'); // 获取用户登录信息
  if (to.path == '/login') {
    // 如果访问的是登陆页面 用户信息存在的话说明已经登陆过了 跳转到主页
    if (user) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    // 如果访问的不是登陆页面 并且用户信息不存在 就跳转到登陆页面
    if (!user) {
      next({ path: '/login' });
    } else {
      next();
    }
  }
})

export default router;
