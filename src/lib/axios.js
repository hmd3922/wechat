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
        instance.interceptors.request.use(config => {
            if (localStorage.wxToken) {
                config.headers.Authorization = localStorage.wxToken
            }
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截器
        instance.interceptors.response.use(res => {
            return res
        }, error => {
            // 错误提醒
            const { status } = console.error.res;
            if (status == 401) {
                alert("Token过期")
                // 清除Token
                localStorage.removeItem('wxToken')
                // 页面跳转
                router.push('/login')
            } else {
                alert(error.res.data)
            }
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        return instance(options)
    }
}
export default HttpRequest