import { stopSubmit } from "redux-form";
import { profileAPI, authAPI } from "../../../services/api";
import { laravelAPI, profileLaravelAPI } from "../../../services/api-laravel";


const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_CURRENT_USER = 'SET_AUTH_CURRENT_USER';
const SET_PHOTO = 'SET_PHOTO'
let initialState = {
    auth: {
        "id": null,
        "login": null,
        "email": null,
        isAuth: false
    },
    currentUser: {}
}

export const setAuthUserData = (id = null, login = null, email = null, isAuth = false) =>
({
    type: SET_USER_DATA,
    data: { id, login, email },
    isAuth
})

export const setAuthCurrentUser = (userProfile) => ({ type: SET_AUTH_CURRENT_USER, userProfile })

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
        case SET_AUTH_CURRENT_USER:
            return { ...state, currentUser: action.userProfile };

        case SET_PHOTO:

            result = { ...state }
            result.currentUser = { ...state.currentUser }
            result.currentUser.photos = { ...action.photos }
            return result

        default:
            return result;
    }

}


export const getAuth = () => async (dispatch) => {

    const res = await authAPI.me();
    const resultCode = res.resultCode;
    const data = res.data;
    if (resultCode === 0) {

        dispatch(setAuthUserData(data.id, data.login, data.email, true));
        getCurrentUser(data.id, dispatch)
    }
}
//////////////////////////////////////////////////////////////////////////LARAVEL
export const laraGetAuth = () => async (dispatch) => {
    // await laravelAPI.me();
    let authUser = await laravelAPI.getAuthUser()
    
    
    if (authUser.data) {
        
        await dispatch(setAuthUserData(authUser.data.id, authUser.data.email, authUser.data.email, true));
        //set auth users profile 
        await laravelGetCurrentProfile(authUser.data.id, dispatch)
       

    }else{
        dispatch(setAuthUserData(null, null, null, false));
    }


}
const laravelGetCurrentProfile = async (userId, dispatch) => {
   
    const res = await profileLaravelAPI.getProfile(userId)
    
    const userProfile = res
    dispatch(setAuthCurrentUser(res))
}
//////////////////////////////////////////////////////////////////////////LARAVEL
const getCurrentUser = async (userId, dispatch) => {
    const res = await profileAPI.getProfile(userId)

    const userProfile = res.data
    dispatch(setAuthCurrentUser(userProfile))
}
export const login = (email, password, rememberMe) => (dispatch) => {



    // authAPI.login(email, password, rememberMe)
    //     .then(res => {
    //         const resultCode = res.data.resultCode;

    //         if (resultCode === 0) {

    //             dispatch(getAuth())

    //         } else {
    //             let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or Password was wrong !'

    //             let action = stopSubmit('login', {
    //                 _error: message
    //             })
    //             dispatch(action)
    //         }

    //     })
    //////////////////////////////////////////////////////////////////////////LARAVEL
    laravelAPI.login(email, password, rememberMe)
        .then(res => {
            
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
        // .then(res =>
        //     laravelAPI.getAuthUser()
        // )
        .then(res => console.log(res.data.id))

}
export const logout = () => (dispatch) => {

    // authAPI.logout()
    //     .then(res => {
    //         const resultCode = res.data.resultCode;

    //         if (resultCode === 0) {
    //             dispatch(setAuthUserData(null, null, null, false))
    //             dispatch(setAuthCurrentUser({}))
    //         }

    //     })

    //////////////////////////////////////////////////////////////////////////LARAVEL
    laravelAPI.logout()
        .then(res => {



            dispatch(setAuthUserData(null, null, null, false))
            dispatch(setAuthCurrentUser({}))

        })
}

export default authReducer