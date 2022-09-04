import { laraGetAuth } from './auth/auth-reducer'
const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'
const INITIALIZING = 'INITIALIZING'

let initialState = {
    initialized: false,
    inProgress: false,
}


//ACTION CREATORS
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCES })
export const initializing = () => ({ type: INITIALIZING })


//THUNKS
export const initialize = () => async (dispatch) => {
    dispatch(initializing()) //inProgress-status
    let promiseAuth = () => {
        return dispatch(laraGetAuth())

    }


    await promiseAuth()
    dispatch(initializedSuccess())

}


//REDUCER
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCES: return { ...state, initialized: true, inProgress: false }
        case INITIALIZING: return { ...state, inProgress: true }
        default: return state;
    }

}



export default appReducer