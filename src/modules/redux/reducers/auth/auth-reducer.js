
import { stopSubmit } from "redux-form";
import { profileAPI, authAPI } from "../../../services/api";
const SET_USER_DATA = 'SET_USER_DATA'
const SET_CURRENT_USER = 'SET_CURRENT_USER';

let initialState = {
    auth: {
        "id": null,
        "login": null,
        "email": null,
        isAuth: false
    },
    currentUser: {}
}

export const setAuthUserData = (id = null, login = null, email = null, isAuth = false) => {

    return {
        type: SET_USER_DATA,
        data: {
            id,
            login,
            email
        },
        isAuth
    }
}
export const setCurrentUser = (userProfile) => {
    return {
        type: SET_CURRENT_USER,
        userProfile
    }
}
const authReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {
        case SET_USER_DATA:
            result = {
                ...state,
            }
            result.auth = {
                ...action.data,
                isAuth: action.isAuth
            }

            return result;
        case SET_CURRENT_USER:
            result = {
                ...state
            };
            result.currentUser = action.userProfile


            return result;
        default:
            return result;
    }

}

export const getAuth = () => (dispatch) => {

    authAPI.me().then(res => {
        const resultCode = res.resultCode;
        const data = res.data;

        if (resultCode === 0) {
            dispatch(setAuthUserData(data.id, data.login, data.email, true))
        }

        profileAPI.getProfile(data.id)
            .then(res => {

                const userProfile = res.data

                dispatch(setCurrentUser(userProfile))
            })

    })
}

export const login = (email, password, rememberMe) => (dispatch) => {



    authAPI.login(email, password, rememberMe)
        .then(res => {
            const resultCode = res.data.resultCode;
            // const data = res.data;
            console.log(resultCode)
            debugger
            if (resultCode === 0) {

                dispatch(getAuth())

            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or Password was wrong !'
               
                let action = stopSubmit('login', { _error: message })
                dispatch(action)
            }

        })

}
export const logout = () => (dispatch) => {

    authAPI.logout()
        .then(res => {
            const resultCode = res.data.resultCode;
            // const data = res.data;

            if (resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
                dispatch(setCurrentUser({}))
            }

        })

}

export default authReducer