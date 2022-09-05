import { authAPI } from "../../../services/api-laravel";
import { inProgress } from "../preloader/preloader-reducer.ts";
import { getAuth, logout } from "./auth-reducer.ts";

const REGISTRATION_SUCSESS = 'REGISTRATION_SUCSESS';

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationStatus: false
}


const registrationSuccess = () => ({ type: REGISTRATION_SUCSESS });

export const setNewUser = (name, surname, email, password, password_confirmation) => async (dispatch) => {
    dispatch(inProgress(false));
    dispatch(inProgress(true));
    
    
    try {
        let res = await authAPI.register(name, surname, email, password, password_confirmation)
        if (res.statusText === 'Created') {
            dispatch(registrationSuccess());
            dispatch(getAuth())            //from auth reducer
        } else {
            
            if (res.data.error) {
                alert(res.data.error);

            }
        }
        // dispatch(inProgress(false));
    } catch (error) {
        
        dispatch(inProgress(false));  //from preloader-reducer
    }


}
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTRATION_SUCSESS:

            return { ...state, registrationStatus: 'success' };
        default:
            return state;
    }


}

export default registrationReducer;