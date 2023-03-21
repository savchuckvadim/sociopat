import { stopSubmit } from "redux-form"
import { ResultCodesEnum } from "../../../services/api-laravel"
import { authAPI } from "../../../services/auth-api";
import { dialogsAPI } from "../../../services/dialogs-api";
import { socket } from "../../../services/websocket/socket";
import { PreloaderCodesEnum, UserType } from "../../../types/types"
import { InferActionsTypes, ThunkType } from "../../store"
import { inProgress } from "../preloader/preloader-reducer"

//TYPES
type AuthStateType = typeof initialState
type AuthThunkType = ThunkType<SetAuthUserDataType | ReturnType<typeof stopSubmit> | ReturnType<typeof inProgress>>
type SetAuthUserDataType = InferActionsTypes<typeof actions>

//STATE
let initialState = {
    isAuth: false as boolean,
    authUser: null as UserType | null

}



//ACION CREATORS
const actions = {
    setAuthUserData: (authUser: UserType | null, isAuth: boolean = false) =>
        ({ type: 'SP/AUTH/SET_USER_DATA', authUser, isAuth } as const)
}


//THUNKS
export const getAuth = (): AuthThunkType => async (dispatch) => {
    dispatch(inProgress(true, PreloaderCodesEnum.Global))
   
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
        dispatch(actions.setAuthUserData(authUser, true))
        await socket.reconnect(authUser.id, dispatch)
        
    } else {
        dispatch(actions.setAuthUserData(null, false))
    }
    dispatch(inProgress(false, PreloaderCodesEnum.Global))

}
export const login = (email: string, password: string): AuthThunkType => async (dispatch) => {
    dispatch(inProgress(true, PreloaderCodesEnum.Global))

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
            dispatch(inProgress(false, PreloaderCodesEnum.Global))
        })



}
export const logout = (): AuthThunkType => async (dispatch) => {
    dispatch(inProgress(true, PreloaderCodesEnum.Global))
    authAPI.logout()
        .then(res => {
            dispatch(actions.setAuthUserData(null, false))

        })
    dispatch(inProgress(false, PreloaderCodesEnum.Global))
}

export const setNewUser = ( //registration
    name: string, surname: string, email: string,
    password: string, password_confirmation: string) => async (dispatch: any) => {

        dispatch(inProgress(true, PreloaderCodesEnum.Global))


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
            // dispatch(inProgress(false, PreloaderCodesEnum.Global))
        } catch (error) {

            dispatch(inProgress(false, PreloaderCodesEnum.Global))  //from preloader-reducer
        }


    }

//REDUCER
const authReducer = (state: AuthStateType = initialState, action: SetAuthUserDataType): AuthStateType => {
    let result = state

    switch (action.type) {
        case "SP/AUTH/SET_USER_DATA":
            result = { ...state, }
            result.isAuth = action.isAuth
            result.authUser = action.authUser //запоминаем аутентифицированного пользователя в state
            return result


        default:
            return result
    }

}
export default authReducer