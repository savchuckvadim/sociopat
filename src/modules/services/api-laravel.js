
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
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
        let result = instance.post('register', {
            name: name,
            surname: surname,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation

        }).then(res => {
            console.log(res)
        })
        return result

    },
    me() {
        // let result = instance.get('sanctum/csrf-cookie').then(response => {
        //     console.log(response)

        // });

        return instance.get('sanctum/csrf-cookie')
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
        // await instance.get("/sanctum/csrf-cookie")
    let result = await instance.get("api/user/auth");
        console.log(result)
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
        return instance.get(`api/users?page=${currentPage}&count=${pageSize}`).then(res => res);
    },

    // getUser(name) {

    //     return instance.get(`users?term=${name}`).then(res => res.data)
    // },

    // follow(userId) {
    //     return instance.post(`follow/${userId}`).then(res => res.data.resultCode)
    // },

    // unfollow(userId) {
    //     return instance.delete(`follow/${userId}`).then(res => res.data.resultCode)
    // }

}
// laravelAPI.logout()

