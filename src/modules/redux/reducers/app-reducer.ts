import { InferActionsTypes, ThunkType } from '../store'
import { getAuth } from './auth/auth-reducer'
import { inProgress, InProgressType } from './preloader/preloader-reducer'

//TYPES
type AppStateType = typeof initialState
type InitialActionType = InferActionsTypes<typeof initialActions>
type AuthThunkType = ThunkType<InitialActionType | InProgressType>

// STATE
let initialState = {
    initialized: false as boolean,
}


//ACTION CREATORS
const initialActions = {
    initializedSuccess: () => ({ type: 'SP/APP/INITIALIZED_SUCCES' } as const)
}



//THUNKS
export const initialize = (): AuthThunkType => async (dispatch) => {
    dispatch(inProgress(true))//inProgress-status
    // let promiseAuth = () => {
    //     return dispatch(getAuth())

    // }
    // await promiseAuth()
    await dispatch(getAuth())
    dispatch(initialActions.initializedSuccess())


}


//REDUCER
const appReducer = (state: AppStateType = initialState, action: InitialActionType): AppStateType => {

    switch (action.type) {
        case 'SP/APP/INITIALIZED_SUCCES': return { ...state, initialized: true }
        default: return state
    }

}



export default appReducer