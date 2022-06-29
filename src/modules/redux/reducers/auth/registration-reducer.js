import { laravelAPI } from "../../../services/api-laravel"

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
}

export const setNewUser = (name, surname, email, password, password_confirmation) => (dispatch) => {
    laravelAPI.register(name, surname, email, password, password_confirmation)

}
const registrationReducer = (state = initialState, action) => {

    return state

}