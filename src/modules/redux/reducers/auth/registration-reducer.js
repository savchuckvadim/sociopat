import { authAPI } from "../../../services/api-laravel";
import { getAuth, logout } from "./auth-reducer";

const REGISTRATING_IN_PROGRESS = 'REGISTRATING_IN_PROGRESS';
const REGISTRATION_SUCSESS = 'REGISTRATION_SUCSESS';

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationStatus: false
}

const registratingInProgress = (bool) => ({ type: REGISTRATING_IN_PROGRESS, bool });
const registrationSuccess = () => ({ type: REGISTRATION_SUCSESS });

export const setNewUser = (name, surname, email, password, password_confirmation) => async (dispatch) => {
    dispatch(registratingInProgress(true));
    
    
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
        dispatch(registratingInProgress(false));
    } catch (error) {
        
        dispatch(registratingInProgress(false));
    }


}
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATING_IN_PROGRESS:

            return { ...state, registrationStatus: action.bool };

        case REGISTRATION_SUCSESS:

            return { ...state, registrationStatus: 'success' };
        default:
            return state;
    }


}

export default registrationReducer;