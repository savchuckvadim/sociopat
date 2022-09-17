import { stopSubmit } from "redux-form"
import { ResultCodesEnum } from "../../../services/api-laravel"
import { authAPI } from "../../../services/auth-api";
import { UserType } from "../../../types/types"
import { ThunkType } from "../../store"
import { inProgress } from "../preloader/preloader-reducer"



const SET_USER_DATA = 'SET_USER_DATA'


//STATE
let initialState = {
    isAuth: false as boolean,
    authUser: null as UserType | null

}
export type AuthStateType = typeof initialState
type AuthThunkType = ThunkType<SetAuthUserDataType | ReturnType<typeof stopSubmit> | ReturnType<typeof inProgress>>


type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    authUser: UserType | null
    isAuth: boolean

}

//ACION CREATORS
export const setAuthUserData = (authUser: UserType | null, isAuth: boolean = false): SetAuthUserDataType =>
    ({ type: SET_USER_DATA, authUser, isAuth })




//THUNKS
export const getAuth = (): AuthThunkType => async (dispatch) => {
    dispatch(inProgress(true))
    let response = await authAPI.getAuthUser()

    let authUser = null
    if (response) {
        if (response.resultCode === ResultCodesEnum.Success) {
            authUser = response.authUser && response.authUser
        } else {
            console.log(response.message)
        }
    }

    if (authUser) {
        dispatch(setAuthUserData(authUser, true))

    } else {
        dispatch(setAuthUserData(null, false))
    }
    dispatch(inProgress(false))

}
export const login = (email: string, password: string): AuthThunkType  => async (dispatch) => {
    dispatch(inProgress(true))

    await authAPI.login(email, password)
        .then(res => {

            dispatch(getAuth())

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
export const logout = (): AuthThunkType  =>async (dispatch) => {
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
    password: string, password_confirmation: string) => async (dispatch: any) => {

        dispatch(inProgress(true))


        try {
            let res = await authAPI.register(name, surname, email, password, password_confirmation)
            if (res.statusText === 'Created') {
                // dispatch(registrationSuccess())
                dispatch(getAuth())           //from auth reducer

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