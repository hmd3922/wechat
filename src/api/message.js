import axios from './index'
import store from '@/store.js'
export let msg = (data) => {
    return axios.request({
        url: '/api/profile/msg/' + store.getters.user.id,
        method: 'get',
        data: data
    })
}
export let addmsg = (data) => {
    return axios.request({
        url: '/api/profile/addmsg/',
        method: 'post',
        data: data
    })
}