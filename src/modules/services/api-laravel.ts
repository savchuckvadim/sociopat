import axios from "axios"

//.then(res:AxiosResponse<any>) => ...
export const api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
    // baseURL: ' http://185.225.35.6/',

    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        // 'Access-Control-Allow-Origin' : '*',
    },

})
// type DataKeysType = 'data' | 'users' | 'authUser' | 'post' | 'posts' | 'aboutMe'
// type PropertiesTypes<T> = T extends {[key: string]: infer U }? U : never
// export type ResponseType = ReturnType<PropertiesTypes<>>
// const authRes = {
//     resultCode: 1,
//     authUser: {
//         name: 'oolya',
//         email: 'ret@mail.ru'
//     },
//     message: 'string'
// }
// const usersRes = {
//     users: [
//         {name: 'oolya',email: 'ret@mail.ru'},
//         {name: 'igor\'',email: 'igr@mail.ru'},
//     ],
//     resultCode: 0,
//     message: 'string'
// }
// type UserResType = ResponseType<typeof usersRes>

// export type ResponseType<T> = T extends{
//     data: D
//     message: string
//     resultCode: RC
// }

export enum ResultCodesEnum {
    Error = 0,
    Success = 1
}




