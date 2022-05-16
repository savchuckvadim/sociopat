
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


}




export default appReducer