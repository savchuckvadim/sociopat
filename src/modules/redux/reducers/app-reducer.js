import { laravelAPI } from '../../services/api-laravel'
import {
    getAuth, laraGetAuth
} from './auth/auth-reducer'
const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'
const INITIALIZING = 'INITIALIZING'

let initialState = {
    initialized: false,
    inProgress: false,
    // laraInitialized: false,
    // laraInProgress: false,
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCES
})
export const initializing = () => ({
    type: INITIALIZING
})


const appReducer = (state = initialState, action) => {


    switch (action.type) {
        case INITIALIZED_SUCCES:

            return {
                ...state,
                initialized: true,
                    inProgress: false
            }
            case INITIALIZING:

                return {
                    ...state,
                    inProgress: true
                }
                default:
                    return state;
    }

}

export const initialize = () => (dispatch) => {

    // let dispatchInitializing = () => {

    //     return dispatch(initializing())
    // }

    let promiseAuth = () => {
//////////////////////////////////////////////////////////////////////////LARAVEL
        // return dispatch(getAuth())
        return dispatch(laraGetAuth())
    }
    dispatch(initializing()) 
    
    promiseAuth().then(responses => {

       
        dispatch(initializedSuccess())
    })


    laravelAPI.me()
    
}




export default appReducer