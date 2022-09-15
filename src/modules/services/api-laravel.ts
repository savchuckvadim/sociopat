import axios from "axios"

//.then(res:AxiosResponse<any>) => ...
export const instance = axios.create({
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




