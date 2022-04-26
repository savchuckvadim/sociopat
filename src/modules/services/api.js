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

    getProfile(userId) {
        
        if(!userId){
            
            return instance.get(`auth/me`).then(res => instance.get(`profile/${res.data.id}`))
           
        }else{
            return instance.get(`profile/${userId}`)
        }
        

    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(res => res.data.resultCode)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data.resultCode)
    }

}