
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'a4d4d821-994c-44e2-8c4d-82bd68d24d0f'
    }
})

export const usersAPI = {

    auth() {
        return instance.get(`auth/me`).then(res => res.data)
    },

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(res => res.data.resultCode)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data.resultCode)
    }

}

export const profileAPI = {

    getProfile(userId) {

        if (!userId) {

            return instance.get(`auth/me`).then(res => instance.get(`profile/${res.data.id}`))

        } else {
            return instance.get(`profile/${userId}`)
        }

    },

    getStatus(userId) {

        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
      
        return instance.put(`profile/status`, {
            status: status
        })
    }


}

export const loginAPI = {

    login(values) {
      console.log(values)
        return instance.put( 'auth/login', {
            email: values['E-mail'],
            password: values['Password'],
            rememberMe: true

        })
    }
}