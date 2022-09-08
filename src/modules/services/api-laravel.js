import axios from "axios";
import Echo from "laravel-echo";


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
let token;

export const authAPI = {

    async initial() {
        let res = await instance.get("/sanctum/csrf-cookie");
        return res
    },

    async register(name, surname, email, password, passwordConfirmation) {
        await instance.get("/sanctum/csrf-cookie");
        let result = await instance.post('register', {
            name: name,
            surname: surname,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        })

        return result

    },

    async login(email, password) {
        await instance.get("/sanctum/csrf-cookie")
        return instance.post('login', {
            email: email,
            password: password,
            remember: true
        })



    },
    async getAuthUser() {
        try {
            let response = await instance.get("api/user/auth");
            let tokensData = await instance.post("/api/sanctum/token", { /////////// Generate token for websocket
                email: "savchuckvadim@gmail.com",
                password: "Cfdxer131!",
                device_name: 'iPhone_11'
            })
            token = tokensData.data.token
            
            return response.data
        } catch (error) {
            alert(error)
        }

    },
    logout() {
        let response = instance.post('logout').then(res => console.log(res))
        return response
    },

    updatePassword(payload) {
        return instance.put("/user/password", payload);
    },
    sendVerification(payload) {
        return instance.post("/email/verification-notification", payload);
    },
    updateUser(payload) {
        return instance.put("/user/profile-information", payload);
    },
    // getUsers() {
    //     let result = instance.get(`user`).then(res => res.data).then(res => console.log(res))

    //     return result
    // },
    // createToken() {

    //     let result = instance.post(`token/create`).then(res => res.data).then(res => console.log(res))
    //     return result
    // },



}

export const usersAPI = {

    async getUsers(currentPage = 1, pageSize = 10) {
        try {
            const res = await instance.get(`api/users?page=${currentPage}&count=${pageSize}`);
            
            return res.data
        } catch (error) {
            alert(error)
        }


    },

    async getUser(id) {
        try {
            const res = await instance.get(`api/users/${id}`)
            return res.data
        } catch (error) {
            alert(error)
        }

    },

    async follow(userId) {
        return instance.post(`api/follow`, {
            userId: userId
        })
    },

    async unfollow(userId) {
        return instance.delete(`api/follow/${userId}`)
    },
    // unfollow(userId) {
    //     return instance.delete(`follow/${userId}`).then(res => res.data.resultCode)
    // }

    async getAvatar(userId) {
        const result = await instance.get(`api/garavatar/${userId}`)

        return result
        // .then(res => res.data)
    },
}


export const profileAPI = {

    async getProfile(userId) {
        const res = await instance.get(`api/profile/${userId}`);
        return res.data;
    },

    getAboutMe(userId) {

        return instance.get(`api/profile/aboutme/${userId}`)
    },

    updateAboutMe(aboutMe) {

        return instance.put(`api/profile/aboutme`, {
            aboutMe
        })
    },
}

export const postAPI = {

    async sendPost(userId, profileId, body, image) {
        let event = await eventsAPI.event()
        //
        return instance.post('api/post', {
            body,
            image,
            profileId,
            userId
        })
    },

    getPosts(profileId) {
        return instance.get(`api/post/${profileId}`);
    },

    like(postId) {
        return instance.post('api/like', {
            postId
        })
    },
    dislike(postId) {
        return instance.delete(`api/like/${postId}`)
    }

}

export const eventsAPI = {

    async event() {
        // let res = await instance.get(`api/testingevent`)
        window.Pusher = require('pusher-js');
        // instance.get("/sanctum/csrf-cookie").then(res => {
            
            // axios
            // .post("http://localhost:8000/api/tokens/create", {
            //     email: "savchuckvadim@gmail.com",
            //     password: "Cfdxer131!",
            // })
            // .then(({ data }) => {
            //     debugger
            //     let token = data;
                //
                axios({
                    method: "GET",
                    url: "http://localhost:8000/api/user",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then(({ data }) => {
                    
                    console.log(data);
                    let echo = new Echo({

                        broadcaster: 'pusher',
                        key: 'socket_key',
                        cluster: 'mt1',
                        //
                        forceTLS: true, // TODO: false
                        disableStats: true,
                        //
                        wsHost: '127.0.0.1',
                        wsPort: 6001,
                        authorizer: (channel, options) => {
                            console.log(options);
                            debugger
                            return {
                                authorize: (socketId, callback) => {
                                    axios({
                                        method: "POST",
                                        url: "http://localhost:8000/api/broadcasting/auth",
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                          },
                                        data: {
                                            socket_id: socketId,
                                            channel_name: channel.name,
                                            
                                        },
                                    })
                                        .then((response) => {
                                            console.log(response)
                                            callback(false, response.data);
                                        })
                                        .catch((error) => {
                                            console.log(error)
                                            callback(true, error);
                                        });
                                }
                            };
                        }

                    })


                    echo.private(`send-post`)
                        .listen('SendPost', (e) => {
                            alert(e.data);
                        });

                });
            // });
        // })
       
    },

}