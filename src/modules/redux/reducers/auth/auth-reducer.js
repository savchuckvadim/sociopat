const SET_USER_DATA = 'SET_USER_DATA'
let initialState = {
    "id": null,
    "login": null,
    "email": null,
    isFetching: false
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

const authReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {
        case SET_USER_DATA:
            result = {
                ...state,
                ...action.data

            }

            console.log(result)
            return result;
        default:
            return result;
    }

}

export default authReducer