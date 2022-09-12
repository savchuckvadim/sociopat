import axios from "axios"
import Echo from "laravel-echo"
import { UserType } from "../types/types"
import { GetAuthUserType, GetUsersType, GetUserType, FollowType, UnfollowType, AboutMeType } from "./api-laravel-types"

//.then(res:AxiosResponse<any>) => ...
const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
    // baseURL: ' http://185.225.35.6/',

    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        // 'Access-Control-Allow-Origin' : '*',
    },

})

export enum ResultCodesEnum {
    Error = 0,
    Success = 1
}
let token: string



export const authAPI = {

    async initial() {
        let res = await instance.get("/sanctum/csrf-cookie")
        return res
    },

    async register(name: string, surname: string, email: string, password: string, passwordConfirmation: string) {
        await instance.get("/sanctum/csrf-cookie")
        let result = await instance.post('register', {
            name: name,
            surname: surname,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        })

        return result

    },

    async login(email: string, password: string) {
        await instance.get("/sanctum/csrf-cookie")
        let res = await instance.post('login', {
            email: email,
            password: password,
            remember: true
        })
        return res

    },
    async getAuthUser() {
        try {
            let res = await instance.get<GetAuthUserType>("api/user/auth")

            //mounted websocket
            let tokensData = await instance.post("/api/sanctum/token", { /////////// Generate token for websocket
                email: "savchuckvadim@gmail.com",
                password: "Cfdxer131!",
                device_name: 'iPhone_11'
            })
            token = tokensData.data.token
            // let event = await eventsAPI.event()
            // console.log(event)
            ///////////////////////

            return res.data
        } catch (error) {
            alert(error)
        }

    },

    logout() {
        let res = instance.post('logout').then(res => console.log(res))
        return res
    },

    //TODO Verification

    /*
        updatePassword(payload) {
            return instance.put("/user/password", payload)
        },
        sendVerification(payload) {
            return instance.post("/email/verification-notification", payload)
        },
        updateUser(payload) {
            return instance.put("/user/profile-information", payload)
        },
    
        */

}

export const usersAPI = {

    async getUsers(currentPage: number = 1, pageSize: number = 10) {
        try {
            const res = await instance.get<GetUsersType>(`api/users?page=${currentPage}&count=${pageSize}`)
            return res.data
        } catch (error) {
            alert(error)
        }


    },

    async getUser(userId: number) {
        try {
            const res = await instance.get<GetUserType>(`api/users/${userId}`)

            return res.data
        } catch (error) {
            alert(error)
        }

    },

    async follow(userId: number) {
        const res = await instance.post<FollowType>(`api/follow`, {
            userId: userId
        })
        return res.data
    },

    async unfollow(userId: number) {
        const res = await instance.delete<UnfollowType>(`api/follow/${userId}`)
        return res.data
    },

}


export const profileAPI = {

    // async getProfile(userId: number) {
    //     const res = await instance.get(`api/profile/${userId}`)
    //     return res.data
    // },

    async getAboutMe(userId: number) {
        const res = await instance.get<AboutMeType>(`api/profile/aboutme/${userId}`)
        return res.data
    },

    async updateAboutMe(aboutMe: string) {
        const res = await instance.put<AboutMeType>(`api/profile/aboutme`, {
            aboutMe
        })

        return res.data
    },
}

export const postAPI = {

    async sendPost(userId: number, profileId: number, body: string, image: string) {
        let csrf = await instance.get("/sanctum/csrf-cookie")
        console.log(csrf)
        let event = await eventsAPI.event()
        console.log(event)
        let send = await instance.post('api/post', {
            body,
            image,
            profileId,
            userId
        })
        
        return send
    },

    getPosts(profileId: number) {
        return instance.get(`api/post/${profileId}`)
    },

    like(postId: number) {
        return instance.post('api/like', {
            postId
        })
    },
    dislike(postId: number) {
        return instance.delete(`api/like/${postId}`)
    }

}


//TODO TypeScript
export const eventsAPI = {

    async event() {
        // let res = await instance.get(`api/testingevent`)
        // @ts-ignore
        window.Pusher = require('pusher-js')
         instance.get("/sanctum/csrf-cookie").then(res => {

        // axios
        // .post("http://localhost:8000/api/tokens/create", {
        //     email: "savchuckvadim@gmail.com",
        //     password: "Cfdxer131!",
        //     device: 'iPhone'
        // })
        // .then(({ data }) => {

        //     let token = data

        axios({
            method: "GET",
            url: "http://localhost:8000/api/user",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(({ data }) => {

            let echo = new Echo({

                broadcaster: 'pusher',
                key: 'socket_key',
                cluster: 'mt1',
                //
                forceTLS: false, // TODO: false
                disableStats: true,
                //
                wsHost: '127.0.0.1',
                wsPort: 6001,
                // @ts-ignore
                authorizer: (channel, options) => {
                    console.log(options)

                    return {
                        // @ts-ignore
                        authorize: (socketId, callback) => {
                            instance.post('api/broadcasting/auth',{
                                socket_id: socketId,
                                    channel_name: channel.name,
                            })
                            // axios({
                            //     method: "POST",
                            //     url: "http://localhost:8000/api/broadcasting/auth",
                                
                            //     headers: {
                            //         Authorization: `Bearer ${token}`,
                            //     },
                            //     data: {
                            //         socket_id: socketId,
                            //         channel_name: channel.name,

                            //     },
                            // })
                                .then((response) => {
                                    console.log(response)
                                    callback(false, response.data)
                                })
                                .catch((error) => {
                                    console.log(error)
                                    callback(true, error)
                                })
                        }
                    }
                }

            })


            echo.private(`send-post`)
                // @ts-ignore
                .listen('SendPost', (e) => {
                    console.log(e)
                    alert(e.data)
                })

        })
        // })
        })

    },

}