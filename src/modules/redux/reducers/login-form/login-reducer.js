import { loginAPI } from "../../../services/api";

const LOGIN = 'LOGIN'

const initialState = {
    email: '',
    password: '',
    rememberMe: true
}

const setLoginData = (values) => {
    return {
        type: LOGIN,
        values
    }
}

const loginReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {
        case LOGIN:
            result = { ...action.values }
            return result;

        default:
            return result;
    }
}

// export const loginTest = (values) => {
//     console.log(values['E-mail'])
// }
export const loginTest = (values = 0) => {

    return (dispatch) => {

        console.log('Password')
        loginAPI.login(values)
            .then(res => {
                console.log(res)
                let action = setLoginData(values)
                dispatch(action)
            })

    }


}

export default loginReducer