import { socket } from "./websocket/socket";
import { instance } from "./api-laravel";
import { UserType } from "../types/types";

type GetAuthUserType = {
    resultCode: number
    authUser: UserType
    message: string
}


export const authAPI = {
    async initial() {
        let res = await instance.get("/sanctum/csrf-cookie");
        return res;
    },

    async register(name: string, surname: string, email: string, password: string, passwordConfirmation: string) {
        await instance.get("/sanctum/csrf-cookie");
        let result = await instance.post('register', {
            name: name,
            surname: surname,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        });

        return result;

    },

    async login(email: string, password: string) {
        await instance.get("/sanctum/csrf-cookie");
        let res = await instance.post('login', {
            email: email,
            password: password,
            remember: true
        });
        return res;

    },
    async getAuthUser() {
        try {
            const res = await instance.get<GetAuthUserType>("api/user/auth");
            const websocket = await socket.connection();

            return res.data;
        } catch (error) {
            return {
                'resultCode': 0,
                'authUser': null,
                'message': error
            };
            
        }

    },

    logout() {
        let res = instance.post('logout').then(res => console.log(res));
        return res;
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
};
