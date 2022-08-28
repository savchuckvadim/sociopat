import { laravelAPI } from "../../../services/api-laravel";

const REGISTRATING_IN_PROGRESS = 'REGISTRATING_IN_PROGRESS';
const REGISTRATION_SUCSESS = 'REGISTRATION_SUCSESS';

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationStatus: false
}

const registratingInProgress = () => ({ type: REGISTRATING_IN_PROGRESS });
const registrationSuccess = () => ({ type: REGISTRATION_SUCSESS });

export const setNewUser = (name, surname, email, password, password_confirmation) => async (dispatch) => {
    registratingInProgress();
    let res = await laravelAPI.register(name, surname, email, password, password_confirmation)
console.log(res)
    // if(res.statusText === 'Created'){
        registrationSuccess()
    // }
}
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATING_IN_PROGRESS:

            return { ...state, registrationStatus: 'inProgress' };

        case REGISTRATION_SUCSESS:

            return { ...state, registrationStatus: 'sucess' };
        default:
            return state;
    }


}

export default registrationReducer;