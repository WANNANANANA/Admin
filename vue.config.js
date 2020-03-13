module.exports = {
    outputDir: 'dist',
    // publicPath: 'http://www.huizhangongsi.com/erp/',
    devServer: {
        proxy: { // 服务器代理中转
            '/api': {
                target: 'http://localhost:8000'
            },
            '/erpTest': {
                target: 'http://gl.huizhangongsi.com/acmeerp/material/erpTest'
            }
        },
        port: 8888,
        open: true
    }
}