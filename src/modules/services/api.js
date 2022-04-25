import axios from "axios";

export const auth = () =>   axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true
})
export const getUsers = (currentPage = 1, pageSize = 10) =>
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'a4d4d821-994c-44e2-8c4d-82bd68d24d0f'
        }
    })


export const getProfile = (userId) =>

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)


export const follow = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': 'a4d4d821-994c-44e2-8c4d-82bd68d24d0f'
        }
    })
}

export const unfollow = (userId) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,

        headers: {
            'API-KEY': 'a4d4d821-994c-44e2-8c4d-82bd68d24d0f'
        }
    })
}