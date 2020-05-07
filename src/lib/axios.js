import axios from 'axios'
import { baseURL } from '@/config'
import router from '@/router.js'
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            headers: {
            }
        }
        return config
    }

    interceptors(instance) {
        // 请求拦截器
        instance.interceptors.request.use(
            config => {
                // console.log(localStorage)
                if (localStorage.wxToken) {
                    console.log(config)
                    config.headers['Authorization'] = localStorage.wxToken
                }
                return config
            }, error => {
                return Promise.reject(error)
            })
        // 响应拦截器
        instance.interceptors.response.use(
            response => {
                console.log(response)
                return response
            }, error => {
                // 错误提醒
                // console.log(error)
                let noToken = error.message.indexOf(401)
                // console.log(noToken)
                if (noToken) {
                    console.log('没有Token')
                    alert('token值无效，请重新登录')
                    // 清除Token
                    localStorage.removeItem('wxToken')
                    // 页面跳转
                    router.push('/login')
                } else {
                    alert(error)
                }

                return Promise.reject(error)
            })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(options)
    }
}
export default HttpRequest