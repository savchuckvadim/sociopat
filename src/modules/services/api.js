import axios from "axios";

export const auth = () =>   axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true
}).then(res => res.data)


export const getUsers = (currentPage = 1, pageSize = 10) =>
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'a4d4d821-994c-44e2-8c4d-82bd68d24d0f'
        }
    }).then(res => res.data)


export const getProfile = (userId) =>

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)


export const follow = (userId) => axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': 'a4d4d821-994c-44e2-8c4d-82bd68d24d0f'
        }
    }).then(res => res.data.resultCode)


export const unfollow = (userId) => axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,

        headers: {
            'API-KEY': 'a4d4d821-994c-44e2-8c4d-82bd68d24d0f'
        }
    }).then(res => res.data.resultCode)
