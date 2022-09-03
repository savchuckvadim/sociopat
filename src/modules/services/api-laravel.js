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
// instance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     function (error) {
//       if (
//         error.response &&
//         [401, 419].includes(error.response.status) &&
//         store.getters["auth/authUser"] &&
//         !store.getters["auth/guest"]
//       ) {
//         store.dispatch("auth/logout");
//       }
//       return Promise.reject(error);
//     }
//   );
export const laravelAPI = {


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
        // await this.logout()
        // await instance.get("/sanctum/csrf-cookie")
        let result = await instance.get("api/user/auth");

        return result
    },
    logout() {
        let result = instance.post('logout').then(res => console.log(res))

        return result
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

export const usersAPILaravel = {



    async getUsers(currentPage = 1, pageSize = 10) {
        await instance.get("/sanctum/csrf-cookie");
        // let testUsers = await instance.get(`api/users?page=${currentPage}&count=${pageSize}`);
        // 
        return instance.get(`api/users?page=${currentPage}&count=${pageSize}`).then(res => res);
    },

    async getUser(id) {

        return instance.get(`api/users/${id}`).then(res => res.data)
    },
    // getUser(name) {

    //     return instance.get(`users?term=${name}`).then(res => res.data)
    // },

    async follow(userId) {

        return instance.post(`api/follow`, {
            userId: userId
        })
    },

    async unfollow(userId) {

        return instance.delete(`api/follow/${userId}`)
        // .then(res => res.data)
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
// laravelAPI.logout()

export const profileLaravelAPI = {

    getProfile(userId) {
        return instance.get(`api/profile/${userId}`).then(res => res.data)
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

    sendPost(userId, profileId, body, image) {

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
        let res = await instance.get(`api/testingevent`)
        window.Pusher = require('pusher-js');
        let echo = new Echo({

            broadcaster: 'pusher',
            key: 'socket_key',
            cluster: 'mt1',
            forceTLS: true,
            wsHost: '127.0.0.1',
            wsPort: 6001,
            authorizer: (channel, options) => {
                console.log(options);
                return {
                    authorize: (socketId, callback) => {
                        axios({
                            method: "POST",
                            url: "http://localhost:8000/api/broadcasting/auth",
                            data: {
                                socket_id: socketId,
                                channel_name: channel.name,
                            },
                        })
                            .then((response) => {
                                callback(false, response.data);
                            })
                            .catch((error) => {
                                callback(true, error);
                            });
                    }
                };
            }

        })
        // echo.private(`test-chanel.${21}`)
        //     .listen('LoginEvent', (e) => {
        //         alert(e.data);
        //     });
        debugger
        return res
    },
}