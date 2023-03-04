import { PreloaderCodesEnum } from '../../types/types'
import { InferActionsTypes, ThunkType } from '../store'
import { getAuth } from './auth/auth-reducer'
import { getDialogs } from './dialogs/dialogs-reducer'
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
    dispatch(inProgress(true, PreloaderCodesEnum.Global))//inProgress-status
    // let promiseAuth = () => {
    //     return dispatch(getAuth())

    // }
    // await promiseAuth()
    await dispatch(getAuth())
    dispatch(initialActions.initializedSuccess())
    //FROM DIALOGS REDUCER -> get Dialogs
    dispatch(getDialogs())
    dispatch(inProgress(false, PreloaderCodesEnum.Global))//inProgress-status


}


//REDUCER
const appReducer = (state: AppStateType = initialState, action: InitialActionType): AppStateType => {

    switch (action.type) {
        case 'SP/APP/INITIALIZED_SUCCES': return { ...state, initialized: true }
        default: return state
    }

}



export default appReducer