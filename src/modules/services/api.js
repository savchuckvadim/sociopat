
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'f967f12a-dbe0-4d06-9642-2706475a80b8'
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getUser(name) {

        return instance.get(`users?term=${name}`).then(res => res.data)
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
    },
    loadPhoto(photo) {

        let formData = new FormData()

        formData.append('image', photo)

            return instance.put(`profile/photo`, formData,  
            {headers: { "Content-Type": "multipart/form-data" }}
        )
        

    }
}

export const authAPI = {
        me() {
            return instance.get(`auth/me`).then(res => res.data)
        },
        login(email, password, rememberMe = true) {

            return instance.post('auth/login', {
                email: email,
                password: password,
                rememberMe: rememberMe

            })
        },
        logout() {

            return instance.delete('auth/login')
        }
    }

export const  fishAPI = {
        get() {
            return axios.get('https://fish-text.ru/get?type=sentence&number=20&format=json').then(res => res.data.text)
        }
    }