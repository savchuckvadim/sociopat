import { stopSubmit } from "redux-form";
import { authAPI } from "../../../services/api-laravel";


const SET_USER_DATA = 'SET_USER_DATA'
// const SET_AUTH_CURRENT_USER = 'SET_AUTH_CURRENT_USER';
const SET_PHOTO = 'SET_PHOTO'

//STATE
let initialState = {
    auth: { "id": null, "login": null, "email": null, isAuth: false },
    authUser: null
}

//ACION CREATORS
export const setAuthUserData = (authUser, id = null, login = null, email = null, isAuth = false) =>
    ({ type: SET_USER_DATA, authUser, data: { id, login, email }, isAuth })




//THUNKS
export const laraGetAuth = () => async (dispatch) => {
    // await laravelAPI.me();
    let response = await authAPI.getAuthUser()

    let authUser = null
    if (response.data) {
        authUser = response.data.data
    }

    if (authUser) {
        // let avatar = await usersAPILaravel.getAvatar(authUser.id)

        dispatch(setAuthUserData(authUser, authUser.id, authUser.email, authUser.email, true));
        // await eventsAPI.event();
        //set auth users profile 
        // await laravelGetCurrentProfile(authUser.id, dispatch)
        // dispatch(setAuthcurrentProfile(authUser.profile, avatar.data))


    } else {
        dispatch(setAuthUserData(null, null, null, false));
    }


}
export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(res => {
            console.log('login')
            console.log(res)
            const resultCode = res.status;

            if (resultCode === 200) {


                dispatch(laraGetAuth())

            } else {
                let message = 'Email or Password was wrong !'

                let action = stopSubmit('login', {
                    _error: message
                })
                dispatch(action)
            }

        })

    // .then(res => console.log(res.data.id))

}
export const logout = () => (dispatch) => {

    authAPI.logout()
        .then(res => {
            dispatch(setAuthUserData(null, null, null, false))
            // dispatch(setAuthcurrentProfile({}))

        })
}


//REDUCER
const authReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_USER_DATA:
            result = { ...state, }
            result.auth = { ...action.data, isAuth: action.isAuth }
            result.authUser = action.authUser //запоминаем аутентифицированного пользователя в state чтобы потом его вставлять в список подписчиков
            return result;

        // case SET_AUTH_CURRENT_USER:
        //     let user = { ...action.userProfile, photos: { small: action.avatar, large: null } }
        //     return { ...state, currentProfile: user };

        case SET_PHOTO:
            result = { ...state }
            result.currentProfile = { ...state.currentProfile }
            result.currentProfile.photos = { ...action.photos }
            return result

        default:
            return result;
    }

}
export default authReducer