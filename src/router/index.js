import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import News from '../views/News'
import User from '../views/User'
import Menu from '../views/Menu'
import Role from '../views/Role'
import Log from '../views/Log'
import Login from '../views/Login'
import Error from '../views/Error'

Vue.use(VueRouter)

// 解决element-ui点击同一个路由报错：NavigationDuplicated
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

let router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: '/user', component: User, name: '用户管理' },
        { path: '/menu', component: Menu, name: '菜单管理' },
        { path: '/news', component: News, name: '消息管理' },
        { path: '/role', component: Role, name: '角色管理' },
        { path: '/log', component: Log, name: '日志管理' }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error
    },
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

// router.beforeEach((to, from, next) => {
//   let user = sessionStorage.getItem('user'); // 获取用户登录信息
//   if (to.path == '/login') {
//     // 如果访问的是登陆页面 用户信息存在的话说明已经登陆过了 跳转到主页
//     if (user) {
//       next({ path: '/' });
//     } else {
//       next();
//     }
//   } else {
//     // 如果访问的不是登陆页面 并且用户信息不存在 就跳转到登陆页面
//     if (!user) {
//       next({ path: '/login' });
//     } else {
//       next();
//     }
//   }
// })

export default router;
