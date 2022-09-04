import { getAuth } from './auth/auth-reducer'
const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'
const INITIALIZING = 'INITIALIZING'

let initialState = {
    initialized: false,
    inProgress: false,
}

type initialStateType = typeof initialState
type actionType = {
    type: string
}
//ACTION CREATORS
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCES })
export const initializing = () => ({ type: INITIALIZING })


//THUNKS
export const initialize = () => async (dispatch) => {
    dispatch(initializing()) //inProgress-status
    let promiseAuth = () => {
        return dispatch(getAuth())

    }
    await promiseAuth()
    dispatch(initializedSuccess())

}


//REDUCER
const appReducer = (state: initialStateType = initialState, action: actionType) => {

    switch (action.type) {
        case INITIALIZED_SUCCES: return { ...state, initialized: true, inProgress: false }
        case INITIALIZING: return { ...state, inProgress: true }
        default: return state;
    }

}



export default appReducer