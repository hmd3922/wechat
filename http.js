import axios from 'axios'
// 响应拦截

axios.interceptors.response.use(response => {
    return response
}, error => {
    alert(error.response.data)

    return Promise.reject(error)
})
export default axios