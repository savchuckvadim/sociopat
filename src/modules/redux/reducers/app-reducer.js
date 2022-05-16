import {getAuth} from './auth/auth-reducer'
const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'


let initialState = {
    initialized: false
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCES}) 
      


const appReducer = (state = initialState, action) => {


    switch (action.type) {
        case INITIALIZED_SUCCES:

            return {
                ...state,
                initialized: true
            }

            default:
                return state;
    }

}

export const initialize = () => (dispatch) => {

  let promise = dispatch(getAuth())
Promise.all([promise]).then(responses => {
    dispatch(initializedSuccess())
})

}




export default appReducer