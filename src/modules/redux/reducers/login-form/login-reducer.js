import { loginAPI } from "../../../services/api";

const LOGIN = 'LOGIN'

const initialState = {
    email: '',
    password: '',
    rememberMe: true
}

const loginReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {
        case LOGIN:

            return result;

        default:
            return result;
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
 loginAPI.login(email, password, rememberMe)
 .then(res => console.log(res))
}

export default loginReducer