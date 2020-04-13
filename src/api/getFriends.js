import axios from './index'

export const getFriendsList = (data) => {
    return axios.request({
        url: '/api/users/all',
        method: 'get',
        data: data
    })
}
