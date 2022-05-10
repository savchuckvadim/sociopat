import { usersAPI, profileAPI } from "../../../services/api";
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

export const setAuthUserData = (id, login, email) => {

    return {
        type: SET_USER_DATA,
        data: {
            id,
            login,
            email
        }
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
                isAuth:true
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

    usersAPI.auth().then(res => {
        const resultCode = res.resultCode;
        const data = res.data;

        if (resultCode === 0) {
          dispatch(setAuthUserData(data.id, data.login, data.email))
        }

        profileAPI.getProfile(data.id)
            .then(res => {

                const userProfile = res.data
               
                dispatch(setCurrentUser(userProfile))
            })

    })
}

export default authReducer