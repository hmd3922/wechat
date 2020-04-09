import axios from './index'

export const register = (data) => {
    return axios.request({
        url: '/api/users/register',
        method: 'post',
        data: data
    })
}
export const login = (data) => {
    return axios.request({
        url: '/api/users/login',
        method: 'post',
        data: data
    })
}