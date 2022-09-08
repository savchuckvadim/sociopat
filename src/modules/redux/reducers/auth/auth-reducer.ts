import { stopSubmit } from "redux-form"
import { authAPI } from "../../../services/api-laravel"
import { UserType } from "../../../types/types"
import { AppDispatchType } from "../../store"
import { inProgress } from "../preloader/preloader-reducer"
// import {getAuth} from "../../redux/reducers/auth/auth-reducer"


const SET_USER_DATA = 'SET_USER_DATA'

// const SET_AUTH_CURRENT_USER = 'SET_AUTH_CURRENT_USER'
// const SET_PHOTO = 'SET_PHOTO'

//STATE
let initialState = {
    isAuth: false as boolean,
    authUser: null as UserType | null

}
export type AuthStateType = typeof initialState



type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    authUser: UserType | null
    isAuth: boolean

}

//ACION CREATORS
export const setAuthUserData = (authUser: UserType | null, isAuth: boolean = false): SetAuthUserDataType =>
    ({ type: SET_USER_DATA, authUser, isAuth })




//THUNKS
export const getAuth = () => async (dispatch: AppDispatchType) => {

    let response = await authAPI.getAuthUser()
    let authUser = null
    if (response.resultCode) {
        authUser = response.authUser
    } else {
        console.log(response.message)
    }

    if (authUser) {
        dispatch(setAuthUserData(authUser, true))

    } else {
        dispatch(setAuthUserData(null, false))
    }


}
export const login = (email: string, password: string,) => (dispatch: AppDispatchType) => {
    dispatch(inProgress(true))
    authAPI.login(email, password)
        .then(res => {
            getAuth()
            dispatch(inProgress(false))

        })
        .catch((e) => {
            let message = 'Email or Password was wrong !'

            let action = stopSubmit('login', {
                _error: message
            })
            dispatch(action)
            dispatch(inProgress(false))
        })


}
export const logout = () => (dispatch: any) => {
    dispatch(inProgress(true))
    authAPI.logout()
        .then(res => {
            dispatch(setAuthUserData(null, false))

        })
    dispatch(inProgress(false))
}
//registration
export const setNewUser = (
    name: string, surname: string, email: string,
    password: string, password_confirmation: string) => async (dispatch: AppDispatchType) => {
        dispatch(inProgress(false))
        dispatch(inProgress(true))


        try {
            let res = await authAPI.register(name, surname, email, password, password_confirmation)
            if (res.statusText === 'Created') {
                // dispatch(registrationSuccess())
                getAuth()           //from auth reducer

            } else {

                if (res.data.error) {
                    alert(res.data.error)

                }
            }
            // dispatch(inProgress(false))
        } catch (error) {

            dispatch(inProgress(false))  //from preloader-reducer
        }


    }

//REDUCER
const authReducer = (state: AuthStateType = initialState, action: SetAuthUserDataType): AuthStateType => {
    let result = state

    switch (action.type) {
        case SET_USER_DATA:
            result = { ...state, }
            result.isAuth = action.isAuth
            result.authUser = action.authUser //запоминаем аутентифицированного пользователя в state
            return result


        default:
            return result
    }

}
export default authReducer