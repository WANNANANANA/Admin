// 请求接口汇总模板 聚合模块api

import axios from './axios'

/* 
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const login = (data) => {
    return axios({
        // 为什么这里直接使用/login也会报错？
        url: 'http://localhost:8888/login',
        // url: '/login',
        method: 'post',
        data // post请求中的参数
    })
}

export const getUser = () => {
    return axios({
        url: 'http://localhost:8888/user',
        method: 'get'
    })
}

export const getMenu = () => {
    return axios({
        url: 'http://localhost:8888/menu',
        method: 'get'
    })
}

// 默认全部导出
export default {
    login,
    getUser,
    getMenu
}