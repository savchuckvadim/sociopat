import { getAuth } from './auth/auth-reducer'
import { inProgress } from './preloader/preloader-reducer'

const INITIALIZED_SUCCES = 'SP/APP/INITIALIZED_SUCCES'


let initialState = {
    initialized: false as boolean,

}

export type AppStateType = typeof initialState

type InitialActionType = {
    type: typeof INITIALIZED_SUCCES 
}
//ACTION CREATORS
export const initializedSuccess = (): InitialActionType => ({ type: INITIALIZED_SUCCES })



//THUNKS
export const initialize = () => async (dispatch: any) => {
    dispatch(inProgress(true))//inProgress-status
    // let promiseAuth = () => {
    //     return dispatch(getAuth())

    // }
    // await promiseAuth()
    await dispatch(getAuth())
    dispatch(initializedSuccess())
   

}


//REDUCER
const appReducer = (state: AppStateType = initialState, action: InitialActionType): AppStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCES: return { ...state, initialized: true }
        default: return state
    }

}



export default appReducer