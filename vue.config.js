const path = require('path');

const resolve = dir => path.join(__dirname, dir)
const BASE_URL = ''
module.exports = {
    lintOnSave: false,
    publicPath: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    // 打包不生成.map文件
    productionSourceMap: false,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^api': ''
                }
            }

        }

    }
}