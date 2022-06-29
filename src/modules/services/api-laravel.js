
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
    // headers: {
    //     'API-KEY': 'f967f12a-dbe0-4d06-9642-2706475a80b8'
    // }
})

export const laravelAPI = {


    register(name, surname, email, password, passwordConfirmation) {
        console.log(name, surname, email, password, passwordConfirmation)
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
    me(){
        let result = instance.get('sanctum/csrf-cookie').then(response => {
            console.log(response)
            debugger
        });
        return result
    },
    login(email, password) {
        let result = instance.post('login', {
            email: email,
            password: password
        }).then(res => {
            console.log(res)
        })
        console.log(result)
        return result
    },
    getUsers() {
        let result = instance.get(`user`).then(res => res.data).then(res => console.log(res))

        return result
    },
    createToken() {

        let result = instance.post(`token/create`).then(res => res.data).then(res => console.log(res))
        return result
    },



}
