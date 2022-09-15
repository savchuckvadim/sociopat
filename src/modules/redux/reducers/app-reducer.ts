import { getAuth } from './auth/auth-reducer'
import { inProgress } from './preloader/preloader-reducer'
const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'
const INITIALIZING = 'INITIALIZING'

let initialState = {
    initialized: false as boolean,
    inProgress: false as boolean,
}

export type AppStateType = typeof initialState

type InitialActionType = {
    type: typeof INITIALIZED_SUCCES | typeof INITIALIZING
}
//ACTION CREATORS
export const initializedSuccess = (): InitialActionType => ({ type: INITIALIZED_SUCCES })
export const initializing = (): InitialActionType => ({ type: INITIALIZING })


//THUNKS
export const initialize = () => async (dispatch: any) => {
    dispatch(inProgress(true))//inProgress-status
    let promiseAuth = () => {
        return dispatch(getAuth())

    }
    await promiseAuth()
    dispatch(inProgress(false))

}


//REDUCER
const appReducer = (state: AppStateType = initialState, action: InitialActionType): AppStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCES: return { ...state, initialized: true, inProgress: false }
        case INITIALIZING: return { ...state, inProgress: true }
        default: return state
    }

}



export default appReducer